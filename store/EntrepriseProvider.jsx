import React, { useReducer } from 'react';
import EntrepriseContext from './entreprise-context';

const entrepriseState = {
  role: '',
  services: [],
  businessName: '',
  email: '',
  industry: '',
  address: '',
  keyContactPerson: '',
  phoneNo: '',
};

const entrepriseReducer = (state, action) => {
  if (action.type === 'SET_SERVICES') {
    return Object.assign({}, state, {
      services: [...state.services, ...action.services],
    });
  }

  if (action.type === 'SET_ROLE') {
    return Object.assign({}, state, {
      role: action.role,
    });
  }

  if (action.type === 'SET_BUSINESS_NAME') {
    return Object.assign({}, state, {
      businessName: action.name,
    });
  }

  if (action.type === 'SET_EMAIL') {
    return Object.assign({}, state, {
      email: action.email,
    });
  }

  if (action.type === 'SET_INDUSTRY') {
    return Object.assign({}, state, {
      industry: action.industry,
    });
  }

  if (action.type === 'SET_ADDRESS') {
    return Object.assign({}, state, {
      address: action.address,
    });
  }

  if (action.type === 'SET_KEY_CONTACT_PERSON') {
    return Object.assign({}, state, {
      keyContactPerson: action.keyContactPerson,
    });
  }

  if (action.type === 'SET_PHONE_NO') {
    return Object.assign({}, state, {
      phoneNo: action.phoneNo,
    });
  }

  return state;
};

const EntrepriseProvider = ({ children }) => {
  const [state, dispatch] = useReducer(entrepriseReducer, entrepriseState);

  const addServicesHandler = (services) => {
    dispatch({ type: 'SET_SERVICES', services });
  };

  const setRole = (role) => {
    dispatch({ type: 'SET_ROLE', role });
  };

  const setBusinessName = (name) => {
    dispatch({ type: 'SET_BUSINESS_NAME', name });
  };

  const setEmail = (email) => {
    dispatch({ type: 'SET_EMAIL', email });
  };

  const setIndustry = (industry) => {
    dispatch({ type: 'SET_INDUSTRY', industry });
  };

  const setAddress = (address) => {
    dispatch({ type: 'SET_ADDRESS', address });
  };

  const setKeyContactPerson = (keyContactPerson) => {
    dispatch({ type: 'SET_KEY_CONTACT_PERSON', keyContactPerson });
  };

  const setPhoneNo = (phoneNo) => {
    dispatch({ type: 'SET_PHONE_NO', phoneNo });
  };

  const context = {
    ...state,
    addServicesHandler,
    setRole,
    setBusinessName,
    setEmail,
    setIndustry,
    setAddress,
    setKeyContactPerson,
    setPhoneNo,
  };

  return (
    <EntrepriseContext.Provider value={context}>
      {children}
    </EntrepriseContext.Provider>
  );
};

export default EntrepriseProvider;
