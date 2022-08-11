import {
  AppBar,
  BottomNavigation,
  BottomNavigationAction,
  Tab,
  Tabs,
  useMediaQuery,
  useTheme
} from '@material-ui/core';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { PAGELIST } from '../../../../data/templateMeta';

const GlobalNav = ({ location }) => {
  const [value, setValue] = React.useState(location.pathname),
    isMobile = useMediaQuery(useTheme().breakpoints.down('xs')),
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
        <Tabs component='nav' aria-label='navigation' value={value} onChange={handleChange} >
          {getMenuItems()}
        </Tabs>
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
