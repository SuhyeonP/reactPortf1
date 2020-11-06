import produce from '../util/produce';

export const initialState={
    signupStoreLoading:false,
    signupStoreDone:false,
    signupStoreError:null,
}

export const SIGNUP_STORE_REQUEST='SIGNUP_STORE_REQUEST'
export const SIGNUP_STORE_SUCCESS='SIGNUP_STORE_SUCCESS'
export const SIGNUP_STORE_FAILURE='SIGNUP_STORE_FAILURE'


const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case SIGNUP_STORE_REQUEST:
            draft.signupStoreLoading=true;
            draft.signupStoreDone=false;
            draft.signupStoreError=null;
            break;
        case SIGNUP_STORE_SUCCESS:
            draft.signupStoreLoading=false;
            draft.signupStoreDone=true;
            break;
        case SIGNUP_STORE_FAILURE:
            draft.signupStoreLoading=false;
            draft.signupStoreError=action.error;
            break;
        default:
            return state;
    }
})

export default reducer;