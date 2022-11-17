import { useContext } from 'react';
import EntrepriseContext from '../../store/entreprise-context';
import classes from './Signup.module.scss';

const Success = () => {
  const signupContext = useContext(EntrepriseContext);

  return (
    <div className={classes.Success}>
      <div className={classes.featureCard}>
        <img src='/assets/rocket.gif' alt='Success' />
        <h3 className='heading-tertiary'>You’re All Setup</h3>
        <p className='paragraph'>
          Our team will reach out to you on further steps.
        </p>
      </div>
      <div className='sizedbox'></div>
      <div className='sizedbox'></div>
      <div className='sizedbox'></div>
      <div className='sizedbox'></div>
      <div className='sizedbox'></div>
      <div className='sizedbox'></div>
      <div className='sizedbox'></div>
      <div className='sizedbox'></div>
      <div className='sizedbox'></div>
      <div className='sizedbox'></div>
      <div className={classes.content}>
        <h2 className='heading-secondary'>
          Benefits of {signupContext.role.label}
        </h2>
        {signupContext.role.id === 'SME' && (
          <div className={classes.content}>
            <p className='paragraph'>
              1. One stop shop for all essential services
            </p>
            <p className='paragraph'>
              2. Access essential services at a negotiated rate
            </p>
            <p className='paragraph'>3. Monthly Insights</p>
            <p className='paragraph'>4. Trainings and Webinars</p>
            <p className='paragraph'>
              5. One stop shop for all essential services
            </p>
            <p className='paragraph'>6. Newsletters</p>
          </div>
        )}
        {signupContext.role.id === 'SERVICEPROVIDER' && (
          <div className={classes.content}>
            <p className='paragraph'>1. Increased Customer Base</p>
            <p className='paragraph'>2. Free Advertising</p>
            <p className='paragraph'>
              3. Access To essential business services from affiliate Service
              Providers at a discounted rate.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Success;
