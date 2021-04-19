import Head from 'next/head'; // get rid of this
import React from 'react';
import { GlobalNav } from '../';

const DefaultTemplate = (props) => {
  const { children, headTitle, location } = props;

  return (
    <>
      <Head>
        <title>{`${headTitle} | swells23's Portfolio`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <GlobalNav location={location} />
        {children}
      </div>
    </>
  );
};

export default DefaultTemplate;
