import {Reducer} from 'redux';
import enUS from 'antd/lib/locale/en_US';
import {ConfigActionTypes, ConfigState, ConfigActions} from './types';

export const initialConfigState: ConfigState = {
    data: {
        locale: enUS.locale,
        theme: 'default',
    }
};

const reducer: Reducer<ConfigState> = (
    state: ConfigState = initialConfigState,
    action: ConfigActions
) => {
    switch (action.type) {
        case ConfigActionTypes.SET_LOCALE: {
            return {
                data: {
                    ...state.data,
                    locale: action.payload,
                },
            };
        }
        case ConfigActionTypes.SET_THEME: {
            return {
                data: {
                    ...state.data,
                    theme: action.payload,
                },
            };
        }
        default: {
            return state;
        }
    }
};

export {reducer as ConfigReducer};
