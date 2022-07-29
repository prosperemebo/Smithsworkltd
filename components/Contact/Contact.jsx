import Link from 'next/link';
import classes from './Contact.module.scss';

const Contact = () => {
  return (
    <section className={classes.Contact}>
      <div className={classes.body}>
        <div className={classes.capsule}>
          <h1 className='heading-primary'>Reach Out.</h1>
          <p className='paragraph'>
            You're just a message away from reaching our team!
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
              <a href='mailto:info@smithsworkltd.com'>info@smithsworkltd.com</a>
            </h2>
          </div>
        </div>
      </div>
      <div className={classes.cta}>
        <form>
          <input type='text' placeholder='Name' />
          <input type='email' placeholder='Email' />
          <textarea placeholder='Message'></textarea>
          <button className='btn btn-primary'>Submit</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
