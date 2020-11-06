import { applyMiddleware, createStore, compose } from 'redux';
import { createWrapper } from 'next-redux-wrapper';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import rootSaga from '../saga';

const configure = (context) => {
    console.log(context);
    console.log('here is configure store');
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];//배열로 빼서 여기에 saga나 thunk가 들어감
    const enhancer = process.env.NODE_ENV === 'production'
        ? compose(applyMiddleware(...middlewares))
        : composeWithDevTools(
            applyMiddleware(...middlewares),
        );//redux dev tools usage tool and use only develop mode
    const store = createStore(reducer, enhancer);
    store.sagaTask = sagaMiddleware.run(rootSaga);
    return store;
};

const wrapper = createWrapper(configure, { debug: process.env.NODE_ENV === 'development' });

export default wrapper;