import React, {useEffect} from 'react';
import Head from 'next/head';
import Router from 'next/router';
import AppLayout from '../components/AppLayout';
import {useSelector} from "react-redux";
import FollowList from "../components/FollowList";

const Profile = () => {
    const { me } = useSelector((state) => state.user);
    useEffect(() => {
        if (!(me && me.id)) {
            Router.push('/');
        }
    }, [me && me.id]);
    if (!me) {
        return null;
    }

    return(
        <AppLayout>
            <Head>
                <title>NodeBird</title>
            </Head>
            <div>내 프로필</div>
            <div>review write</div>
            <h2> 아직 미완성입니다. 개발중입니다.</h2>
            <FollowList header="팔로잉 목록" data={me.FollowingStore} />
        </AppLayout>
    )

}

export default Profile;