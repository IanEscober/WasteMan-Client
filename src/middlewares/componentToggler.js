import { connectToHub, disconnectToHub } from '../signalr/signalr';
import { clearResult } from '../actions/result';
import { selectSource, resetSource, toggleSource } from '../actions/source';
import { resetDate } from '../actions/date';
import { toggleMonitor } from '../actions/monitor';
import { toggleAngle } from '../actions/angle';
import { isValidDate } from '../helpers/dateHelpers';
import { isNullOrUndefined } from '../helpers/coalesceHelpers';

const toggleCommonComponents = (isDisabled, dispatch) => {
    dispatch(toggleSource(isDisabled)); //default=true
    dispatch(toggleMonitor(!isDisabled)); //default=false
    dispatch(toggleAngle(isDisabled)); //default=true
}
const toggleByGarbageBins = (type, args, dispatch) => {
    switch (type) {
        case 'PROXY_FETCH_GARBAGEBINS_SUCCESS': {
            const { source, shouldToggle } = args;
            if (isValidDate(source)) {
                toggleCommonComponents(true, dispatch);
                disconnectToHub(dispatch);
            } else {
                if (shouldToggle) {
                    dispatch(clearResult());
                    dispatch(resetSource());
                    dispatch(resetDate());
                    toggleCommonComponents(false, dispatch);
                    connectToHub(dispatch);
                }
            }
            break;
        }
        case 'PROXY_FETCH_GARBAGEBINS_FAIL': {
            toggleCommonComponents(true, dispatch);
            break;
        }
        default: {
            break;
        }
    }
}
const toggleByResult = (type, args, dispatch) => {
    switch (type) {
        case 'PROXY_FETCH_RESULT_SUCCESS': {
            const { json } = args;
            if (isNullOrUndefined(json)) {
                dispatch(resetSource());
            } else {
                const { source } = json;
                dispatch(selectSource(source));
            }
            toggleCommonComponents(true, dispatch);
            disconnectToHub();
            break;
        }
        case 'PROXY_FETCH_RESULT_FAIL': {
            const { source } = args;
            dispatch(resetSource());
            if (!isValidDate(source)) {
                dispatch(toggleSource(false));
            }
            break;
        }
        default: {
            break;
        }
    }
}

const componentToggler = store => next => action => {
    const { dispatch } = store;
    const { type, args } = action;

    switch (type) {
        case 'PROXY_FETCH_GARBAGEBINS_SUCCESS':
        case 'PROXY_FETCH_GARBAGEBINS_FAIL': {
            toggleByGarbageBins(type, args, dispatch);
            break;
        }
        case 'PROXY_FETCH_RESULT_SUCCESS':
        case 'PROXY_FETCH_RESULT_FAIL': {
            toggleByResult(type, args, dispatch);
            break;
        }
        default: {
            break;
        }
    }

    return next(action);
}

export default componentToggler;