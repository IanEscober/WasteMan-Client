import { processResonse } from '../helpers/responseHelpers';

const resetResult = () => ({
    type: 'RESET_RESULT'
});
const requestResult = source => ({
    type: 'REQUEST_RESULT',
    source
});
const recieveResult = result => ({
    type: 'RECIEVE_RESULT',
    result
});
const fetchResult = source => dispatch => {
    dispatch(requestResult(source))
    return fetch(process.env.REACT_APP_RESULT_API_URL.concat(source))
        .then(response => processResonse(response))
        .then(json => {
            dispatch(proxyFetchResultSuccess({ json }));
            if (json === null) {
                dispatch(resetResult());
            } else {
                dispatch(recieveResult(json));
            }
        })
        .catch(() => {
            dispatch(proxyFetchResultFail({ source }));
            dispatch(resetResult());
        });
}
const shouldFetchResult = state => {
    const result = state.result;
    if (result.isFetching) {
        return false;
    } else {
        return true;
    }
}
const proxyFetchResultSuccess = (args = null) => ({
    type: 'PROXY_FETCH_RESULT_SUCCESS',
    args
});
const proxyFetchResultFail = (args = null) => ({
    type: 'PROXY_FETCH_RESULT_FAIL',
    args
});

export const execFetchResult = source => (dispatch, getState) => {
    if (shouldFetchResult(getState())) {
        return dispatch(fetchResult(source));
    }
}
export const clearResult = () => ({
    type: 'CLEAR_RESULT'
});