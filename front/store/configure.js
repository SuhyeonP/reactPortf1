import { applyMiddleware, createStore, compose } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from '../reducers';

const configure = (context) => {
    console.log(context);
    console.log('here is configure store');
    const middlewares = [];//배열로 빼서 여기에 saga나 thunk가 들어감
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middlewares))
        : composeWithDevTools(
            applyMiddleware(...middlewares),
        );//redux dev tools usage tool and use only develop mode
    const store = createStore(reducer, enhancer);
    return store;
};

const wrapper = createWrapper(configure, { debug: process.env.NODE_ENV === 'development' });

export default wrapper;