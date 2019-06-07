const source = (state = { toggle: true, source: 'A' }, action) => {
    switch (action.type) {
        case 'SELECT_SOURCE':
            return Object.assign({}, state, {
                source: action.source
            });
        case 'TOGGLE_SOURCE':
            return Object.assign({}, state, {
                toggle: action.arg
            });
        case 'RESET_SOURCE':
            return { toggle: true, source: 'A' }
        default:
            return state
    }
}

export default source;
