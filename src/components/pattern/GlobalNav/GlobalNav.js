import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tab,
  Tabs,
  Toolbar
} from '@mui/material';
import HubIcon from '@mui/icons-material/Hub';
import MenuIcon from '@mui/icons-material/Menu';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { navigate } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { PAGELIST } from '../../../data/templateMeta';
import styles from './GlobalNav.styles';

const GlobalNav = ({ location }) => {
  const pathname = location.pathname.match(/^\/\w*/)?.[0], // Ensures no trailing special characters
    [value, setValue] = React.useState(pathname),
    [mobileOpen, setMobileOpen] = React.useState(false),
    handleChange = (evt, newValue) => {
      navigate(newValue);
      setValue(newValue);
    },
    handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    },
    getMenuItems = () => {
      const desktopComponents = [],
        mobileComponents = [];

      PAGELIST.forEach(page => {
        desktopComponents.push(
          <Tab key={page.id} aria-label={page.id} value={page.route} label={page.title} />
        );
        mobileComponents.push(
          <ListItem key={page.id}>
            <ListItemButton sx={styles.mobileListItemButton} href={page.route}>
              <ListItemText primary={page.title} primaryTypographyProps={{ color: 'secondary' }} />
            </ListItemButton>
          </ListItem>
        );
      })

      return { desktop: desktopComponents, mobile: mobileComponents }
    },
    menuItems = getMenuItems();

  return (
    <>
      <AppBar position='static'>
        <Toolbar sx={styles.toolbar}>
          <Box sx={styles.mobileNavToggleIcon}>
            <IconButton
              aria-label='toggle mobile navigation'
              color='secondary'
              onClick={handleDrawerToggle}
            >
              <MenuIcon fontSize='large' />
            </IconButton>
          </Box>
          {console.log(value)}
          <Tabs
            sx={styles.tabs}
            component='nav'
            aria-label='navigation'
            value={value}
            onChange={handleChange}
            textColor='inherit'
            indicatorColor='secondary'
          >
            {menuItems.desktop}
          </Tabs>
          <Link
            aria-label='open repository'
            href='https://github.com/swells23/swells23.github.io'
            color='secondary'
            underline='hover'
            target='_blank'>
            View Repository
            <OpenInNewIcon sx={styles.repoLinkIcon} />
          </Link>
        </Toolbar>
      </AppBar>
      <Box component='nav' aria-label='mobile navigation'>
        <Drawer
          sx={styles.drawer}
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true
          }}
        >
          <Box onClick={handleDrawerToggle} sx={styles.drawerBox}>
            <HubIcon sx={styles.drawerIcon} color='secondary' fontSize='large' />
            <Divider />
            <List>
              {menuItems.mobile}
            </List>
          </Box>
        </Drawer>
      </Box></>
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
