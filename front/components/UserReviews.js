import React from 'react'
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Card, Button, Avatar, Popover, List, Comment } from 'antd';
import ReviewImages from "./ReviewImages";
import ReviewContent from "./ReviewContent";
import {useSelector} from "react-redux";

const UserReviews =({review})=>{
    const {me}=useSelector((state)=>state.user);
    const id=me?.id;

    return(
        <div>
            <Card cover={review.Images[0]&&<ReviewImages images={review.Images}/>}>
                <Card.Meta title={id===undefined?review.User.name.splice(0,2)+"***":id}
                           description={<ReviewContent reviewData={review} />}/>
            </Card>
            test
        </div>
    )
}
UserReviews.propTypes={
    review:PropTypes.shape({
        id:PropTypes.number,
        User:PropTypes.object,
        content:PropTypes.string,
        createdAt:PropTypes.object,
        Images:PropTypes.arrayOf(PropTypes.object)
    }).isRequired,
}

export default UserReviews;