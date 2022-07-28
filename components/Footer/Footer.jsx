import Link from 'next/link';
import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={classes.Footer}>
      <Link href='/' passHref>
        <a className={classes.logo}>
          <img src='/assets/logo.png' alt='Smithworkltd' />
        </a>
      </Link>
      <p className='paragraph'>&copy; copyright Smithsworkltd 2022</p>
    </footer>
  );
};

export default Footer;
