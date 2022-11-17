import { useContext, useState } from 'react';
import EntrepriseContext from '../../store/entreprise-context';
import Input from '../Input/Input';
import classes from './Signup.module.scss';

const DetailsForm = () => {
  const signupContext = useContext(EntrepriseContext);

  const onBusinessNameChange = (value) => {
    signupContext.setBusinessName(value);
  };

  const onEmailChange = (value) => {
    signupContext.setEmail(value);
  };

  const onIndustryChange = (value) => {
    signupContext.setIndustry(value);
  };

  const onAddressChange = (value) => {
    signupContext.setAddress(value);
  };

  const onKCPChange = (value) => {
    signupContext.setKeyContactPerson(value);
  };

  const onPhoneNOChange = (value) => {
    signupContext.setPhoneNo(value);
  };

  return (
    <form className={classes.detailForm}>
      <Input
        type='text'
        placeholder='Business Name'
        onChange={onBusinessNameChange}
      />
      <Input type='email' placeholder='Email' onChange={onEmailChange} />
      <Input type='text' placeholder='Industry' onChange={onIndustryChange} />
      <Input type='text' placeholder='Address' onChange={onAddressChange} />
      <Input
        type='text'
        placeholder='Key Contact Person'
        onChange={onKCPChange}
      />
      <Input type='tel' placeholder='Phone No' onChange={onPhoneNOChange} />
    </form>
  );
};

export default DetailsForm;
