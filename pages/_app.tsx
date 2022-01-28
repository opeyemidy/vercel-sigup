import '../assets/css/styles.css';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Footer from '../components/Footer';
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="wrapper">
        <Component {...pageProps} />
      </div>
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
