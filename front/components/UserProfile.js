import { Avatar, Card, Button } from 'antd';
import React from 'react';
import {useDispatch} from "react-redux";
import {logoutRequestAction} from "../reducers/user";

const dummy = {
    nickname: 'testdd',
    Posts: [],
    Followings: [],
    Followers: [],
    isLoggedIn: false,
};

const UserProfile = () => {
    const dispatch=useDispatch();
    const onLogout=(()=>{
        console.log('logout')
        dispatch(logoutRequestAction())
    })

    return (
        <Card
            actions={[
                <div key="twit">리뷰<br/>{dummy.Posts.length}</div>,
                <div key="following">팔로잉<br/>{dummy.Followings.length}</div>,
                <div key="follower">팔로워<br/>{dummy.Followers.length}</div>,
            ]}>
            <Card.Meta
                avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
                title={dummy.nickname}/>
            <Button onClick={onLogout}>로그아웃</Button>
        </Card>
    );
};

export default UserProfile;