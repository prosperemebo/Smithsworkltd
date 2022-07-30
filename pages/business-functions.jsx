import React from 'react';
import BusinessFunctionsBody from '../components/BusinessFunctionsBody/BusinessFunctionsBody';
import withTransition from '../components/HOC/withTransition';

const businessFunctions = () => {
  return (
    <>
      <BusinessFunctionsBody />
    </>
  );
};

export default withTransition(businessFunctions);
