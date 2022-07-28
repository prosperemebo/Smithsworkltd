import Head from 'next/head';
import Contact from '../components/Contact/Contact';
import Feature from '../components/Feature/Feature';
import Header from '../components/Header/Header';
import withTransition from '../components/HOC/withTransition';
import Industries from '../components/Industries/Industries';

const index = () => {
  return (
    <>
      <Header />
      <Feature />
      <Industries />
      <Contact />
    </>
  );
};

export default withTransition(index);
