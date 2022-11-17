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
                handling projects, hence we were keen on making your projects
                succeed seamlessly at minimal costs. Find out more about how we
                help bring your projects to fruition. Our project management
                specialists are available for a 15 minutes consultation with
                your team.
                <a
                  href='https://calendly.com/smithsworkltd/free_consultation'
                  target='_blank'
                  rel='noreferrer'
                  className='btn btn-text'
                >
                  Click here to schedule.
                </a>
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
                their finances, cut costs and access innovative funding. To
                learn more about our phenomenal practices.
                <a
                  href='https://calendly.com/smithsworkltd/free_consultation'
                  target='_blank'
                  rel='noreferrer'
                  className='btn btn-text'
                >
                  Schedule a meeting with our team.
                </a>
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
                retards and new growth paths seem blurry. At Smithswork, we help
                to identify growth opportunities and leverage innovations to
                create product and service extensions. To find out more, please
                reach out to
                <a
                  href='mailto:info@smithsworkltd.com'
                  target='_blank'
                  rel='noreferrer'
                  className='btn btn-text'
                >
                  info@smithsworkltd.com
                </a>
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
                Leveraging over 10 years of experience in Non-profit practice,
                Smithswork Limited helps businesses and non-profit organisations
                to identify key impacts and dividends of doing good while
                succeeding in business.
                <a
                  href='https://calendly.com/smithsworkltd/free_consultation'
                  target='_blank'
                  rel='noreferrer'
                  className='btn btn-text'
                >
                  Schedule a free consultation.
                </a>
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessFunctionsBody;
