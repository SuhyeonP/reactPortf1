import React, {useCallback, useState} from 'react';
import AppLayout from '../components/AppLayout';
import Head from "next/head";
import ReviewZone from "../components/ReviewZone";
import StoreImage from "../components/StoreImage";

const store=()=>{


    //todo store reservation date library? and store like 강의 79강에 toggle있음
    return(
        <AppLayout>
            <Head>
                <title>store title</title>
            </Head>
            <div>
                <h2>StoreTitle</h2>
                <StoreImage/>
            </div>
            <div>
                <ReviewZone/>
            </div>
        </AppLayout>
    )

}

export default store;