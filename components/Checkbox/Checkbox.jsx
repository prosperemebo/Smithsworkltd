import classes from './Checkbox.module.scss';

const Checkbox = ({ isCheck, label, onClick }) => {
  return (
    <div className={classes.Checkbox} onClick={onClick}>
      <div className={`${classes.icon} ${isCheck ? classes.checked : ''}`}>
        <img src='/assets/check.svg' alt='Checkmark' />
      </div>
      <h3 className='heading-tertiary'>{label}</h3>
    </div>
  );
};

export default Checkbox;
