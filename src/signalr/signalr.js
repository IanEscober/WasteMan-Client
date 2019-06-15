import { HubConnectionBuilder } from '@aspnet/signalr/dist/browser/signalr';
import { addGarbageBin, broadcastNotification } from '../actions/index';
import { notifyGarbageBin, errorNotification } from '../helpers/notificationHelpers';

const connection = new HubConnectionBuilder()
    .withUrl(window._env_.GARBAGEBIN_HUB_URL)
    .build();

export const registerHubHandlers = dispatch =>
    connection.on('OnReceiveMessage', message => {
        const notification = notifyGarbageBin(message);
        if (Object.keys(notification).length > 0) {
            dispatch(broadcastNotification(notification));
        }
        dispatch(addGarbageBin(message));
    });

export const connectToHub = dispatch =>
    connection
        .start()
        .catch(() => {
            console.log('Im here');
            const notification = errorNotification('Hub', 'in connecting');
            dispatch(broadcastNotification(notification));
        });

export const disconnectToHub = dispatch =>
    connection
        .stop()
        .catch(() => {
            const notification = errorNotification('Hub', 'in disconnecting');
            dispatch(broadcastNotification(notification));
        });

export const invokeToHub = (paramName, ...params) =>
    connection.invoke(paramName, ...params);
