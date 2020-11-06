import React,{useMemo} from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import StoreCard from '../components/StoreCard';


const Home = () => {
//todo click event adv img link
    return(
        <AppLayout>
            <Head>
                <title>TitleSection</title>
            </Head>
            <div>mainSection</div>
            <section>
                <div className="store-part-main">
                    <StoreCard/>
                    <StoreCard/>
                    <StoreCard/>
                </div>
                <div className="main-adv">
                    <img src="http://ahah12k.cafe24.com/jin/resources/img/cafea.jpg"/>
                </div>
                <div className="store-part-main">
                    <StoreCard/>
                    <StoreCard/>
                    <StoreCard/>
                </div>
            </section>
        </AppLayout>
    )
}


export default Home;