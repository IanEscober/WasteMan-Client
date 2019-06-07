const notification = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_NOTIFICATION':
            return action.notification;

        case 'RESET_NOTIFICATION':
            return {}

        default:
            return state;
    }
}

export default notification;