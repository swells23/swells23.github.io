import React from 'react';
import { createUseStyles } from 'react-jss';
import styles from './Leadspace.styles';

const Leadspace = () => {
    const classes = createUseStyles(styles)();

    return (
        <div className={classes.root} />
    );
};

export default Leadspace;
