import Contact from '../components/Contact/Contact';
import Head from 'next/head';
import withTransition from '../components/HOC/withTransition';

const contact = () => {
  return (
    <>
      <Head>
        <title>Smithsworkltd - Contact</title>
      </Head>
      <Contact />
    </>
  );
};

export default withTransition(contact);
