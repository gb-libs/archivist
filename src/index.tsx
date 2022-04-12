import React from 'react'
import ReactDOM from 'react-dom/client'
import {Provider} from 'react-redux'
import {ConfigProvider} from 'antd'
import en_US from 'antd/lib/locale/en_US';

import reportWebVitals from './utils/reportWebVitals';
import AppRoute from './router'
import store from './store'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider locale={en_US}>
        <AppRoute/>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);


reportWebVitals();
