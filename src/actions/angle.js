import { invokeToHub } from '../signalr/signalr';

export const selectAngle = angle => ({
    type: 'SELECT_ANGLE',
    angle
});
export const toggleAngle = arg => ({
    type: 'TOGGLE_ANGLE',
    arg
});
export const execChangeAngle = angle => {
    invokeToHub("Publisher", "GarbageBin/1/OverflowAngle", angle);
}