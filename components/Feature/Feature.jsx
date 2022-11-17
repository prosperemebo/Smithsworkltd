import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import classes from './Feature.module.scss';
import Marquee from './Marquee';

const Feature = () => {
  return (
    <>
      {/* <div className={classes.comingSoon}>
        <img
          src='/assets/logo.png'
          alt='Smithsworkltd'
          className={classes.logo}
        />
        <p className='paragraph'>Website Under Construction. Coming Soon!</p>
      </div> */}
      <section className={classes.Feature}>
        <div className={classes.background}>
          <img
            className={classes.backdrop}
            src='/assets/backdrop.svg'
            alt='Elipse'
          />
          <img
            className={classes.model}
            src='/assets/comp-1.png'
            alt='Portrait of a diligent man.'
          />
          <div className={classes.overlay}></div>
        </div>
        <div className={classes.features}>
          <Link href='/business-functions' passHref={false}>
            <div className={classes.feature}>
              <img src='/assets/presentation.gif' alt='Project Support' />
              <h2 className='heading-tertiary'>Project Support</h2>
            </div>
          </Link>
          <Link href='/business-functions' passHref={false}>
            <div className={classes.feature}>
              <img src='/assets/money-bag.gif' alt='Financial Advisory' />
              <h2 className='heading-tertiary'>Financial Advisory</h2>
            </div>
          </Link>
          <Link href='/business-functions' passHref={false}>
            <div className={classes.feature}>
              <img src='/assets/connection.gif' alt='Business Advisory' />
              <h2 className='heading-tertiary'>Business Advisory</h2>
            </div>
          </Link>
          <Link href='/business-functions' passHref={false}>
            <div className={classes.feature}>
              <img
                src='/assets/line-chart.gif'
                alt='CSR / Non-Profit Advisory'
              />
              <h2 className='heading-tertiary'>CSR / Non-Profit Advisory</h2>
            </div>
          </Link>
        </div>
        <Marquee />
      </section>
      <div className={classes.about}>
        <p className='paragraph'>
          “Born out of the work-of-art of a fine craftsman whose work delivers
          the finest solutions from an excellent and diligent mind driven by
          integrity. We are in the knowledge and solution creation business. We
          exist to unlock the potentials of small businesses “
        </p>

        <Link href='/about' passHref>
          <a className='btn btn-primary'>About Us</a>
        </Link>
      </div>
    </>
  );
};

export default Feature;
