import React from 'react';
import { Provider } from 'react-redux';
import { Store } from 'redux';

import App from './App';
import {ConfigState} from '../redux/config/typings.d';

interface Props {
  config: Store<ConfigState>;
}

const Root: React.FunctionComponent<Props> = props => {
  return (
    <Provider store={props.config}>
      <App />
    </Provider>
  );
};

export default Root;
