import { ThemeProvider, useMediaQuery, useTheme } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import injectSheet from 'react-jss';
import { Helmet } from 'react-helmet';
import { GlobalNav } from '../../pattern';
import { theme } from '../../../styles/theme';
import styles from './DefaultTemplate.styles';

const DefaultTemplate = ({ children, classes, headTitle, location }) => {
  const isMobile = useMediaQuery(useTheme().breakpoints.down('xs'));

  return (
    <>
      <Helmet>
        <title>{`${headTitle} | swells23's Portfolio`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Helmet>
      <ThemeProvider theme={theme}>
        {!isMobile && (
          <>
            <GlobalNav location={location} />
            {children}
          </>
        )}

        {isMobile && (
          <div className={classes.mobileWrapper}>
            {children}
            <GlobalNav location={location} />
          </div>
        )}

      </ThemeProvider>
    </>
  );
};

DefaultTemplate.defaultProps = {
  headTitle: ''
};

DefaultTemplate.propTypes = {
  headTitle: PropTypes.string
};

export default injectSheet(styles)(DefaultTemplate);
