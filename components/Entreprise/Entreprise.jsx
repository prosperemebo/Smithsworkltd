import { motion } from 'framer-motion';
import classes from './Entreprise.module.scss';
import Link from 'next/link';
import Features from '../Industries/Features';
import Targets from '../BusinessFunctionsBody/Targets';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Entreprise = () => {
  return (
    <>
      <header className={classes.header}>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { ...transition },
          }}
          className={classes.textbox}
        >
          <h1 className='heading-primary'>Smithswork Enterprise Center.</h1>
          <p className='paragraph'>
            Our goal is to bring ease by alleviating the impediments small
            businesses are challenged with, enabling them to focus on their core
            business.
          </p>
          <Link href='/entreprise/signup' passHref>
            <a className='btn btn-primary'>Signup Today</a>
          </Link>
        </motion.div>
        <motion.div
          className={classes.coverImg}
          initial={{ opacity: 0, y: 200 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { ...transition },
          }}
        >
          <img
            src='/assets/coverImg.jpg'
            alt='Smithswork Entreprise Cover Image'
          />
        </motion.div>
      </header>
      <Features />
      <Targets />
    </>
  );
};

export default Entreprise;
