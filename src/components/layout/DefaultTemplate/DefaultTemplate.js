import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { GlobalNav } from '../../pattern';
import { ThemeProvider } from '@material-ui/core/styles';
import { theme } from '../../../styles/theme';

const DefaultTemplate = ({ children, headTitle, location }) => {
  return (
    <>
      <Helmet>
        <title>{`${headTitle} | swells23's Portfolio`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Helmet>
      <ThemeProvider theme={theme}>
        <GlobalNav location={location} />
        {children}
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
