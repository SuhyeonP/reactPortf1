import { all, fork } from 'redux-saga/effects';

import ReviewSaga from './review';
import userSaga from './user';

export default function* rootSaga() {
    console.log('i came rootsaga~ index');
    yield all([
        fork(userSaga),
        fork(ReviewSaga),
    ]);
}