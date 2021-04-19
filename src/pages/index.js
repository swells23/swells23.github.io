import React from 'react';
import { DefaultTemplate } from '../components/common';

function Homepage(props) {
    const { location } = props;

    return (
        <DefaultTemplate headTitle='Home' location={location} />
    )
}

export default Homepage;