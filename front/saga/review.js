import axios from 'axios';
import { all, delay, fork, put, takeLatest, throttle } from 'redux-saga/effects';

import {
    ADD_REVIEWS_FAILURE,
    ADD_REVIEWS_REQUEST,
    ADD_REVIEWS_SUCCESS,
    LOAD_REVIEWS_FAILURE,
    LOAD_REVIEWS_REQUEST,
    LOAD_REVIEWS_SUCCESS,
    REMOVE_REVIEWS_FAILURE,
    REMOVE_REVIEWS_REQUEST,
    REMOVE_REVIEWS_SUCCESS,
} from '../reducers/review';


function loadReviewsAPI(data) {
    return axios.get('/api/Reviews', data);
}

function* loadReviews(action) {
    try {
        // const result = yield call(loadReviewsAPI, action.data);
        yield delay(1000);
        yield put({
            type: LOAD_REVIEWS_SUCCESS,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_REVIEWS_FAILURE,
            data: err.response.data,
        });
    }
}

function addReviewAPI(data) {
    return axios.post('/api/Review', data);
}

function* addReview(action) {
    try {
        // const result = yield call(addReviewAPI, action.data);
        yield delay(1000);
        const id = shortId.generate();
        yield put({
            type: ADD_REVIEWS_SUCCESS,
            data: {
                id,
                content: action.data,
            },
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: ADD_REVIEWS_FAILURE,
            data: err.response.data,
        });
    }
}

function removeReviewAPI(data) {
    return axios.delete('/api/Review', data);
}

function* removeReview(action) {
    try {
        // const result = yield call(removeReviewAPI, action.data);
        yield delay(1000);
        yield put({
            type: REMOVE_REVIEWS_SUCCESS,
            data: action.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: REMOVE_REVIEWS_FAILURE,
            data: err.response.data,
        });
    }
}

function* watchLoadReviews() {
    yield throttle(5000, LOAD_REVIEWS_REQUEST, loadReviews);
}

function* watchAddReviews() {
    yield takeLatest(ADD_REVIEWS_REQUEST, addReview);
}

function* watchRemoveReviews() {
    yield takeLatest(REMOVE_REVIEWS_REQUEST, removeReview);
}

export default function* ReviewSaga() {
    yield all([
        fork(watchAddReviews),
        fork(watchLoadReviews),
        fork(watchRemoveReviews)
    ]);
}