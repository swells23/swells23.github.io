import { Button, Container, Grid, Paper, Typography } from '@material-ui/core';
import React from 'react';
import injectSheet from 'react-jss';
import styles from './ContactBand.styles';
import { MAIN_IMAGES } from '../../../../data/templateMeta';

const ContactBand = ({ classes }) => {
    const resumeLink = '../../../../data/resume';

    return (
        <Container component='section' className={classes.root}>
            <Typography variant='h3' component='h1' color='primary' gutterBottom>Get in touch</Typography>
            <Typography variant='h6' component='h2' color='primary' gutterBottom>This is how you can reach me.</Typography>
            <hr class={classes.contactRefWrapper} />
            <Grid className={classes.contactRefWrapper} container spacing={6}>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <Typography align='center'>
                            <Typography component='span' color='secondary'>Email: </Typography>
                            wells.sn2@gmail.com
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper className={classes.paper}>
                        <Typography align='center'>
                            <Typography component='span' color='secondary'>Phone: </Typography>
                            (919) 827-3421
                        </Typography>
                    </Paper>
                </Grid>
                <Grid className={classes.viewResumeWrapper} item xs={12}>
                    <Button
                        variant='contained'
                        color='secondary'
                        size='large'
                        href='../../../../data/resume.pdf'
                        target='_blank'>
                        Download Resume
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default injectSheet(styles)(ContactBand);