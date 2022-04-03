import {
    combineReducers,
    createStore,
    Store,
    AnyAction
} from 'redux';
import AppState from './state/AppState';

const rootReducer = combineReducers<AppState>({
    // TODO: add sub-reducers here...
});

export default function configureStore(): Store<AppState, AnyAction> {
    return createStore(rootReducer, undefined);
}
