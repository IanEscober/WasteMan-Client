import { combineReducers } from 'redux';
import garbageBins from './garbageBins';
import source from './source';
import result from './result';
import marker from './marker';
import date from './date';
import monitor from './monitor';
import filter from './filter';
import angle from './angle';
import notification from './notification';

export default combineReducers({
    garbageBins,
    source,
    result,
    marker,
    date,
    monitor,
    filter,
    angle,
    notification
});