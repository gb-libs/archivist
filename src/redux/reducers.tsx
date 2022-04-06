import {combineReducers} from 'redux';
import {ConfigReducer} from './config/reducer';
import {ConfigState} from './config/typings.d';

export interface State {
  config: ConfigState
}

export const rootReducers = combineReducers<State>({
  config: ConfigReducer,
});
