import Link from 'next/link';
import { useEffect, useState } from 'react';
import Portal from '../HOC/Portal';
import Modal from '../Modal/Modal';
import classes from './Contact.module.scss';

const Contact = () => {
  const [msgStatus, setMsgStatus] = useState(null);

  useEffect(() => {
    const urlString = window.location.href;
    const url = new URL(urlString);
    const message = url.searchParams.get('message');

    if (message === 'error') {
      setMsgStatus('error');
    }

    if (message === 'success') {
      setMsgStatus('success');
    }

    setTimeout(() => setMsgStatus(null), 5000);
  }, []);

  return (
    <>
      <Portal>
        {msgStatus && (
          <Modal>
            <p className='paragraph u-center-text'>
              {msgStatus === 'error' &&
                'Something went wrong. Please try again.'}
              {msgStatus === 'success' &&
                "Message was sent successfully! We'll get back to you soon."}
            </p>
          </Modal>
        )}
      </Portal>
      <section className={classes.Contact}>
        <div className={classes.body}>
          <div className={classes.capsule}>
            <h1 className='heading-primary'>Reach Out.</h1>
            <p className='paragraph'>
              You&apos;re just a message away from reaching our team!
            </p>
          </div>
          <div className={classes.infoBody}>
            <div className={classes.info}>
              <img src='/assets/location.png' alt='Location Pin' />
              <h2 className='heading-tertiary'>
                No.1 Hughes Ave, Alagomeji-Yaba <br /> 100001, Lagos
              </h2>
            </div>
            <div className={classes.info}>
              <img src='/assets/phone.png' alt='Phone' />
              <h2 className='heading-tertiary'>
                <a href='tel:+234818880115'>(+234) 81 888 0115</a>
              </h2>
            </div>
            <div className={classes.info}>
              <img src='/assets/email.png' alt='Email' />
              <h2 className='heading-tertiary'>
                <a href='mailto:info@smithsworkltd.com'>
                  info@smithsworkltd.com
                </a>
              </h2>
            </div>
          </div>
        </div>
        <div className={classes.cta}>
          <form
            method='POST'
            action='https://smithsworkltd.com/mail/message.php'
          >
            <input required type='text' placeholder='Name' name='name' />
            <input required type='email' placeholder='Email' email='email' />
            <textarea required placeholder='Message' name='message'></textarea>
            <button name='submit' className='btn btn-primary'>
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
