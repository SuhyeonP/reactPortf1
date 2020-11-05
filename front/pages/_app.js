import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import './_app.css'
const Base = ({ Component }) => {
    return (
        <>
            <Head>
                <title>title</title>
            </Head>
            <Component />
        </>
    );
};

Base.propTypes = {
    Component: PropTypes.elementType.isRequired,
};

export default Base;