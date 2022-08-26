import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Link,
  Tab,
  Tabs,
  Toolbar,
  useMediaQuery,
  useTheme
} from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { PAGELIST } from '../../../data/templateMeta';
import styles from './GlobalNav.styles';

const GlobalNav = ({ location }) => {
  const [value, setValue] = React.useState(location.pathname),
    isMobile = useMediaQuery(useTheme().breakpoints.down('sm')),
    handleChange = (evt, newValue) => {
      navigate(newValue);
      setValue(newValue);
    },
    getMenuItems = () => {
      const Component = isMobile ? BottomNavigationAction : Tab;

      return PAGELIST.map(page => {
        return <Component key={page.id} aria-label={page.id} value={page.route} label={page.title} />
      })
    };

  return isMobile ?
    (
      <BottomNavigation
        component='nav'
        aria-label='navigation'
        value={value}
        onChange={handleChange}
        showLabels
      >
        {getMenuItems()}
      </BottomNavigation>
    )
    : (
      <AppBar position='sticky'>
        <Toolbar sx={styles.toolbar}>
          <Tabs
            component='nav'
            aria-label='navigation'
            value={value}
            onChange={handleChange}
            textColor='inherit'
            indicatorColor='secondary'
            sx={styles.tabs}
          >
            {getMenuItems()}
          </Tabs>
          <Link
            href='https://github.com/swells23/swells23.github.io'
            color='secondary'
            underline='hover'
            target='_blank'>
            View Repository
              <OpenInNewIcon sx={styles.repoLink} />
          </Link>
        </Toolbar>
      </AppBar>
    );
};

GlobalNav.defaultProps = {
  location: {
    pathname: ''
  }
};

GlobalNav.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string
  })
};

export default GlobalNav;
