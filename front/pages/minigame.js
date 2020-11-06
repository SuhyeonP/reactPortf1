import React, {useState} from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import Link from 'next/link'
import SkillCard from '../components/SkillCard'
import PropTypes from 'prop-types'

const MiniGame = () => {
    return(
        <AppLayout>
            <Head>
                <title>MiniGame|PortFolio</title>
            </Head>
            <h1 className="main-title">This is my portfolio </h1>
            <section className="gameSection">
                <div className="gical">
                    <Link href="http://ahah12k.cafe24.com/ptp2/"target="_blank" rel="noreferrer noopener">
                        <a><h2 className="gameTitle">Find your Breath(Origin) (Only mobile)</h2></a>
                    </Link>
                </div>
                <div className="lol">
                    <Link href="http://ahah12k.cafe24.com/ptp1/" target="_blank" rel="noreferrer noopener">
                        <a><h2 className="gameTitle">Find your LOL character</h2></a>
                    </Link>
                    <div className="explainPort">
                    </div>
                </div>
            </section>
        </AppLayout>
        )
};


export default MiniGame;