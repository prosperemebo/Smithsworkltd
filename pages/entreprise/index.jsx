import Head from 'next/head';
import Entreprise from '../../components/Entreprise/Entreprise';
import withTransition from '../../components/HOC/withTransition';

const entreprise = () => {
  return (
    <>
      <Head>
        <title>Smithsworkltd - Entreprise</title>
      </Head>
      <Entreprise />
    </>
  );
};

export default withTransition(entreprise);
