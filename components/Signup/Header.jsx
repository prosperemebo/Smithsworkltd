import { motion } from 'framer-motion';
import Role from '../../models/Role';
import classes from '../Entreprise/Entreprise.module.scss';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Header = ({ setRoleHandler }) => {
  const sme = new Role('SME', 'SME');
  const serviceProvider = new Role('SERVICEPROVIDER', 'Service Provider');

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
        <h1 className='heading-primary'>Sign Up.</h1>
        <div className='sizedbox'></div>
        <div className='sizedbox'></div>
        <button
          className='btn btn-primary tall'
          onClick={() => setRoleHandler(sme)}
        >
          As {sme.label}
        </button>
        <div className='sizedbox'></div>
        <div className='sizedbox'></div>
        <button
          className='btn btn-primary tall'
          onClick={() => setRoleHandler(serviceProvider)}
        >
          As {serviceProvider.label}
        </button>
      </motion.div>
      <div className='sizedbox'></div>
      <div className='sizedbox'></div>
      <div className='sizedbox'></div>
      <div className='sizedbox'></div>
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
  );
};

export default Header;
