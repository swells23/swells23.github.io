import React from 'react';
import { DefaultTemplate } from '../components/common';

function Projects(props) {
    const { location } = props;

    return (
        <DefaultTemplate headTitle='Projects' location={location} />
    )
}

export default Projects;