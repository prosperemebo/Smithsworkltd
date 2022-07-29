import Link from 'next/link';
import { useEffect, useState } from 'react';
import classes from './Nav.module.scss';

const Nav = () => {
  const [isNavExpanded, setIsNavExpanded] = useState('');
  const [isNavOpen, setIsNavOpen] = useState(false);

  const scrollHandler = () => {
    if (window.scrollY > 0) {
      setIsNavExpanded(classes.navScrolled);
    } else {
      setIsNavExpanded('');
    }
  };

  const openNavHandler = (event) => {
    if (event.target.matches(`.${classes.backdrop}`)) {
      return false;
    }

    setIsNavOpen((value) => !value);
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
    <nav
      className={`${classes.nav} ${isNavExpanded} ${
        isNavOpen ? classes.navOpen : ''
      }`}
    >
      <div className={classes.logo}>
        <Link href='/'>
          <img src='/assets/logo.png' alt='Smithsworkltd' />
        </Link>

        <button
          className={`${classes.navBtn} btn btn-primary`}
          onClick={openNavHandler}
        >
          <span></span>
        </button>
      </div>

      <ul className={classes.navList} onClick={openNavHandler}>
        <div className={classes.backdrop}></div>
        <li>
          <Link href='/about' passHref>
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href='/#industry' passHref replace scroll={false}>
            <a>Industry</a>
          </Link>
        </li>
        <li>
          <Link href='/projects' passHref>
            <a>Projects</a>
          </Link>
        </li>
        <li>
          <Link href='/contact' passHref>
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
