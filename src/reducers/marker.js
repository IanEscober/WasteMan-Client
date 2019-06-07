const marker = (state = false, action) => {
    switch (action.type) {
        case 'SWITCH_MARKER':
            return action.arg;
        default:
            return state
    }
}

export default marker;