import { appendGarbageBin, sortGarbageBins } from '../helpers/garbageBinsHelpers';

const garbageBins = (state = { isFetching: false, items: [] }, action) => {
    switch (action.type) {
        case 'ADD_GARBAGEBIN':
            return Object.assign({}, state, {
                items: sortGarbageBins(appendGarbageBin(state.items, action))
            });

        case 'REQUEST_GARBAGEBINS':
            return Object.assign({}, state, {
                isFetching: true
            });

        case 'RECIEVE_GARBAGEBINS':
            return Object.assign({}, state, {
                isFetching: false,
                items: action.bins
            });

        case 'RESET_GARBAGEBINS':
            return { isFetching: false, items: [] }

        default:
            return state;
    }
}

export default garbageBins;