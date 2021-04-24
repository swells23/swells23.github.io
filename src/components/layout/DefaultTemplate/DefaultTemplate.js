import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';
import { GlobalNav } from '../../pattern';

const DefaultTemplate = props => {
  const { children, headTitle, location } = props;

  return (
    <>
      <Helmet>
        <title>{`${headTitle} | swells23's Portfolio`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Helmet>
      <div>
        <GlobalNav location={location} />
        {children}
      </div>
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
