import produce from '../util/produce';

export const initialState={
    signupStoreLoading:false,
    signupStoreDone:false,
    signupStoreError:null,

}

const reducer=(state=initialState,action)=>{
    switch (action.type){

        default:
            return state;
    }
}

export default reducer;