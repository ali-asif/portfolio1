import '@/styles/globals.css'
import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider, chakra } from '@chakra-ui/react';


export default function App({ Component, pageProps }: AppProps) {
  
    useEffect(() => {
      // @ts-ignore
      import('preline');
    }, []);
    return(
    <ChakraProvider>  
    <Component {...pageProps} />
    </ChakraProvider>
    )
}
