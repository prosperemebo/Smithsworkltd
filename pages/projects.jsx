import Projects from '../components/Projects/Projects';
import withTransition from '../components/HOC/withTransition';

const projects = () => {
  return (
    <>
      <Projects />
    </>
  );
};

export default withTransition(projects);
