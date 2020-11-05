import React, { useState } from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { Button, Form, Input } from 'antd';

import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';

const withUs = () => {
    const [storeName, onChangeStoreName] = useInput('');
    const [password, onChangePassword] = useInput('');
    const [storeEmail,onChaneEmail]=useInput('');
    const [storeAddress,onChangeAddress]=useInput('');
    const [storePart,onChangePart]=useInput('');

    const onSubmit = () => {
        console.log({ storeName, password ,storeEmail, storeAddress,storePart});
        let yesorno=confirm(`가게이름:${storeName}으로 신청하는게 맞으십니까?`)
        if(yesorno){
            alert('신청이 완료되었습니다. 이메일로 알려드리겠습니다.')
            return  Router.push('/');
        }else{
            alert('취소하셨습니다. 이전으로 돌아갑니다.');
            return ;
        }
    };


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
                        <label htmlFor="user-password">비밀번호</label>
                        <br />
                        <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
                    </div>
                    <div>
                        <label htmlFor="storePart">분야</label>
                        <p>ex)병원 , 식당 , 영화관 , 사진관 , 뷰티 , 체험 , ... </p>
                        <Input name="storePart" value={storePart} required onChange={onChangePart} />
                    </div>
                    <div className="StorelastButton">
                        <Button type="primary" htmlType="submit" className="withJoin">입점하기</Button>
                    </div>
                </Form>
            </AppLayout>
        </>
    );
};

export default withUs;