import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import GlobalNav from '../../pattern/GlobalNav';

const DefaultTemplate = ({ children, page, location }) => {
  const pageTitle = page && `${page} | `;

  return (
    <>
      <Helmet>
        <title>{`${pageTitle}swells23's Portfolio`}</title>
        <meta name='viewport' content='initial-scale=1, width=device-width' />
      </Helmet>
      <GlobalNav location={location} />
      {children}
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
