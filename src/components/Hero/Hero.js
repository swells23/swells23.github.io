/** @jsx jsx */
import { jsx } from '@emotion/react';
import { Box, Grid, Typography, useTheme } from '@mui/material';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { MAIN_IMAGES } from '../../data/templateMeta';
import getStyles from './Hero.styles.js';

const Hero = ({ classes, data, ...props }) => {
    const styles = getStyles({ theme: useTheme(), props }),
        heroImg = getImage(data.file);

    return (
        <Box sx={styles.root}>
            <GatsbyImage css={styles.heroImg} image={heroImg} alt={MAIN_IMAGES.hero.alt} objectFit='fill' />
            <Grid sx={styles.heroTextWrapper} container>
                <Grid item xs={12} sm={6} md={4}>
                    <Typography variant='h4' component='p' color='secondary'>Stephen Wells</Typography>
                    <hr className={styles.heroTextDivider} />
                    <Typography variant='h6' component='p' color='secondary'>Front End Web Development<br />Raleigh, NC</Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

Hero.defaultProps = {
    navDiff: '3rem',
    mobileNavDiff: '3.5rem'
};

export default Hero;
