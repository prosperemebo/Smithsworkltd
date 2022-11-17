import Head from 'next/head';
import Contact from '../components/Contact/Contact';
import Feature from '../components/Feature/Feature';
import Header from '../components/Header/Header';
import withTransition from '../components/HOC/withTransition';
import Industries from '../components/Industries/Industries';
import classes from '../components/About/About.module.scss';

const index = () => {
  return (
    <>
      <Head>
        <title>Smithsworkltd - Diligence / Excellence / Integrity</title>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Header />
      <Feature />
      <Industries />

      <div className={classes.affliations}>
        <h1 className='heading-secondary'>Our Clients.</h1>
        <div className={classes.affiliates}>
          <div className={classes.affliate}>
            <img src='/assets/cl1.png' alt='Our Client' />
          </div>
          <div className={classes.affliate}>
            <img src='/assets/cl2.jpg' alt='Our Client' />
          </div>
          <div className={classes.affliate}>
            <img src='/assets/cl3.jpg' alt='Our Client' />
          </div>
          <div className={classes.affliate}>
            <img src='/assets/cl4.png' alt='Our Client' />
          </div>
          <div className={classes.affliate}>
            <img src='/assets/cl5.jpg' alt='Our Client' />
          </div>
          <div className={classes.affliate}>
            <img src='/assets/cl6.png' alt='Our Client' />
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
};

export default withTransition(index);
