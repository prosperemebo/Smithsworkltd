import classes from './Header.module.scss';
import { motion } from 'framer-motion';
import Link from 'next/link';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Header = () => {
  return (
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
        <h1 className='heading-secondary'>
          Helping Nigeria Succeed by Promoting Small Businesses.
        </h1>
        <p className='paragraph'>
          Born out of the work-of-art of a fine craftsman whose work delivers
          the finest solutions from an excellent and diligent mind driven by
          integrity.
        </p>
        <Link href='/' passHref>
          <a className='btn btn-primary'>Contact Us</a>
        </Link>
      </motion.div>
      <motion.img
        initial={{ opacity: 0, x: 100 }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { ...transition },
        }}
        src='/assets/hero.jpg'
        alt='Portrait of a dilligent man.'
      />
    </header>
  );
};

export default Header;
