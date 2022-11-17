import Link from 'next/link';
import classes from './BusinessFunctions.module.scss';

const Targets = () => {
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

  const variants = {
    hidden: { opacity: 0, y: 120 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { ...transition, delay: custom * 0.2 },
    }),
  };

  return (
    <div className={classes.Business}>
      <div className={classes.header + ' ' + classes.sm}>
        <h1 className='heading-primary u-center-text'>Targets.</h1>
        <div className='sizedbox'></div>
        <div className='sizedbox'></div>
        <div className='sizedbox'></div>
        <div className='sizedbox'></div>
        <div className='sizedbox'></div>
        <div className={classes.features}>
          <div className={classes.featureRow + ' ' + classes.sm}>
            <div className={classes.feature}>
              <img src='/assets/energy.gif' alt='Thunder Bolt' />
              <h2 className='heading-tertiary big'>Energy</h2>
            </div>
            <div className={classes.feature}>
              <img src='/assets/agriculture.gif' alt='Plant' />
              <h2 className='heading-tertiary big'>Agriculture</h2>
            </div>
            <div className={classes.feature}>
              <img src='/assets/health-care.gif' alt='Health Care' />
              <h2 className='heading-tertiary big'>Health Care</h2>
            </div>
            <div className={classes.feature}>
              <img src='/assets/manufacturing.gif' alt='Manufacturing' />
              <h2 className='heading-tertiary big'>Manufacturing</h2>
            </div>
            <div className={classes.feature}>
              <img src='/assets/oil.gif' alt='Oil & Gas' />
              <h2 className='heading-tertiary big'>Oil &amp; Gas</h2>
            </div>
            <div className={classes.feature}>
              <img src='/assets/technology.gif' alt='Technology' />
              <h2 className='heading-tertiary big'>Technology</h2>
            </div>
          </div>
        </div>
      </div>

      <div className={'u-center-text ' + classes.textbox}>
        <h1 className='heading-primary'>Sign up Today!</h1>
        <p className='paragraph'>
          Our value proposition to SMEs is ease of doing their business and
          lowering barrier to entry for our services.
        </p>
        <div className='sizedbox'></div>
        <div className='sizedbox'></div>
        <div className='sizedbox'></div>
        <Link href='/entreprise/signup' passHref>
          <a className='btn btn-primary'>Sign Up</a>
        </Link>
      </div>
    </div>
  );
};

export default Targets;
