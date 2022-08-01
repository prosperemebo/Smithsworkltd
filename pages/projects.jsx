import Head from 'next/head';
import Projects from '../components/Projects/Projects';
import withTransition from '../components/HOC/withTransition';

const projects = () => {
  return (
    <>
      <Head>
        <title>Smithsworkltd - Projects</title>
      </Head>
      <Projects />
    </>
  );
};

export default withTransition(projects);
