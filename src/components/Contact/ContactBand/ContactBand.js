import { Button, Container, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import styles from './ContactBand.styles';

const ContactBand = ({ data }) => {
    const classes = makeStyles(styles)(),
        resumeRef = data.allFile.edges[0].node.publicURL;

    return (
        <Container component='section' className={classes.root}>
            <Typography variant='h3' component='h1' color='primary' gutterBottom>Get in touch</Typography>
            <Typography variant='h6' component='h2' color='primary' gutterBottom>This is how you can reach me.</Typography>
            <hr className={classes.contactRefWrapper} />
            <Grid className={classes.contactRefWrapper} container spacing={4}>
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
                        href={resumeRef}
                        target='_blank'>
                        Download Resume
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
};

export default ContactBand;