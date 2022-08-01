import Head from 'next/head';
import BusinessFunctionsBody from '../components/BusinessFunctionsBody/BusinessFunctionsBody';
import withTransition from '../components/HOC/withTransition';

const businessFunctions = () => {
  return (
    <>
      <Head>
        <title>Smithsworkltd - Business Functions</title>
      </Head>
      <BusinessFunctionsBody />
    </>
  );
};

export default withTransition(businessFunctions);
