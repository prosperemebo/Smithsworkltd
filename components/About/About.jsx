import classes from './About.module.scss';
import { motion } from 'framer-motion';

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const variants = {
  hidden: { opacity: 0, y: 100 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { ...transition, delay: custom * 0.1 },
  }),
};

const About = () => {
  return (
    <section className={classes.About}>
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
          <h1 className='heading-primary'>We are Smithswork.</h1>
          <p className='paragraph'>Diligence / Excellence / Integrity</p>
        </motion.div>
        <div className={classes.galleryContained}>
          <div className={classes.galleryComposition}>
            <motion.div
              custom={1}
              animate={'visible'}
              initial={'hidden'}
              variants={variants}
              className={classes.composition}
            >
              <img
                src='/assets/about-comp-1.jpg'
                alt='Galerry Image Composition'
              />
            </motion.div>
            <motion.div
              custom={2}
              animate={'visible'}
              initial={'hidden'}
              variants={variants}
              className={classes.composition}
            >
              <img
                src='/assets/about-comp-2.jpg'
                alt='Galerry Image Composition'
              />
            </motion.div>
            <motion.div
              custom={0}
              animate={'visible'}
              initial={'hidden'}
              variants={variants}
              className={classes.composition}
            >
              <img
                src='/assets/about-comp-3.jpg'
                alt='Galerry Image Composition'
              />
            </motion.div>
            <motion.div
              custom={1.5}
              animate={'visible'}
              initial={'hidden'}
              variants={variants}
              className={classes.composition}
            >
              <img
                src='/assets/about-comp-4.jpg'
                alt='Galerry Image Composition'
              />
            </motion.div>
          </div>
        </div>
      </div>
      <div className={classes.about}>
        <p className='paragraph'>
          “Born out of the work-of-art of a fine craftsman whose work delivers
          the finest solutions from an excellent and diligent mind driven by
          integrity. We are in the knowledge and solution creation business. We
          exist to unlock the potentials of small businesses “
        </p>
      </div>
      <div className={classes.values}>
        <div className={classes.value}>
          <img src='/assets/social-care.gif' alt='Vision' />
          <h2 className='heading-tertiary'>Vision</h2>
          <p className='paragraph'>
            To be the model of “helping Nigeria succeed” through our
            contributions to the small business sub-sector.
          </p>
        </div>
        <div className={classes.value}>
          <img src='/assets/rocket.gif' alt='Mission' />
          <h2 className='heading-tertiary'>Mission</h2>
          <p className='paragraph'>
            To unlock the potential of small businesses through the provision of
            exceptional advisory services.
          </p>
        </div>
        <div className={classes.value}>
          <img src='/assets/target.gif' alt='Values' />
          <h2 className='heading-tertiary'>Values</h2>
          <p className='paragraph'>
            Our values and culture as a responsible Nigerian company are:
            Diligence, Excellence, Integrity, Respect, Passion, Leadership &
            Professionalism, and Teamwork.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
