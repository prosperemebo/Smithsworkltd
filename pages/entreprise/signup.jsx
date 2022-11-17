import Head from 'next/head';
import withTransition from '../../components/HOC/withTransition';
import Signup from '../../components/Signup/Signup';
import EntrepriseProvider from '../../store/EntrepriseProvider';

const signup = () => {
  return (
    <>
      <Head>
        <title>Smithswork Entreprise - Signup</title>
      </Head>
      <EntrepriseProvider>
        <Signup />
      </EntrepriseProvider>
    </>
  );
};

export default withTransition(signup);
