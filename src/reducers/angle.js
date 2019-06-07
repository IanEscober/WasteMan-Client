const angle = (state = { toggle: true, angle: 45 }, action) => {
    switch (action.type) {
        case 'SELECT_ANGLE':
            return Object.assign({}, state, {
                angle: action.angle
            });
        case 'TOGGLE_ANGLE':
            return Object.assign({}, state, {
                toggle: action.arg
            });
        default:
            return state
    }
}

export default angle;
