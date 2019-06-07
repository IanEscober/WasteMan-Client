import moment from 'moment';

const date = (state = moment(), action) => {
    switch (action.type) {
        case 'SELECT_DATE':
            return action.date;
        case 'RESET_DATE':
            return moment();
        default:
            return state
    }
}

export default date;