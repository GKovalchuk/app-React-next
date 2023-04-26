import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import ym from 'react-yandex-metrika';
import { YMInitializer } from 'react-yandex-metrika';

export default function App({ Component, pageProps, router }: AppProps): JSX.Element {
	router.events.on('routeChangeComplete', (url: string) => {
		if (typeof window !== 'undefined') ym('hit', url);
	});

	return <>
		<Head>
			<title>Next-app</title>
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link rel="preconnect" href="https://mc.yandex.ru" />
			<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
			<link rel="icon" href="/favicon.ico" />
			<meta property='og:url' content={process.env.NEXT_PUBLIC_DOMAIN + router.asPath} />
			<meta property='og:local' content='ru_RU' />
		</Head>
		<YMInitializer
			accounts={[]}
			options={{ webvisor: true, defer: true }}
			version='2'
		/>
		<Component {...pageProps} />
	</>;
}
