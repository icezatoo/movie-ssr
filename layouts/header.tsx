import React from 'react';
import Head from 'next/head';

const Header = () => (
  <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>Movie DB</title>
    </Head>
    <style jsx global>
      {`
        html,
        body {
          font-family: 'Open Sans', 'Roboto Regular', sans-serif;
          padding: 0;
          margin: 0;
          width: 100%;
          height: 100%;
          min-height: 100vh;
          font-weight: 400;
          font-size: 14px;
          font-style: normal;
          line-height: 19px;
        }
      `}
    </style>
  </>
);

export default Header;
