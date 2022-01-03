import App from 'next/app';
import React from 'react';
import '../styles/globals.css';
import AppProvider from '../state/context';

export class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    );
  }
}

export default MyApp;
