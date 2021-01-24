import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';

const composeEnhanchers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhanchers(applyMiddleware(reduxThunk))); // 1.1

ReactDOM.render(
    <Provider store={store}>
        <App /> 
    </Provider>,
    document.querySelector('#root')
);









/*
// 1.1
Thunk or any other middleware will be added here. 
*/