import { Box, Grid } from '@material-ui/core';
import Link from 'next/link'
import React from 'react';
import { createUseStyles } from 'react-jss';

const GlobalNav = () => {
  const classes = styles();

  return (
    <Box component='header' className={classes.root}>
      <Grid container alignItems='center'>
        <Link href='/newPages/homepage'>
          swells23
        </Link>
        <nav className={classes.navMenu}>
          <ul>
            <li><Link href='/newPages/homepage'>Home</Link></li>
            <li><Link href='/newPages/projects'>Projects</Link></li>
            <li><Link href='/newPages/contact'>Contact</Link></li>
          </ul>
        </nav>
      </Grid>
    </Box>
  );
};

const styles = createUseStyles({
  root: {
    backgroundColor: '#5c5c5c'
  },
  navMenu: {
    'li': {
      
    }
  }
});

export default GlobalNav;
