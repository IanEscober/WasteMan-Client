import { broadcastNotification } from '../actions/notification';
import { isValidDate } from '../helpers/dateHelpers';
import { isNullOrUndefined } from '../helpers/coalesceHelpers';
import { notifyGarbageBins, nullNotification, errorNotification } from '../helpers/notificationHelpers';

const notifier = store => next => action => {
    const { dispatch } = store;
    const { type, args } = action;

    switch (type) {
        case 'PROXY_FETCH_GARBAGEBINS_SUCCESS': {
            const { json: bins, source } = args;

            if (isNullOrUndefined(bins)) {
                const notification = nullNotification('Garbage Bin');
                dispatch(broadcastNotification(notification));
            } else {
                if (isValidDate(source)) {
                    const { fullNotification, overflowNotification } = notifyGarbageBins(bins);

                    if (Object.keys(fullNotification).length) {
                        dispatch(broadcastNotification(fullNotification));
                    }
                    if (Object.keys(overflowNotification).length) {
                        dispatch(broadcastNotification(overflowNotification));
                    }
                }
            }
            break;
        }
        case 'PROXY_FETCH_GARBAGEBINS_FAIL': {
            const notification = errorNotification('Garbage Bin', 'in fetching');
            dispatch(broadcastNotification(notification));
            break;
        }
        case 'PROXY_FETCH_RESULT_SUCCESS': {
            const { json: result } = args;
            if (isNullOrUndefined(result)) {
                const notification = nullNotification('Result');
                dispatch(broadcastNotification(notification));
            }
            break;
        }
        case 'PROXY_FETCH_RESULT_FAIL': {
            const notification = errorNotification('Result', 'in fetching');
            dispatch(broadcastNotification(notification));
            break;
        }
        default: {
            break;
        }
    }

    return next(action);
}

export default notifier;