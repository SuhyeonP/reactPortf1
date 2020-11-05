import React, { useState, useCallback } from 'react';
import { Card, Button, Avatar, List, Comment, Popover } from 'antd';
import PropTypes from 'prop-types';
import Link from 'next/link';
const dummyStore={
    imgSrc:null,
    storeTitle:'사진없는경우',
    storeAddress:'경기도 성남시 분당구 불정로 6 (우)13561',
    storeNumber:'1588-3830'
}
const dummyStore2={
    imgSrc:'https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxNzA5MjVfNTgg%2FMDAxNTA2MzA1NzA1MDMz.lNQq72qCkowtQwb4PSYMoZBu2z7tXmDhRBfU9naJFlEg.6OrtZfyM80Mxoa_qK7qVOJWdiI3PKs9kApiWSvDKI40g.JPEG.lccthebox%2F%25C7%25CF%25C7%25CF.JPG&type=sc960_832',
    storeTitle:'사진잇는경우',
    storeAddress:'경기도 성남시2 분당구 불정로 6 (우)13561',
    storeNumber:'1588-3830'
}

const StoreCard=()=>{
    const [storeImg]=useState(dummyStore2.imgSrc);
    return(
        <Card  className="storeCard" cover={
            storeImg==null?<img className="mainCardImgage" alt="example" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMDA1MjVfMjc3%2FMDAxNTkwMzQxMTc0NDEz.gmkMJ4RYGYyXpEbVn90GPeA4Lz_6cmUL2_ysgrwXqMAg.4VTdLCmMAlFkbH7yF6fXnC61_AtnL2ZZ_GHp-e_kd3Mg.JPEG.taughtl7%2F1590341173518.jpg&type=sc960_832" />
                :<img className="mainCardImgage" src={storeImg}/>}>
            <Card.Meta className="store-title" title={dummyStore2.storeTitle}
                       description={dummyStore2.storeAddress}>
            </Card.Meta>
        </Card>
    )
}
export default StoreCard;