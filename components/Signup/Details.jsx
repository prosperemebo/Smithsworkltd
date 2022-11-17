import { useContext, useEffect, useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import EntrepriseContext from '../../store/entreprise-context';
import Portal from '../HOC/Portal';
import Modal from '../Modal/Modal';
import DetailsForm from './DetailsForm';
import classes from './Signup.module.scss';

const EMAIL_VALIDATION = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_VALIDATION = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g;

const Details = ({ doneHandler }) => {
  const [formError, setFormError] = useState({ status: false, message: '' });
  const [isFormVerified, setIsFormVerified] = useState(false);
  const signupContext = useContext(EntrepriseContext);
  const recaptchaRef = useRef();

  function onRecaptchaChange(value) {
    // console.log('Captcha value:', value);
    setIsFormVerified(true);
  }

  // useEffect(() => {

  //   return () => setFormError(false);
  // }, [
  //   formError,
  //   signupContext.address,
  //   signupContext.businessName,
  //   signupContext.email,
  //   signupContext.industry,
  // ]);

  const submitForm = () => {
    if (
      signupContext.address.trim().length > 3 &&
      signupContext.businessName.trim().length > 3 &&
      signupContext.industry.trim().length > 3 &&
      signupContext.keyContactPerson.trim().length > 3 &&
      PHONE_VALIDATION.test(signupContext.phoneNo) &&
      EMAIL_VALIDATION.test(signupContext.email)
    ) {
      if (isFormVerified && recaptchaRef.current.getValue() !== '') {
        setFormError({ status: false, message: '' });
        doneHandler();
      } else {
        setFormError({ status: true, message: 'Please validate Recaptcha!' });
        setTimeout(() => {
          setFormError(false);
        }, 5000);
      }
    } else {
      setFormError({
        status: true,
        message: 'Please fill in correct details!',
      });

      window.scrollTo(0, 0);

      setTimeout(() => {
        setFormError(false);
      }, 5000);
    }
  };

  return (
    <>
      <Portal>
        {formError.status && (
          <Modal>
            <p className='paragraph'>{formError.message}</p>
          </Modal>
        )}
      </Portal>
      <main className={classes.services}>
        <h1 className='heading-secondary'>Fillout Details.</h1>
        <div className='sizedbox'></div>
        <div className='sizedbox'></div>
        <div className='sizedbox'></div>
        <DetailsForm />
        <div className='sizedbox'></div>
        <div className='sizedbox'></div>
        <div className='sizedbox'></div>
        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey='6Lc6c38hAAAAAHiXqkDJKTQfOMMFDkUwSJdCNPHI'
          onChange={onRecaptchaChange}
        />
        <div className='sizedbox'></div>
        <div className='sizedbox'></div>
        <div className='sizedbox'></div>
        <div className='sizedbox'></div>
        <button className='btn btn-primary tall' onClick={submitForm}>
          Submit
        </button>
      </main>
    </>
  );
};

export default Details;
