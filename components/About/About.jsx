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
          <h2 className='heading-tertiary big'>Vision</h2>
          <p className='paragraph'>
            To be the model of “helping Nigeria succeed” through our
            contributions to the small business sub-sector.
          </p>
        </div>
        <div className={classes.value}>
          <img src='/assets/rocket.gif' alt='Mission' />
          <h2 className='heading-tertiary big'>Mission</h2>
          <p className='paragraph'>
            To unlock the potential of small businesses through the provision of
            exceptional advisory services.
          </p>
        </div>
        <div className={classes.value}>
          <img src='/assets/target.gif' alt='Values' />
          <h2 className='heading-tertiary big'>Values</h2>
          <p className='paragraph'>
            Our values and culture as a responsible Nigerian company are:
            Diligence, Excellence, Integrity, Respect, Passion, Leadership &
            Professionalism, and Teamwork.
          </p>
        </div>
      </div>
      <div className={classes.personnelContainer}>
        <h1 className='heading-secondary u-center-text'>Key Personnel.</h1>
        <div className={classes.personnels}>
          <div className={classes.personnel}>
            <img src='/assets/member-1.jpg' alt='Kayode Ajayi-Smith' />
            <div className={classes.info}>
              <h2 className='heading-tertiary big'>Kayode Ajayi-Smith</h2>
              <p className='paragraph'>Chief Executive Officer</p>
              <p className='paragraph'>
                Kayode Ajayi-Smith holds a Bachelor’s degree from the Olabisi
                Onabanjo University, Ogun State, Nigeria and a graduate degree
                (MBA) from Lehigh University, Bethlehem, Pennsylvania, USA.
                ‘Kayode is an award-winning Social Entrepreneur with over a
                decade of experience working in the public, private and third
                sectors. He is the chief promoter of the current growth
                initiatives and diversification of the company.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.features}>
        <div className={classes.featureRow}>
          <div className={classes.feature}>
            <img src='/assets/connection.gif' alt='Community' />
            <h2 className='heading-tertiary big'>Community</h2>
            <p className='paragraph'>
              Through our Innovation Managers Program, Smithswork Limited helps
              to groom talents for the SME Sub-sector, putting Nigeria’s young
              unemployed population to work and helping SMEs increase
              productivity. A portion of our profits goes towards this cause and
              future causes.
            </p>
          </div>
          <div className={classes.feature}>
            <img src='/assets/money-bag.gif' alt='Cost' />
            <h2 className='heading-tertiary big'>Cost</h2>
            <p className='paragraph'>
              In every assignment and project we are tasked with, we focus on
              ensuring cost-effectiveness which helps to drive our client’s cost
              down.
            </p>
          </div>
          <div className={classes.feature}>
            <img src='/assets/idea.gif' alt='Innovation' />
            <h2 className='heading-tertiary big'>Innovation</h2>
            <p className='paragraph'>
              At Smithswork, we pride ourselves for taking the initiative to
              create out-of-the-box solutions to clients’ assignments and
              projects.
            </p>
          </div>
          <div className={classes.feature}>
            <img src='/assets/diagram.gif' alt='Sustainability' />
            <h2 className='heading-tertiary big'>Sustainability</h2>
            <p className='paragraph'>
              While we are concerned about profit, we are equally concerned
              about the continued existence of our environment. In every
              project, we keep our eyes on sustainability.
            </p>
          </div>
        </div>
      </div>
      <div className={classes.affliations}>
        <h1 className='heading-secondary'>Affliations.</h1>
        <div className={classes.affiliates}>
          <div className={classes.affliate}>
            <img
              src='/assets/JOINT-INITIATIVE.jpeg'
              alt='Joint Initiative for Development'
            />
          </div>
          <div className={classes.affliate}>
            <img src='/assets/INTEGRITY.jpeg' alt='Integrity' />
          </div>
          <div className={classes.affliate}>
            <img src='/assets/NASME.jpeg' alt='NASME' />
          </div>
          <div className={classes.affliate}>
            <img src='/assets/boi.jpeg' alt='Bank of Industry' />
          </div>
          <div className={classes.affliate}>
            <img src='/assets/ZYDEX.jpeg' alt='Zydex' />
          </div>
          <div className={classes.affliate}>
            <img src='/assets/clarion.jpeg' alt='Caliron' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
