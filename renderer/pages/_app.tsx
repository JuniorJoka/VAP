// eslint-disable-next-line import/no-extraneous-dependencies
import { NextPage } from 'next';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AppProps } from 'next/app';
import React, { ReactElement, ReactNode } from 'react';
import '../styles/globals.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}

export default App;
