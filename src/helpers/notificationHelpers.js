import { isFull, isOverflow, concatGarbageBinNames } from '../helpers/garbageBinsHelpers';
import { isNullOrUndefined } from '../helpers/coalesceHelpers';

export const broadcastNotification = notifSys => ({ title, message, level, autoDismiss = 3, position = 'tr' }) => {
    if (!isNullOrUndefined(notifSys)) {
        notifSys.addNotification({
            title: title,
            message: message,
            level: level,
            position: position,
            autoDismiss: autoDismiss
        });
    }
}

export const nullNotification = title => ({
    title,
    message: 'Nothing found',
    level: 'info'
});

export const errorNotification = (title, cause) => ({
    title,
    message: 'There was an error '.concat(cause),
    level: 'error'
})

export const notifyGarbageBin = bin => {
    const { name } = bin;
    const title = `Garbage Bin ${name}`;

    if (isFull(bin)) {
        return fullNotification(title);
    } else if (isOverflow(bin)) {
        return overflowNotification(title);
    } else {
        return {};
    }
}

export const notifyGarbageBins = bins => {
    const fullBins = bins.filter(bin => isFull(bin));
    const overflowBins = bins.filter(bin => isOverflow(bin));

    if (fullBins.length && overflowBins.length) {
        return {
            fullNotification: fullNotification(concatGarbageBinNames(fullBins)),
            overflowNotification: overflowNotification(concatGarbageBinNames(overflowBins))
        }
    } else if (fullBins.length) {
        return {
            fullNotification: fullNotification(concatGarbageBinNames(fullBins)),
            overflowNotification: {}
        }
    } else if (overflowBins.length) {
        return {
            fullNotification: {},
            overflowNotification: overflowNotification(concatGarbageBinNames(overflowBins))
        }
    } else {
        return {
            fullNotification: {},
            overflowNotification: {}
        }
    }
}

const fullNotification = title => ({
    title,
    message: 'is full',
    level: 'warning'
});

const overflowNotification = title => ({
    title,
    message: 'is overflowing',
    level: 'error'
});