import React from 'react';
import { DefaultTemplate } from '../components/common';

function Contact(props) {
    const { location } = props;

    return (
        <DefaultTemplate headTitle='Contact' location={location} />
    )
}

export default Contact;