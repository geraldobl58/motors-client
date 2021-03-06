import { AppProps } from 'next/app'

import Head from 'next/head'

import NextNprogress from 'nextjs-progressbar'

import { ApolloProvider } from '@apollo/client'

import { useApollo } from 'utils/apollo'

import { ThemeProvider } from 'styled-components'

import GlobalStyles from 'styles/global'

import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  const client = useApollo(pageProps.initialApolloState)

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Motors</title>
          <link rel="shortcut icon" href="/img/icon-192.png" />
          <link rel="apple-touch-icon" href="/img/icon-192.png" />
          <link rel="manifest" href="/manifest.json" />
          <meta name="description" content="" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <GlobalStyles />
        <NextNprogress
          color="#34ABD0"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}
        />
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default App
