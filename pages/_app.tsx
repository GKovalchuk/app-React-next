import '../styles/globals.css';
import type { AppProps } from 'next/app';
import React from 'react';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps): JSX.Element {
	return <>
		<Head>
			<title>Next-app</title>
			<link rel="icon" href="/favicon.ico" />
		</Head>
		<Component {...pageProps} />
	</>;
}
