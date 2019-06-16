import { processResonse } from '../helpers/responseHelpers';

const resetGarbageBins = () => ({
    type: 'RESET_GARBAGEBINS'
});
const requestGarbageBins = source => ({
    type: 'REQUEST_GARBAGEBINS',
    source
});
const recieveGarbageBins = bins => ({
    type: 'RECIEVE_GARBAGEBINS',
    bins
});
const fetchGarbageBins = (source, shouldToggle) => dispatch => {
    dispatch(requestGarbageBins(source))
    return fetch(window._env_.REACT_APP_GARBAGEBIN_API_URL.concat(source))
        .then(response => processResonse(response))
        .then(json => {
            dispatch(proxyFetchGarbageBinsSuccess({ json, source, shouldToggle }));
            if (json === null) {
                dispatch(resetGarbageBins());
            } else {
                dispatch(recieveGarbageBins(json));
            }
        })
        .catch(() => {
            dispatch(proxyFetchGarbageBinsFail());
            dispatch(resetGarbageBins());
        });
}
const shouldFetchGarbageBins = state => {
    const bins = state.garbageBins;
    if (bins.isFetching) {
        return false;
    } else {
        return true;
    }
}
const proxyFetchGarbageBinsSuccess = (args = null) => ({
    type: 'PROXY_FETCH_GARBAGEBINS_SUCCESS',
    args
});
const proxyFetchGarbageBinsFail = (args = null) => ({
    type: 'PROXY_FETCH_GARBAGEBINS_FAIL',
    args
});

export const execFetchGarbageBins = (source, shouldToggle) => (dispatch, getState) => {
    if (shouldFetchGarbageBins(getState())) {
        return dispatch(fetchGarbageBins(source, shouldToggle));
    }
}
export const addGarbageBin = bin => ({
    type: 'ADD_GARBAGEBIN',
    bin
});