export const selectSource = source => ({
    type: 'SELECT_SOURCE',
    source
});
export const toggleSource = arg => ({
    type: 'TOGGLE_SOURCE',
    arg
});
export const resetSource = () => ({
    type: 'RESET_SOURCE'
});