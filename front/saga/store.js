import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import{
    SIGNUP_STORE_REQUEST,
    SIGNUP_STORE_SUCCESS,
    SIGNUP_STORE_FAILURE
}from '../reducers/store'



function signUpAPI() {
    return axios.post('/api/signUp');
}

function* signUp() {
    try {
        // const result = yield call(signUpAPI);
        yield delay(1000);
        yield put({
            type: SIGNUP_STORE_SUCCESS,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: SIGNUP_STORE_FAILURE,
            error: err.response.data,
        });
    }
}


function* watchSignUp() {
    yield takeLatest(SIGNUP_STORE_REQUEST, signUp);
}

export default function* userStore() {
    yield all([
        fork(watchSignUp),
    ]);
}