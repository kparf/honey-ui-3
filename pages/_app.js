import React from 'react';
import App from 'next/app';
import StoreContext from 'storeon/react/context';
import { initStore } from '../store';

class MyApp extends App {

  static async getInitialProps(appContext) {
    const isServer = typeof window === 'undefined';

    let store;

    store = initStore();


    appContext.ctx.store = store;
    const appProps = await App.getInitialProps(appContext);

    return { ...appProps, isServer }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <StoreContext.Provider value={initStore(pageProps.initData)}>
        <Component {...pageProps} />
      </StoreContext.Provider>
    )
  }
}

export default MyApp;