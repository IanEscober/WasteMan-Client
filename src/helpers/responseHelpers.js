export const processResonse = response => {
    if (response.status === 204) {
        return null;
    }
    return response.json();
}