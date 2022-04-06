import { ActionCreator, Action, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import { ConfigActionTypes, Config, ConfigState } from './types';
import { ApplicationState } from '../index';

export type AppThunk = ThunkAction<void, ApplicationState, null, Action<string>>;

export const setLocale: AppThunk = () => {
  return (dispatch: Dispatch, state: ApplicationState): Action => {
    try {
      return dispatch({
        type: CartActionTypes.FETCH_CART_SUCCESS,
        payload: state.cart
      });
    } catch (e) {
      return dispatch({
        type: CartActionTypes.FETCH_CART_ERROR
      });
    }
  };
};
