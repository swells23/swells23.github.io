import Head from 'next/head';
import React from 'react';
import { GlobalNav } from '../';

const DefaultTemplate = (props) => {
  const { children, headTitle } = props;

  return (
    <>
      <Head>
        <title>{`${headTitle} | swells23's Portfolio`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <GlobalNav />
        {children}
      </div>
    </>
  );
};

export default DefaultTemplate;
