import { Header } from '@/components';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <div className="mx-auto p-4 max-w-full sm:px-6 sm:py-4 sm:max-w-180 md:px-8 md:py-4 md:max-w-240 lg:max-w-248">
        <Component {...pageProps} />
      </div>
    </>
  );
}
