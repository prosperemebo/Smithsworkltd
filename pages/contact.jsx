import Contact from '../components/Contact/Contact';
import withTransition from '../components/HOC/withTransition';

const contact = () => {
  return (
    <>
      <Contact />
    </>
  );
};

export default withTransition(contact);
