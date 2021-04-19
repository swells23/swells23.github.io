import { Box, Grid, Typography } from '@material-ui/core';
import { Link } from 'gatsby';
import React from 'react';
import { createUseStyles } from 'react-jss';
import { PAGELIST } from '../../../../data/templateMeta';

const GlobalNav = props => {
  const classes = styles(),
    { location } = props,
    homepageRef = PAGELIST.find(page => page.id === 'homepage').route,
    getMenuItems = () => {
      return PAGELIST.map(page => {
        return (
          <li key={page.id} className={location.pathname === page.route ? classes.active : undefined}>
            <Link to={page.route}>
              <Typography variant='h6' component='p' className={classes.tempTypographyMain}>{page.title}</Typography>
            </Link>
          </li>
        )
      });
    }

  return (
    <Box component='header' className={classes.root}>
      <Grid container alignItems='center'>
        <Link href={homepageRef}>
          <Typography variant='h5' component='p' className={classes.tempTypographyLogo}>swells23</Typography>
        </Link>
        <nav className={classes.navMenu}>
          <ul>
            {getMenuItems()}
          </ul>
        </nav>
      </Grid>
    </Box>
  );
};

const styles = createUseStyles({
  root: {
    backgroundColor: '#343a40',
    height: '4rem',
    padding: '0 2rem',
    '& > div': {
      height: 'inherit'
    }
  },
  navMenu: {
    height: 'inherit',
    '& ul': {
      height: 'inherit',
      margin: 0
    },
    '& ul > li': {
      alignItems: 'center',
      cursor: 'pointer',
      display: 'inline-flex',
      height: 'inherit',
      justifyContent: 'center',
      padding: '0 1rem',
      '&:hover': {
        borderBottom: '2px solid #e1e1e1',
        '& $tempTypographyMain': {
          color: '#e1e1e1'
        }
      }
    }
  },
  active: {
    borderBottom: '2px solid #c7c7f7 !important',
    '& > p': {
      color: '#c7c7f7 !important'
    }
  },
  tempTypographyMain: {
    color: '#ffffff80'
  },
  tempTypographyLogo: {
    color: '#fff'
  }
});

export default GlobalNav;
