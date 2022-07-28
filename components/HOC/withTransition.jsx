import { AnimatePresence, motion } from 'framer-motion';
import classes from './withTransition.module.scss';

const withTransition = (OriginalComponent) => {
  return function WithTransition() {
    return (
      <>
        <AnimatePresence initial={true} exitBeforeEnter>
          <OriginalComponent />
        </AnimatePresence>
        <motion.div
          className={classes.slideIn}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
        <motion.div
          className={classes.slideOut}
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        />
      </>
    );
  };
};

export default withTransition;
