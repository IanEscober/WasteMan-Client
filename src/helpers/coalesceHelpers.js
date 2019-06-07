export const isNullOrUndefined = item => (
    item === null || item === undefined
);

export const coalesce = (item, placeHolder, property = null) => {
    if (isNullOrUndefined(item)) {
        return placeHolder;
    } else if (isNullOrUndefined(property)) {
        return item;
    } else {
        return item[property];
    }    
}