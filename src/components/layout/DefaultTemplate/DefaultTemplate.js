import { Box, useMediaQuery, useTheme } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import GlobalNav from '../../pattern/GlobalNav';
import styles from './DefaultTemplate.styles';

const DefaultTemplate = ({ children, page, location }) => {
  const isMobile = useMediaQuery(useTheme().breakpoints.down('sm')),
    pageTitle = page && `${page} | `;

  return (
    <>
      <Helmet>
        <title>{`${pageTitle}swells23's Portfolio`}</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Helmet>
      {!isMobile && (
        <>
          <GlobalNav location={location} />
          {children}
        </>
      )}
      {isMobile && (
        <Box sx={styles.mobileWrapper}>
          {children}
          <GlobalNav location={location} />
        </Box>
      )}
    </>
  );
};

DefaultTemplate.defaultProps = {
  page: ''
};

DefaultTemplate.propTypes = {
  page: PropTypes.string
};

export default DefaultTemplate;
