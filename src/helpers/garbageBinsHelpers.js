export const appendGarbageBin = (state, action) => {
    let exist = false;

    const appendedState = state.map(bin => {
        if (bin.name === action.bin.name) {
            exist = true;
            bin = action.bin;
        }

        return bin;
    });

    if (exist) {
        return [...appendedState];
    }

    return [
        ...appendedState,
        action.bin
    ];
}

export const filterGarbageBins = (state, filter) => {
    if (filter) {
        return Object.assign({}, state, {
            items: state.items.filter(bin => isFull(bin) || isOverflow(bin))
        });
    } else {
        return state;
    }
}

export const sortGarbageBins = state => {
    state.sort((curr, next) => {
        if (curr.name < next.name) {
            return -1;
        }
        if (curr.name > next.name) {
            return 1;
        }

        return 0;
    });

    return [...state];
}

export const isFull = bin => {
    const { level, lidState } = bin;
    const decision =
        level >= 80 &&
        level <= 100 &&
        lidState === 'Closed';

    return decision;
}

export const isOverflow = bin => {
    const { level, lidState } = bin;
    const decision =
        level > 100 &&
        lidState === 'Overflow';

    return decision;
}

export const concatGarbageBinNames = bins => {
    let name = 'Garbage Bin ';
    bins.forEach(bin => name  = name.concat(bin.name, ','));
    return name.slice(0, -1);
}