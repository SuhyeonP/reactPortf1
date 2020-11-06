import React, {useCallback, useEffect, useRef, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import ReviewWrite from "./ReviewWrite";
import UserReviews from "./UserReviews";
import PropTypes from 'prop-types'

const ReviewZone=()=>{
    const dispatch = useDispatch();
    const {userReview}=useSelector(state=>state.Reviews)
    const { me } = useSelector((state) => state.user);
    const id = me && me.id;

    return(
        <div>
            {id&&<ReviewWrite/>}
            <h2>개발중입니다.</h2>
            {/*{userReview.map((x)=>{*/}
            {/*    return (*/}
            {/*        <UserReviews key={x.id} review={x}/>*/}
            {/*    )*/}
            {/*})}*/}
        </div>
    )
}
ReviewZone.propTypes={
    review:PropTypes.shape({
        id:PropTypes.number,
        User:PropTypes.object,
        content:PropTypes.string,
        createdAt:PropTypes.object,
        Images:PropTypes.arrayOf(PropTypes.object)
    }).isRequired,
}

export default ReviewZone;