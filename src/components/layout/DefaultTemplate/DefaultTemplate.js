import { makeStyles, ThemeProvider, useMediaQuery, useTheme } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { GlobalNav } from '../../pattern';
import { theme } from '../../../styles/theme';
import styles from './DefaultTemplate.styles';

const DefaultTemplate = ({ children, headTitle, location }) => {
  const isMobile = useMediaQuery(useTheme().breakpoints.down('xs')),
    classes = makeStyles(styles)();

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

export default DefaultTemplate;
