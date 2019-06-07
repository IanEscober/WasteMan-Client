const addNotification = notification => ({
    type: 'ADD_NOTIFICATION',
    notification
});

const resetNotification = () => ({
    type: 'RESET_NOTIFICATION'
});

export const broadcastNotification = notification => dispatch => {
    dispatch(addNotification(notification));
    dispatch(resetNotification());
}