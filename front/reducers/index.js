import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import user from './user';
import Reviews from './review';
import store from './store'

const rootReducer = combineReducers({//reducer 합쳐주는 redux메서드
    index: (state = {}, action) => {
        switch (action.type) {
            case HYDRATE://this is for after serverside-rendering
                console.log('i came here hydrate')
                console.log('HYDRATE', action);
                return { ...state, ...action.payload };
            default:
                console.log('i came here case:default')
                return state;
        }
    },
    user,
    Reviews,
    store,
});

export default rootReducer;