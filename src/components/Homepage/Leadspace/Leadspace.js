import { Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import clsx from 'clsx';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import injectSheet from 'react-jss';
import styles from './Leadspace.styles';
import { MAIN_IMAGES } from '../../../../data/templateMeta';

const Leadspace = ({ data, classes }) => {
    const heroImg = getImage(data.file),
        isMobile = useMediaQuery(useTheme().breakpoints.down('xs'));

        console.log("DATA: ", data)
    return (
        <div className={clsx(classes.root, { [classes.mobileRoot]: isMobile })}>
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

Leadspace.defaultProps = {
    navDiff: '3rem',
    mobileNavDiff: '3.5rem'
};

export default injectSheet(styles)(Leadspace);
