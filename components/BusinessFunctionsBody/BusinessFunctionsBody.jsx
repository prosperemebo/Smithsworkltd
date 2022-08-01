import classes from './BusinessFunctions.module.scss';
import { motion } from 'framer-motion';

const BusinessFunctionsBody = () => {
  const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

  const variants = {
    hidden: { opacity: 0, y: 120 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { ...transition, delay: custom * 0.2 },
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
            <motion.div
              custom={0}
              animate={'visible'}
              initial={'hidden'}
              variants={variants}
              className={classes.feature}
            >
              <img src='/assets/presentation.gif' alt='Project Support' />
              <h2 className='heading-tertiary big'>Project Support</h2>
              <p className='paragraph'>
                We understand the frustration businesses go through while
                handling projects, we are keen at making you projects sour new
                growth and make the blurry path clearer.
              </p>
            </motion.div>
            <motion.div
              custom={1}
              animate={'visible'}
              initial={'hidden'}
              variants={variants}
              className={classes.feature}
            >
              <img src='/assets/money-bag.gif' alt='Financial Advisory' />
              <h2 className='heading-tertiary big'>Financial Advisory</h2>
              <p className='paragraph'>
                Our finance practice focuses on helping small businesses manage
                their finances, cut cost and access innovative funding.
              </p>
            </motion.div>
            <motion.div
              custom={2}
              animate={'visible'}
              initial={'hidden'}
              variants={variants}
              className={classes.feature}
            >
              <img src='/assets/connection.gif' alt='Business Advisory' />
              <h2 className='heading-tertiary big'>Business Advisory</h2>
              <p className='paragraph'>
                We understand the frustration businesses go through when growth
                Retards and new growth paths seem blurry.
              </p>
            </motion.div>
            <motion.div
              custom={3}
              animate={'visible'}
              initial={'hidden'}
              variants={variants}
              className={classes.feature}
            >
              <img
                src='/assets/line-chart.gif'
                alt='CSR / Non-Profit Advisory'
              />
              <h2 className='heading-tertiary big'>
                CSR / Non-Profit Advisory
              </h2>
              <p className='paragraph'>
                Leveraging over 10 years’ experience of Non-profit practice,
                Smithswork Limited helps businesses to identify key impacts and
                dividends of doing good while succeeding in business.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessFunctionsBody;
