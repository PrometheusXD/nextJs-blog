import { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/global-styles';
import { BlogThemeProvider } from '../contexts/BlogThemeContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <BlogThemeProvider>
      <GlobalStyles />
      <Component {...pageProps} />
    </BlogThemeProvider>
  );
}

export default MyApp;
