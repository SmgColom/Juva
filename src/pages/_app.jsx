import '../styles/scss/main.scss';
import Layout from '../components/layout/Layout.jsx';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}