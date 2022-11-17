import React from 'react';

const EntrepriseContext = React.createContext({
  role: '',
  services: [],
  businessName: '',
  email: '',
  industry: '',
  address: '',
  keyContactPerson: '',
  phoneNo: '',
  setRole: () => {},
  addServicesHandler: () => {},
  setBusinessName: () => {},
  setEmail: () => {},
  setIndustry: () => {},
  setAddress: () => {},
  setKeyContactPerson: () => {},
  setPhoneNo: () => {},
});

export default EntrepriseContext;
