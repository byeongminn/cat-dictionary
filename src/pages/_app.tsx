import { Header } from '@/components';
import '@/styles/globals.css';
import media from '@/styles/media';
import type { AppProps } from 'next/app';
import styled, { ThemeProvider } from 'styled-components';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={media}>
      <Header />
      <ComponentWrapper>
        <Component {...pageProps} />
      </ComponentWrapper>
    </ThemeProvider>
  );
}

const ComponentWrapper = styled.div`
  margin: 0 auto;
  padding: 1rem;
  max-width: 62rem;

  @media ${({ theme }) => theme.laptop} {
    padding: 1rem 2rem;
    max-width: 60rem;
  }

  @media ${({ theme }) => theme.tablet} {
    padding: 1rem 1.5rem;
    max-width: 45rem;
  }

  @media ${({ theme }) => theme.mobile} {
    padding: 1rem;
    max-width: 100%;
  }
`;
