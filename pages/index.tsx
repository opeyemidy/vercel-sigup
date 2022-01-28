import React, { CSSProperties } from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import ContentLeft from '../components/ContentLeft';
import ContentRight from '../components/ContentRight';

export interface MyCustomCSS extends CSSProperties {
  '--justify-content'?: string;
  '--flex'?: string;
  '--button-custom-border'?: string;
  '--content-length'?: string;
  'align-items'?: string;
}
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sign Up – Vercel</title>
        <meta
          name="description"
          content="Vercel is the easiest way to deploy websites. Host your web projects for free with zero configuration, automatic SSL, and global CDN."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="backdrop"></div>
      <div className="inner-wrapper">
        <div className="container">
          <div className="content">
            <div>
              <ContentLeft />
            </div>
          </div>
          <div className="content">
            <div>
              <ContentRight />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
