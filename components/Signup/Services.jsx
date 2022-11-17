import { useState } from 'react';
import Service from '../../models/Service';
import Checkbox from '../Checkbox/Checkbox';
import NewServiceForm from './NewServiceForm';
import classes from './Signup.module.scss';

const Services = ({ doneHandler }) => {
  const [selectedServices, setSelectedServices] = useState([]);
  const [services, setServices] = useState([
    new Service('ACTS', 'Accounting / Tax Services'),
    new Service('HURS', 'Human Resource Service'),
    new Service('GOVC', 'Government Compliance'),
    new Service('LOAS', 'Loan Services'),
    new Service('LOGS', 'Logistics'),
    new Service('VERS', 'Verification Services'),
    new Service('INSU', 'Insurance'),
    new Service('SOMM', 'Social Media Management'),
    new Service('ITSU', 'IT Support'),
    new Service('PMTS', 'Payment Services'),
    new Service('OTHS', 'Other'),
  ]);

  const selectServiceHandler = (service) => {
    const newSelectedServices = [...selectedServices];
    const existingServiceIndex = newSelectedServices.findIndex(
      (s) => s.id === service.id
    );

    if (existingServiceIndex >= 0) {
      newSelectedServices.splice(existingServiceIndex, 1);
    } else {
      newSelectedServices.push(service);
    }

    setSelectedServices(newSelectedServices);
  };

  const newServiceHandler = (serviceLabel) => {
    const service = new Service(
      `CTMSRV-${serviceLabel.toUpperCase().trim()}-${Math.floor(
        Math.random() * 100
      )}`,
      serviceLabel
    );

    setSelectedServices((oldServ) => [...oldServ, service]);
    setServices((oldServices) => {
      return [...oldServices, service];
    });
  };

  return (
    <>
      <main className={classes.services}>
        <h1 className='heading-secondary'>Select Services</h1>
        <div className='sizedbox'></div>
        <div className='sizedbox'></div>
        <div className='sizedbox'></div>
        <div className={classes.checkboxes}>
          {services.map((service) => {
            const existingServiceIndex = selectedServices.findIndex(
              (s) => s.id === service.id
            );

            return (
              <Checkbox
                key={service.id}
                label={service.label}
                onClick={() => selectServiceHandler(service)}
                isCheck={existingServiceIndex >= 0}
              />
            );
          })}
        </div>
        <div className='sizedbox'></div>
        <div className='sizedbox'></div>
        <div className='sizedbox'></div>
        {selectedServices.findIndex((s) => s.id === 'OTHS') >= 0 ? (
          <NewServiceForm onSubmit={newServiceHandler} />
        ) : null}

        {selectedServices.length > 0 &&
        selectedServices.findIndex((s) => s.id === 'OTHS') === -1 ? (
          <button
            className='btn btn-primary tall'
            onClick={() => doneHandler(selectedServices)}
          >
            Next
          </button>
        ) : null}

        {selectedServices.length > 1 &&
        selectedServices.findIndex((s) => s.id === 'OTHS') >= 0 ? (
          <button
            className='btn btn-primary tall'
            onClick={() => doneHandler(selectedServices)}
          >
            Next
          </button>
        ) : null}
      </main>
    </>
  );
};

export default Services;
