import React, {useState, useMemo, useCallback} from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Col, Input, Menu, Row } from 'antd';

import LoginForm from './LoginForm';
import UserProfile from './UserProfile';


const AppLayout = ({ children }) => {
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    const onChangeWord=useCallback(()=>{
        let insideWord=document.getElementById('menutem').innerText;
        if(insideWord==='Mini Game'){
            document.getElementById('menutem').innerText='PortFolio';
        }else{
            document.getElementById('menutem').innerText='Mini Game';
        }
    },[])
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home"><Link href="/"><a>Main</a></Link></Menu.Item>
                <Menu.Item key="profile"><Link href="/profile"><a>Profile</a></Link></Menu.Item>
                <Menu.Item key="store"><Link href="/store"><a>Store</a></Link></Menu.Item>
                <Menu.Item key="withUs"><Link href="/withUs"><a>With Us</a></Link></Menu.Item>
                <Menu.Item key="minigame" onMouseEnter={onChangeWord}><Link href="/minigame"><a id="menutem">Mini Game</a></Link></Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={18}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    {isLoggedIn
                        ? <UserProfile setIsLoggedIn={setIsLoggedIn}/>
                        : <LoginForm setIsLoggedIn={setIsLoggedIn}/>}
                </Col>
            </Row>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default AppLayout;