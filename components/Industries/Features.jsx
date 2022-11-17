import { motion } from 'framer-motion';
import Dropdown from '../Dropdown/Dropdown';
import classes from './Industries.module.scss';
import { useEffect, useRef } from 'react';

const Features = () => {
  const container = useRef();

  useEffect(() => {
    if (window.location.hash === '#industry') {
      console.log(container.current.offsetTop);
      window.scrollTo(0, container.current.offsetTop);
    }
  }, []);

  return (
    <section className={classes.Industries} id='industry' ref={container}>
      <h2 className={'heading-secondary u-center-text ' + classes.heading}>
        We are Creating Ease for Small Businesses to Thrive Successfully.
      </h2>
      <motion.div
        // layoutScroll
        // style={{ overflow: 'scroll' }}
        transition={{ duration: 1, type: 'spring' }}
        className={classes.sections}
      >
        <Dropdown
          pre='01'
          label='HR Services'
          description='Easing talent acquisition while allowing businesses to focus on core business activities.'
        />
        <Dropdown
          pre='02'
          label='Project Support'
          description='Businesses operating lean can get tailored support for projects without having to hire new employees.'
        />
        <Dropdown
          pre='03'
          label='Financial Services'
          description='including accounting, financial models, government compliance (tax, ITF, NSITF, etc.), and loans.'
        />
        <Dropdown
          pre='04'
          label='Government Grants'
          description='We provide businesses with information on current government grants and application processes. We also help businesses apply for such grants and follow-up with the process.'
        />
        <Dropdown
          pre='05'
          label='Business Advisory'
          description='Including management, strategy, business development, partnership development, etc.'
        />
      </motion.div>
    </section>
  );
};

export default Features;
