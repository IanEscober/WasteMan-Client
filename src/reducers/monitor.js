const monitor = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_MONITOR':
            return action.arg;
        default:
            return state
    }
}

export default monitor;