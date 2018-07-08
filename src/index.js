import React from 'react';
import { render } from 'react-dom';
import AppRouter from './routers/AppRouter.jsx';
import { Provider } from 'react-redux';
import store from './store';
import { getUsers } from './actions/actions';

const root = document.getElementById('root');

store.dispatch((() => getUsers()));

render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  root
);
