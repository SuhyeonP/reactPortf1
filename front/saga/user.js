import { all, delay, fork, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

import{
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE,
    FOLLOW_STORE_REQUEST,
    FOLLOW_STORE_SUCCESS,
    FOLLOW_STORE_FAILURE,
    UNFOLLOW_STORE_REQUEST,
    UNFOLLOW_STORE_SUCCESS,
    UNFOLLOW_STORE_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    SIGN_UP_FAILURE
}from '../reducers/user'

function logInAPI(data) {
    return axios.post('/api/login', data);
}

function* logIn(action) {
    try {
        console.log('saga logIn i came here');
        // const result = yield call(logInAPI);
        yield delay(1000);
        yield put({
            type: LOG_IN_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        console.log('it occur login error')
        console.error(err);
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data,
        });
    }
}

function logOutAPI() {
    return axios.post('/api/logout');
}

function* logOut() {
    try {
        // const result = yield call(logOutAPI);
        yield delay(1000);
        yield put({
            type: LOG_OUT_SUCCESS,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        });
    }
}

function signUpAPI() {
    return axios.post('/api/signUp');
}

function* signUp() {
    try {
        // const result = yield call(signUpAPI);
        yield delay(1000);
        yield put({
            type: SIGN_UP_SUCCESS,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data,
        });
    }
}
function followStoreAPI() {
    return axios.post('/api/followStore');
}

function* followStore(action) {
    try {
        // const result = yield call(followStoreAPI);
        yield delay(1000);
        yield put({
            type: FOLLOW_STORE_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: FOLLOW_STORE_FAILURE,
            error: err.response.data,
        });
    }
}

function unfollowStoreAPI() {
    return axios.post('/api/unfollowStore');
}

function* unfollowStore(action) {
    try {
        // const result = yield call(unfollowStoreAPI);
        yield delay(1000);
        yield put({
            type: UNFOLLOW_STORE_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: UNFOLLOW_STORE_FAILURE,
            error: err.response.data,
        });
    }
}


function* watchStoreUnfollow() {
    yield takeLatest(UNFOLLOW_STORE_REQUEST, unfollowStore);
}

function* watchStoreFollow() {
    yield takeLatest(FOLLOW_STORE_REQUEST, followStore);
}

function* watchLogIn() {
    console.log('here is watchLogin saga')
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
    yield all([
        fork(watchStoreFollow),
        fork(watchStoreUnfollow),
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
    ]);
}