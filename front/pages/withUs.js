import React, {useCallback, useEffect, useState} from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { Button, Form, Input } from 'antd';

import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';
import {useDispatch, useSelector} from "react-redux";
import {SIGNUP_STORE_REQUEST} from "../reducers/store";


const withUs = () => {
    const [storeName, onChangeStoreName] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [storeEmail,onChaneEmail]=useInput('');
    const [storeAddress,onChangeAddress]=useInput('');
    const [storePart,onChangePart]=useInput('');
    const {signupStoreLoading,signupStoreDone}=useSelector((state)=>state.store)
    const dispatch=useDispatch()
    const [passwordError, setPasswordError] = useState(false);
    const [passwordCheck, setPasswordCheck] = useState('');

    const onPasswordCheck=useCallback((e)=>{
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    },[password])

    useEffect(() => {
        if (signupStoreDone) {
            Router.replace('/');
        }
    }, [signupStoreDone]);

    const onSubmit = useCallback(() => {
        console.log({ storeName, password ,storeEmail, storeAddress,storePart});
        if (password !== passwordCheck) {
            alert('return password check')
            return;
        }
        let yesorno=confirm(`가게이름:${storeName}으로 신청하는게 맞으십니까?`)
        if(yesorno){
            return dispatch({
                type:SIGNUP_STORE_REQUEST,
                data:{
                    storeAddress,
                    storeName,
                    storePart,
                    storeEmail,
                    password
                }
            })
        }else{
            alert('취소하셨습니다. 이전으로 돌아갑니다.');
            return ;
        }
    },[storeEmail,storePart,storeName,storeAddress,password]);


    return (
        <>
            <Head>
                <title>입점하기</title>
            </Head>
            <AppLayout>
                <Form onFinish={onSubmit} style={{ padding: 10 }}>
                    <div>
                        <label htmlFor="user-name">가게 이름</label>
                        <br />
                        <Input name="user-name" value={storeName} required onChange={onChangeStoreName} />
                    </div>
                    <div>
                        <label htmlFor="storeEmail">가게 Email</label>
                        <br />
                        <Input name="storeEmail" type="email" value={storeEmail} required onChange={onChaneEmail} />
                    </div>
                    <div>
                        <label htmlFor="storeAddress">가게 주소</label>
                        <br />
                        <Input name="storeAddress" type="address" value={storeAddress} required onChange={onChangeAddress} />
                    </div>
                    <div>
                        <label htmlFor="password">비밀번호</label>
                        <br />
                        <Input name="password" type="password" value={password} required onChange={onChangePassword} />
                    </div>
                    <div>
                        <label htmlFor="passwordch">비밀번호 check</label>
                        <br />
                        <Input name="passwordch" type="password" value={passwordCheck} required onChange={onPasswordCheck} />
                    </div>
                    {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
                    <div>
                        <label htmlFor="storePart">분야</label>
                        <p>ex)병원 , 식당 , 영화관 , 사진관 , 뷰티 , 체험 , ... </p>
                        <Input name="storePart" value={storePart} required onChange={onChangePart} />
                    </div>
                    <div className="StorelastButton">
                        <Button type="primary" loading={signupStoreLoading} htmlType="submit" className="withJoin">입점하기</Button>
                    </div>
                </Form>
            </AppLayout>
        </>
    );
};

export default withUs;