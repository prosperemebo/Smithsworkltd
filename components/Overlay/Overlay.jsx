import classes from './Overlay.module.scss';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Overlay = ({ instance }) => {
  return (
    <>
      <motion.div
        className={classes.Overlay}
        // key={instance}
        // initial='pageInitial'
        // animate='pageAnimate'
        // exit='exit'
        // variants={{
        //   pageInitial: {
        //     opacity: 0,
        //     y: '-100vh',
        //   },
        //   pageAnimate: {},
        //   exit: {
        //     y: '-130vh',
        //     x: 0,
        //     transition: { delay: 1.5, ...transition, duration: 2.4 },
        //   },
        // }}
      >
        <div className={classes.Textbox}>
          <motion.h1
          // initial={{ opacity: 0, y: 50 }}
          // animate={{
          //   opacity: 1,
          //   y: 0,
          //   transition: { ...transition },
          // }}
          >
            Hello World
          </motion.h1>
        </div>
      </motion.div>
    </>
  );
};

export default Overlay;
