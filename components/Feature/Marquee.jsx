import { useCallback, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import classes from './Feature.module.scss';

const Marquee = () => {
  const [navHeight, setNavHeight] = useState('');
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  const scrollHandler = useCallback(
    (myWindow) => {
      if (inView) {
        setNavHeight((myWindow.scrollY - 380) * 0.05);
      } else {
        setNavHeight(0);
      }
    },
    [inView]
  );

  useEffect(() => {
    window.addEventListener('scroll', () => scrollHandler(window));

    return () => window.removeEventListener('scroll', scrollHandler);
  }, [scrollHandler]);

  return (
    <div className={classes.marquee} ref={ref}>
      <h1
        style={{
          transform: `translateX(-${navHeight}%)`,
        }}
        className='heading-large'
      >
        Diligence / Excellence / Integrity
      </h1>
    </div>
  );
};

export default Marquee;
