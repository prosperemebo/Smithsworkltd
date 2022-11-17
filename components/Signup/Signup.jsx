import { AnimatePresence, motion } from 'framer-motion';
import { useContext, useState } from 'react';
import EntrepriseContext from '../../store/entreprise-context.jsx';
import Portal from '../HOC/Portal.jsx';
import Modal from '../Modal/Modal.jsx';
import Header from './/Header.jsx';
import Details from './Details.jsx';
import LoadingOverlay from './LoadingOverlay.jsx';
import Services from './Services.jsx';
import classes from './Signup.module.scss';
import Success from './Success.jsx';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Signup = () => {
  const signupContext = useContext(EntrepriseContext);
  const [stage, setStage] = useState('');
  const [submitError, setSubmitError] = useState(null);
  const [submittingForm, setSubmittingForm] = useState(null);

  const setRoleHandler = (role) => {
    setStage('services');
    window.scrollTo(0, 0);
    signupContext.setRole(role);
  };

  const servicesCloseHandler = (services) => {
    signupContext.addServicesHandler([...services]);
    setStage('details');
    window.scrollTo(0, 0);
  };

  const submitFormHandler = async () => {
    setSubmitError(false);
    setSubmittingForm(true);

    const services = signupContext.services
      .filter((service) => {
        if (service.label !== 'Other') {
          return service.label;
        }
      })
      .map((service) => service.label);
    const role = signupContext.role.label;

    const body = {
      businessName: signupContext.businessName,
      email: signupContext.email,
      industry: signupContext.industry,
      address: signupContext.address,
      keyContactPerson: signupContext.keyContactPerson,
      phoneNo: signupContext.phoneNo,
      services,
      role,
    };

    try {
      const response = await fetch(
        'https://smithsworkltd.com/entreprise-signup.php',
        {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
            accept: 'application/json',
          },
        }
      );

      console.log(response);

      const result = await response.text();
      const actualResult = JSON.parse(result);

      console.log(actualResult);

      if (actualResult.status === 'success') {
        window.scrollTo(0, 0);
        setStage('success');
        setSubmittingForm(false);
      } else {
        setSubmitError(true);
        setSubmittingForm(false);
      }
    } catch (err) {
      setSubmitError(true);
      setSubmittingForm(false);
      console.log(err);
    }
  };

  return (
    <>
      <Portal>
        {submitError === true && (
          <Modal>
            <p className='paragraph'>An error occured! Please try again.</p>
          </Modal>
        )}
        {submittingForm === true && <LoadingOverlay />}
      </Portal>
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => console.log('hey')}
      >
        <div className={classes.Signup} key='container'>
          {stage === '' && (
            <motion.div
              key='header'
              initial='false'
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '-50%', opacity: 1, transition: { ...transition } }}
            >
              <Header setRoleHandler={setRoleHandler} />
            </motion.div>
          )}
          {stage === 'services' && (
            <motion.div
              key='services'
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { ...transition } }}
              exit={{ x: '-50%', opacity: 0, transition: { ...transition } }}
            >
              <Services doneHandler={servicesCloseHandler} />
            </motion.div>
          )}
          {stage === 'details' && (
            <motion.div
              key='details'
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { ...transition } }}
              exit={{ x: '-50%', opacity: 0, transition: { ...transition } }}
            >
              <Details doneHandler={submitFormHandler} />
            </motion.div>
          )}
          {stage === 'success' && (
            <motion.div
              key='success'
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1, transition: { ...transition } }}
              exit={{ y: '50%', opacity: 0, transition: { ...transition } }}
            >
              <Success />
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </>
  );
};

export default Signup;
