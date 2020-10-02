import { combineReducers } from 'redux';
import appReducer from './appDuck';

const rootReducer = combineReducers({ appReducer });

export default rootReducer;
