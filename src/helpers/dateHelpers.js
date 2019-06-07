import moment from 'moment';

export const isValidDate = source => 
    moment(source).isValid();