import classes from './BusinessFunctions.module.scss';
import { motion } from 'framer-motion';

const BusinessFunctionsBody = () => {
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { ...transition, delay: custom * 0.1 },
    }),
  };

  return (
    <div className={classes.Business}>
      <div className={classes.header}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { ...transition },
          }}
          className={classes.textbox}
        >
          <h1 className='heading-primary'>Business Functions.</h1>
          <p className='paragraph'>Diligence / Excellence / Integrity</p>
        </motion.div>
        <div className={classes.features}>
          <div className={classes.featureRow}>
            <div className={classes.feature}>
              <img src='/assets/presentation.gif' alt='Project Support' />
              <h2 className='heading-tertiary big'>Project Support</h2>
              <p className='paragraph'>
                Through our Innovation Managers Program, Smithswork Limited
                helps to groom talents for the SME Sub-sector, putting Nigeria’s
                young unemployed population to work and helping SMEs increase
                productivity. A portion of our profits goes towards this cause
                and future causes.
              </p>
            </div>
            <div className={classes.feature}>
              <img src='/assets/money-bag.gif' alt='Financial Advisory' />
              <h2 className='heading-tertiary big'>Financial Advisory</h2>
              <p className='paragraph'>
                In every assignment and project we are tasked with, we focus on
                ensuring cost-effectiveness which helps to drive our client’s
                cost down.
              </p>
            </div>
            <div className={classes.feature}>
              <img src='/assets/connection.gif' alt='Business Advisory' />
              <h2 className='heading-tertiary big'>Business Advisory</h2>
              <p className='paragraph'>
                At Smithswork, we pride ourselves for taking the initiative to
                create out-of-the-box solutions to clients’ assignments and
                projects.
              </p>
            </div>
            <div className={classes.feature}>
              <img
                src='/assets/line-chart.gif'
                alt='CSR / Non-Profit Advisory'
              />
              <h2 className='heading-tertiary big'>
                CSR / Non-Profit Advisory
              </h2>
              <p className='paragraph'>
                While we are concerned about profit, we are equally concerned
                about the continued existence of our environment. In every
                project, we keep our eyes on sustainability.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessFunctionsBody;
