import About from '../components/About/About';
import withTransition from '../components/HOC/withTransition';

const about = () => {
  return (
    <>
      <About />
    </>
  );
};

export default withTransition(about);
