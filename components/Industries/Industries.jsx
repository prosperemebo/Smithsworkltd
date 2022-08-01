import Link from 'next/link';
import { motion } from 'framer-motion';
import Dropdown from '../Dropdown/Dropdown';
import classes from './Industries.module.scss';
import { useEffect, useRef } from 'react';

const Industries = () => {
  const container = useRef();

  useEffect(() => {
    if (window.location.hash === '#industry') {
      console.log(container.current.offsetTop);
      window.scrollTo(0, container.current.offsetTop);
    }
  }, []);

  return (
    <section className={classes.Industries} id='industry' ref={container}>
      <h2 className='heading-secondary u-center-text'>Industries.</h2>
      <motion.div
        layoutScroll
        style={{ overflow: 'scroll' }}
        transition={{ duration: 1, type: 'spring' }}
        className={classes.sections}
      >
        <Dropdown
          pre='01'
          label='Agriculture'
          description='Smithswork recognizes the capabilities of the Agriculture industry and its potential to drive economic growth and feed the rising population in the country and indeed the continent.'
        >
          <p className='paragraph'>
            Thus, our intervention is in supporting yields, restoring our farms,
            storage solutions, equipping our farmers with adequate knowledge of
            global best practices in farming, and helping our farmers access the
            adequate financing for their business.
          </p>
          <p className='paragraph'>
            In partnership with Zydex Industries, India, we are giving farmers
            hope of increasing yields and the quality of their produce through
            our soil booster, Zytonic-M. Zytonic Biology Booster is a soil
            enhancer that is 100% biodegradable and eco-friendly. The product
            works by making soil soft and porous thereby increasing microbial
            activity and water holding capacity. The product can be applied to
            the soil in solid form or in soluble form. It is an organic product
            and is designed to be used in organic farming. It has already been
            introduced in several countries such as Zambia, Zimbabwe, Iran,
            Ecuador, Spain and India with positive field trial results. Some of
            the observed benefits of the products (from results of field trials
            include:
          </p>

          <ul className='paragraph u-ml-sm'>
            <li>Higher microbial soil counts;</li>
            <li>Improved yields</li>
            <li>Improved germination</li>
            <li>Reduction in irrigation</li>
            <li>Reduction in the use of chemical fertilizers</li>
          </ul>
          <div className='sizedbox'></div>

          <a
            href='https://www.smithsworkagro.com/'
            target='_blank'
            className='btn btn-primary'
            rel='noreferrer'
          >
            Smithsworkagro
          </a>
        </Dropdown>
        <Dropdown
          pre='02'
          label='Health Care'
          description='At Smithswork, we are interested in helping local health institutions and companies develop strategies to identify key areas of impact and increase their influence within their local communities.'
        >
          <p className='paragraph'>
            Through partnerships, we help local health institutions and
            companies raise funds and work with small businesses within their
            communities to improve the health of their employees and that of
            their immediate communities.
          </p>
          <p className='paragraph'>
            We also help local health institutions drive the communication and
            awareness of healthy behaviors and practices within their local
            communities.
          </p>
        </Dropdown>
        <Dropdown
          pre='03'
          label='Information Technology'
          description='Smithswork in collaboration with technology experts, develop solutions for the benefit of small and medium-sized enterprises.'
        >
          <p className='paragraph'>
            These solutions are designed to help small businesses improve
            effectiveness, increase productivity and enhance their growth.
            <br />
            Our emphasis on driving data awareness amongst small businesses is
            at the core of our goal as we believe that data plays a huge role in
            the growth of any business.
          </p>
        </Dropdown>
        <Dropdown
          pre='04'
          label='Energy'
          description='Smithswork helps small scale energy providers develop strategies in increasing their reach especially amongst small and medium-sized enterprises.'
        >
          <p className='paragraph'>
            We are particularly interested in solar options as an alternative to
            the erratic supply from the national grid and the impact solar
            options will have on cost, sustainability and effectiveness of small
            businesses.
            <br />
            Working with small scale energy providers, we will help small
            businesses identify the best option for their business.
          </p>
        </Dropdown>
        <Dropdown
          pre='05'
          label='Manufacturing'
          description='Smithswork helps small scale manufacturers identify strategies to improve processes, access funding options, and increase productivity.'
        />
      </motion.div>
    </section>
  );
};

export default Industries;
