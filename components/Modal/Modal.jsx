import classes from './Modal.module.scss';
import { motion } from 'framer-motion';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Modal = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50, x: '-50%' }}
      animate={{
        opacity: 1,
        y: 0,
        transition: { ...transition, duration: 1 },
      }}
      className={classes.Modal}
    >
      {children}
    </motion.div>
  );
};

export default Modal;
