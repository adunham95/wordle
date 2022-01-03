import App from 'next/app';
import React from 'react';
import { LetterProvider } from '../components/letterProvider/letterProvider';

export class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <LetterProvider>
        <Component {...pageProps} />
      </LetterProvider>
    );
  }
}

export default MyApp;
