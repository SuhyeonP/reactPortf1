import React, {useCallback, useEffect, useState} from 'react';
import Head from 'next/head';
import { Button, Form, Input } from 'antd';
import Router from 'next/router';
import AppLayout from '../components/AppLayout';
import useInput from '../hooks/useInput';
import {useDispatch, useSelector} from "react-redux";
import {SIGN_UP_REQUEST} from "../reducers/user";

const Signup = () => {
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const [id, onChangeId] = useInput('');
    const [name, onChangeName] = useInput('');
    const [password, onChangePassword] = useInput('');
    const { signUpLoading, me ,signUpDone,signUpError} = useSelector((state) => state.user);
    const dispatch=useDispatch()

    useEffect(() => {
        if (me) {
            alert('로그인했으니 메인페이지로 이동합니다.');
            Router.push('/');
        }
    }, [me && me.id]);

    useEffect(() => {
        if (signUpDone) {
            Router.replace('/');
        }
    }, [signUpDone]);

    useEffect(() => {
        if (signUpError) {
            alert(signUpError);
        }
    }, [signUpError]);

    const onSubmit = useCallback(() => {
        if (password !== passwordCheck) {
            setPasswordError(true);
            alert('비밀번호 체크가 옳바르지 않습니다.')
            return;
        }
        console.log({
            id,
            name,
            password,
            passwordCheck,
        });
        return dispatch({
            type: SIGN_UP_REQUEST,
            data: { name, password, id, },
        });
    },[name,id,password,passwordCheck]);

    const onChangePasswordCheck = (e) => {
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    };

    return (
        <>
            <Head>
                <title>Signup</title>
            </Head>
            <AppLayout>
                <Form onFinish={onSubmit} style={{ padding: 10 }}>
                    <div>
                        <label htmlFor="user-id">아이디</label>
                        <br />
                        <Input name="user-id" value={id} required onChange={onChangeId} />
                    </div>
                    <div>
                        <label htmlFor="user-name">이름</label>
                        <br />
                        <Input name="user-name" value={name} required onChange={onChangeName} />
                    </div>
                    <div>
                        <label htmlFor="user-password">비밀번호</label>
                        <br />
                        <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
                    </div>
                    <div>
                        <label htmlFor="user-password-check">비밀번호체크</label>
                        <br />
                        <Input
                            name="user-password-check"
                            type="password"
                            value={passwordCheck}
                            required
                            onChange={onChangePasswordCheck}
                        />
                        {passwordError && <div style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</div>}
                    </div>
                    <div style={{ marginTop: 10 }}>
                        <Button type="primary" loading={signUpLoading} htmlType="submit">가입하기</Button>
                    </div>
                </Form>
            </AppLayout>
        </>
    );
};

export default Signup;