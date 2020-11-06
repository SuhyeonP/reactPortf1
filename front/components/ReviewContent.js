import React from 'react';
const ReviewContent=({reviewData})=>{
    return(
        <div>
            {reviewData.content}
            {reviewData.createdAt}
        </div>
    )
}
export default ReviewContent