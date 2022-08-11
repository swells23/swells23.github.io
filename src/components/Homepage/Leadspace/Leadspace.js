import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import { createUseStyles } from 'react-jss';
import styles from './Leadspace.styles';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MAIN_IMAGES } from '../../../../data/templateMeta';

const Leadspace = ({ data }) => {
    const classes = createUseStyles(styles)(),
        heroImg = getImage(data.file);

    return (
        <div className={classes.root}>
            <GatsbyImage className={classes.heroImg} image={heroImg} alt={MAIN_IMAGES.hero.alt} objectFit='fill' />
            <Grid className={classes.heroTextWrapper} container>
                <Grid item xs={12} sm={6} md={4}>
                    <Typography variant='h4' component='p' color='secondary'>Stephen Wells</Typography>
                    <hr className={classes.heroTextDivider} />
                    <Typography variant='h6' component='p' color='secondary'>Front End Web Development Raleigh, NC</Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default Leadspace;
