import { Avatar, Card, Button } from 'antd';
import React from 'react';
import {useDispatch} from "react-redux";
import {logoutRequestAction} from "../reducers/user";

const dummy = {
    isLoggedIn:false,
    name:'test',
    id:1,
    Reviews:[{id:1}],
    FollowingStore:[{name:'macdonald'},{name:'hansin'},{name:'dentist'}],
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
                <div key="review">리뷰<br/>{dummy.Reviews.length}</div>,
                <div key="following">팔로잉<br/>{dummy.FollowingStore.length}</div>
            ]}>
            <Card.Meta
                avatar={<Avatar>{dummy.name[0]}</Avatar>}
                title={dummy.name}/>
            <Button onClick={onLogout}>로그아웃</Button>
        </Card>
    );
};

export default UserProfile;