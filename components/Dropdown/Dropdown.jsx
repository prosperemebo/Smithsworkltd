import { useState } from 'react';
import { motion } from 'framer-motion';
import classes from './Dropdown.module.scss';

const Dropdown = ({ pre, label, description, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownHandler = () => {
    setIsOpen((value) => !value);
  };

  return (
    <motion.div
      layout
      transition={{ layout: { duration: 1, type: 'spring' } }}
      className={classes.Dropdown}
      style={{
        borderRadius: '3rem',
        border: '2px solid #F8FEF5',
      }}
    >
      <motion.div layout className={classes.head} onClick={dropdownHandler}>
        <div className={classes.capsule}>
          <h2 className='heading-tertiary big'>
            <span className={classes.pre}>{pre}</span>
            <span className={classes.main}>{label}</span>
          </h2>

          {children && (
            <button
              onClick={dropdownHandler}
              className={`${classes.drop} ${isOpen ? `${classes.open}` : ''}`}
            >
              <img src='/assets/chevron-down.svg' alt='Chevron Down Arrow' />
            </button>
          )}
        </div>
        <p className='paragraph'>{`${description}${
          children ? (!isOpen ? '...' : '') : ''
        }`}</p>
      </motion.div>
      {isOpen && (
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          trasition={{ duration: 1, type: 'spring' }}
          className={classes.body}
        >
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};

export default Dropdown;
