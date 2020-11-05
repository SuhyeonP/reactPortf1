import produce from '../util/produce';

export const initialState={
    mainReview:[],
    imagePaths:[],
    loadReviewLoading:false,
    loadReviewDone:false,
    loadReviewError:null,
    addReviewLoading:false,
    addReviewDone:false,
    addReviewError:null,
    removeReviewLoading:false,
    removeReviewDone:false,
    removeReviewError:null,
}

export const LOAD_REVIEWS_REQUEST='LOAD_REVIEWS_REQUEST';
export const LOAD_REVIEWS_SUCCESS='LOAD_REVIEWS_SUCCESS';
export const LOAD_REVIEWS_FAILURE='LOAD_REVIEWS_FAILURE';

export const ADD_REVIEWS_REQUEST='ADD_REVIEWS_REQUEST';
export const ADD_REVIEWS_SUCCESS='ADD_REVIEWS_SUCCESS';
export const ADD_REVIEWS_FAILURE='ADD_REVIEWS_FAILURE';

export const REMOVE_REVIEWS_REQUEST='REMOVE_REVIEWS_REQUEST';
export const REMOVE_REVIEWS_SUCCESS='REMOVE_REVIEWS_SUCCESS';
export const REMOVE_REVIEWS_FAILURE='REMOVE_REVIEWS_FAILURE';


export const addReviews=(data)=>({
    type:ADD_REVIEWS_REQUEST,
    data,
})
const dummyPost=(data)=>({
    id:data.id,
    content:data.content,
    User:{
        id:1,
        name:'hyeon'
    },
    Images:[]
})

const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case LOAD_REVIEWS_REQUEST:// load the review of store
            draft.loadReviewLoading=true;
            draft.loadReviewDone=false;
            draft.loadReviewError=null;
            break;
        case LOAD_REVIEWS_REQUEST:
            draft.loadReviewLoading=false;
            draft.loadReviewDone=true;
            draft.mainReview=action.data.concat(draft.mainReview);
            break;
        case LOAD_REVIEWS_FAILURE:
            draft.loadReviewLoading=false;
            draft.loadReviewError=action.error;
            break;

        case ADD_REVIEWS_REQUEST:// add the review of store
            draft.addReviewLoading=true;
            draft.addReviewDone=false;
            draft.addReviewError=null;
            break;
        case ADD_REVIEWS_REQUEST:
            draft.addReviewLoading=false;
            draft.addReviewDone=true;
            draft.mainReview=action.data.unshift(dummyPost(action.data))
            break;
        case ADD_REVIEWS_FAILURE:
            draft.addReviewLoading=false;
            draft.addReviewError=action.error;
            break;

        case REMOVE_REVIEWS_REQUEST://remove the reviews
            draft.removeReviewLoading = true;
            draft.removeReviewDone = false;
            draft.removeReviewError = null;
            break;
        case REMOVE_REVIEWS_SUCCESS:
            draft.removeReviewLoading = false;
            draft.removeReviewDone = true;
            draft.mainReview = draft.mainReview.filter((v) => v.id !== action.data);
            break;
        case REMOVE_REVIEWS_FAILURE:
            draft.removeReviewLoading = false;
            draft.removeReviewError = action.error;
            break;

    }
});
export default reducer;