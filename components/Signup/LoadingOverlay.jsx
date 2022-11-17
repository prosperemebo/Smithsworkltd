import classes from './Signup.module.scss';

const LoadingOverlay = () => {
  return (
    <div className={classes.LoadingOverlay}>
      <img src='/assets/rocket.gif' alt='Loading' />
      <div className='sizedbox'></div>
      <h3 className='heading-tertiary'>Your data is being sent!</h3>
    </div>
  );
};

export default LoadingOverlay;
