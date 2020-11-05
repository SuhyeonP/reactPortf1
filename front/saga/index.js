import { all, fork } from 'redux-saga/effects';

import ReviewSaga from './review';
import userSaga from './user';

export default function* rootSaga() {
    yield all([
        fork(userSaga),
        fork(ReviewSaga),
    ]);
}