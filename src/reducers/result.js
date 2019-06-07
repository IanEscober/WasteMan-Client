const result = (state = { isFetching: false, items: {} }, action) => {
    switch (action.type) {
        case 'REQUEST_RESULT':
            return Object.assign({}, state, {
                isFetching: true
            });

        case 'RECIEVE_RESULT':
            return Object.assign({}, state, {
                isFetching: false,
                items: action.result
            });

        case 'RESET_RESULT':
            return { isFetching: false, items: {} };

        case 'CLEAR_RESULT':
            return Object.assign({}, state, {
                items: {}
            });

        default:
            return state;
    }
}

export default result;