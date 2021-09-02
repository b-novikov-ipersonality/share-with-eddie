import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import Header from '@modules/header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
