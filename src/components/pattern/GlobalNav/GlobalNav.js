import { AppBar, Tabs, Tab } from '@material-ui/core';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { PAGELIST } from '../../../../data/templateMeta';

const GlobalNav = ({ location }) => {
  const [value, setValue] = React.useState(location.pathname),
    handleChange = (evt, newValue) => {
      navigate(newValue);
      setValue(newValue);
    },
    getMenuItems = () => {
      return PAGELIST.map(page => {
        return (
          <Tab key={page.id} value={page.route} label={page.title} />
        )
      })
    };

  return (
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
