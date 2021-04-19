import React from 'react';
import { Helmet } from "react-helmet"
import { GlobalNav } from '../';

const DefaultTemplate = (props) => {
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

export default DefaultTemplate;
