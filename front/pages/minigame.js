import React, {useState} from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import {Button, Col, Input, Menu, Row} from 'antd';
import Link from 'next/link'
import SkillCard from '../components/SkillCard'
import PropTypes from 'prop-types'


const MiniGame = () => {
    return(
        <AppLayout>
            <Head>
                <title>MiniGame</title>
            </Head>
            <h1 className="main-title">This is my portfolio </h1>
            <section className="gameSection">
                <div className="gical">
                    <Link href="http://ahah12k.cafe24.com/ptp2/"target="_blank" rel="noreferrer noopener">
                        <a><h2 className="gameTitle">Find your Breath(Origin) (Only mobile)</h2></a>
                    </Link>
                    <div className="explainPort">
                        <h3>▼Changes to React▼</h3>
                    </div>
                    <Link href="/lol"><a>Change to React Breath</a></Link>
                </div>
                <div className="lol">
                    <Link href="http://ahah12k.cafe24.com/ptp1/" target="_blank" rel="noreferrer noopener">
                        <a><h2 className="gameTitle">Find your LOL character</h2></a>
                    </Link>
                    <div className="explainPort">
                    </div>
                    <h2>it will be update to React or React+Typescript</h2>
                </div>
            </section>
        </AppLayout>
        )
};


export default MiniGame;