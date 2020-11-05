import produce from '../util/produce';

export const initialState={
    followLoading:false,
    followDone:false,
    followError:null,
    unfollowLoading:false,
    unfollowDone:false,
    unfollowError:null,
    followStoreLoading:false,
    followStoreDone:false,
    followStoreError:null,
    unfollowStoreLoading:false,
    unfollowStoreDone:false,
    unfollowStoreError:null,
    loginLoading:false,
    loginDone:false,
    loginError:null,
    signUpLoading:false,
    signUpDone:false,
    signUpError:null,
    me:null,
    signUpData:{},
    loginData:{}
};

export const LOG_IN_REQUEST='LOG_IN_REQUEST'
export const LOG_IN_SUCCESS='LOG_IN_SUCCESS'
export const LOG_IN_FAILURE='LOG_IN_FAILURE'

export const LOG_OUT_REQUEST='LOG_OUT_REQUEST'
export const LOG_OUT_SUCCESS='LOG_OUT_SUCCESS'
export const LOG_OUT_FAILURE='LOG_OUT_FAILURE'

export const UNFOLLOW_USER_REQUEST='UNFOLLOW_USER_REQUEST'
export const UNFOLLOW_USER_SUCCESS='UNFOLLOW_USER_SUCCESS'
export const UNFOLLOW_USER_FAILURE='UNFOLLOW_USER_FAILURE'

export const FOLLOW_USER_REQUEST='FOLLOW_USER_REQUEST'
export const FOLLOW_USER_SUCCESS='FOLLOW_USER_SUCCESS'
export const FOLLOW_USER_FAILURE='FOLLOW_USER_FAILURE'

export const FOLLOW_STORE_REQUEST='FOLLOW_STORE_REQUEST'
export const FOLLOW_STORE_SUCCESS='FOLLOW_STORE_SUCCESS'
export const FOLLOW_STORE_FAILURE='FOLLOW_STORE_FAILURE'

export const SIGN_UP_REQUEST='SIGN_UP_REQUEST'
export const SIGN_UP_SUCCESS='SIGN_UP_SUCCESS'
export const SIGN_UP_FAILURE='SIGN_UP_FAILURE'

export const UNFOLLOW_STORE_REQUEST='UNFOLLOW_STORE_REQUEST'
export const UNFOLLOW_STORE_SUCCESS='UNFOLLOW_STORE_SUCCESS'
export const UNFOLLOW_STORE_FAILURE='UNFOLLOW_STORE_FAILURE'

const dummyUser=(data)=>({
    ...data,
    isLoggedIn:false,
    name:'test',
    id:1,
    Reviews:[{id:1}],
    FollowingStore:[{name:'macdonald'},{name:'hansin'},{name:'dentist'}],
    FollowingUser:[{name:'su'},{name:'hn'},{name:'dtttt'}],
    FollowerUser:[{name:'suyomi'},{name:'backjong'},{name:'shef'}],
})
const dummyUser2=(data)=>({
    ...data,
    isLoggedIn:false,
    name:'test2',
    id:2,
    Reviews:[{id:1}],
    FollowingStore:[{name:'lonald'},{name:'hansin'},{name:'dentist'}],
    FollowingUser:[{name:'sudf'},{name:'hn'},{name:'dtttt'}],
    FollowerUser:[{name:'yomi'},{name:'b100'},{name:'shef'}],
})
export const loginRequestAction = (data) => ({
    type: LOG_IN_REQUEST,
    data,
});

export const logoutRequestAction = () => ({
    type: LOG_OUT_REQUEST,
});
const reducer=(state=initialState,action)=>produce(state,(draft)=>{
    switch (action.type){//user follow
        case FOLLOW_USER_REQUEST:
            draft.followLoading=true;
            draft.followError=null;
            draft.followDone=false;
            break;
        case FOLLOW_USER_SUCCESS:
            draft.followLoading=false;
            draft.followDone=true;
            draft.me.FollowingUser.push({ id: action.data });
            break;
        case FOLLOW_USER_FAILURE:
            draft.followError=action.error;
            draft.followLoading=false;
            break;

//user unfollow
        case UNFOLLOW_USER_REQUEST:
            draft.unfollowLoading=true;
            draft.unfollowError=null;
            draft.unfollowDone=false;
            break;
        case UNFOLLOW_USER_SUCCESS:
            draft.unfollowLoading=false;
            draft.unfollowDone=true;
            draft.me.FollowingUser=draft.me.FollowerUser.filter((v)=>v.id!==action.data);
            break;
        case UNFOLLOW_USER_FAILURE:
            draft.unfollowError=action.error;
            draft.unfollowLoading=false;
            break;

//store follow
        case FOLLOW_STORE_REQUEST:
            draft.followStoreLoading=true;
            draft.followStoreError=null;
            draft.followStoreDone=false;
            break;
        case FOLLOW_STORE_SUCCESS:
            draft.followStoreLoading=false;
            draft.followStoreDone=true;
            draft.me.FollowingStore.push({ id: action.data });
            break;
        case FOLLOW_STORE_FAILURE:
            draft.followStoreError=action.error;
            draft.followStoreLoading=false;
            break;

//store unfollow
        case UNFOLLOW_STORE_REQUEST:
            draft.unfollowStoreLoading=true;
            draft.unfollowStoreError=null;
            draft.unfollowStoreDone=false;
            break;
        case UNFOLLOW_STORE_SUCCESS:
            draft.unfollowStoreLoading=false;
            draft.unfollowStoreDone=true;
            draft.me.FollowingStore=draft.me.FollowingStore.filter((v)=>v.id!==action.data);
            break;
        case UNFOLLOW_STORE_FAILURE:
            draft.unfollowStoreError=action.error;
            draft.unfollowStoreLoading=false;
            break;

//signup user
        case SIGN_UP_REQUEST:
            draft.signUpLoading=true;
            draft.signUpError=null;
            draft.signUpDone=false;
            break;
        case SIGN_UP_SUCCESS:
            draft.signUpLoading=false;
            draft.signUpDone=true;
            break;
        case SIGN_UP_FAILURE:
            draft.signUpError=action.error;
            draft.signUpLoading=false;
            break;
//login
        case LOG_IN_REQUEST:
            console.log('here is login request')
            draft.logInLoading = true;
            draft.logInError = null;
            draft.logInDone = false;
            break;
        case LOG_IN_SUCCESS:
            console.log('here is login success')
            draft.logInLoading = false;
            draft.me = dummyUser(action.data);
            draft.logInDone = true;
            break;
        case LOG_IN_FAILURE:
            draft.logInLoading = false;
            draft.logInError = action.error;
            break;
            //logout
        case LOG_OUT_REQUEST:
            draft.logOutLoading = true;
            draft.logOutError = null;
            draft.logOutDone = false;
            break;
        case LOG_OUT_SUCCESS:
            draft.logOutLoading = false;
            draft.logOutDone = true;
            draft.me = null;
            break;
        case LOG_OUT_FAILURE:
            draft.logOutLoading = false;
            draft.logOutError = action.error;
            break;

        default:
            break;
    }
})


export default reducer;