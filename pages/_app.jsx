import Layout from '../components/Layout/Layout';
import { AnimatePresence, motion } from 'framer-motion';
import '../styles/globals.scss';
import Overlay from '../components/Overlay/Overlay';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

function MyApp({ Component, pageProps, router }) {
  return (
    <Layout>
      <AnimatePresence initial={false} exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </Layout>
  );
}

export default MyApp;
