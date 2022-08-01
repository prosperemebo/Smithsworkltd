import Head from 'next/head';
import About from '../components/About/About';
import withTransition from '../components/HOC/withTransition';

const about = () => {
  return (
    <>
      <Head>
        <title>Smithsworkltd - About</title>
      </Head>
      <About />
    </>
  );
};

export default withTransition(about);
