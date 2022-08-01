import Project from './Project/Project';
import classes from './Projects.module.scss';

const Projects = () => {
  return (
    <div className={classes.Projects}>
      <div className={classes.header}>
        <h1 className='heading-primary'>Special Projects.</h1>
        <p className='paragraph'>
          We pride ourselves on value creation, this is the driving force in our
          special projects.
        </p>
      </div>
      <Project
        label='01. The Secret 7'
        description='Through the years, Organizational structure has been defined by Scholars, Executives and Corporate Anthropologists along continuum’s that are intended to represent polarities of behaviour. They cover a wide range of leadership and communication styles, decision-making and every other governing principle illustrated in the organization and reinforced and normalized by the key talent systems and management practices.'
        image='/assets/sc7.jpg'
      >
        <p className='paragraph'>
          Owing to a wealth of knowledge by the Clarion group comprising over 40
          years of in-depth knowledge gained through work with Hundreds of
          clients across a plethora of industries and sectors in over 40
          countries, 7 major dimensions of culture have been identified. This
          dimensions are known as the secret seven. <br /> These dimensions
          consistently emerge as critical in the operations relating to the
          organization. The seven dimensions aren’t the only dimensions. There
          are four sub-dimensions for each of them which constantly emerge in
          the workplace. While noting that there are no better or worse
          dimensions, every organization must consider the elements which
          empower the organization to achieve its vision and Strategy/ mission,
          purpose and values and how best to position it in the market it
          satisfies.
        </p>
        <p className='paragraph'>
          In conjunction with Smithswork Limited, Clarion group is providing
          free access to the Secret Seven survey in Nigeria. For more
          information on the Secret 7, or if you’d like to receive a unique
          survey which is useful for your company for free, Click Here and
          complete the form.
        </p>
      </Project>
      <Project
        label='02. Smithswork Enterprise Center'
        description='Through the years, Organizational structure has been defined by Scholars, Executives and Corporate Anthropologists along continuum’s that are intended to represent polarities of behaviour. They cover a wide range of leadership and communication styles, decision-making and every other governing principle illustrated in the organization and reinforced and normalized by the key talent systems and management practices.'
        image='/assets/sme.jpg'
      />
      <Project
        label='03. Innovation Managers Programme'
        description='At Smithswork, we pride ourselves on value creation. That desire to constantly improve and offer better is the driving force behind the Innovation Managers Program. A three month internship offered to groom and mould Disciplined, Hard-working, Passionate hound men and women into the SME sector which is the backbone of our economy.'
        image='/assets/impe.jpg'
      >
        <p className='paragraph'>
          By refining talents to meet the growing need of professionals in the
          SME sector, we are contributing our quota to nation building and
          development.
          <br />
          <br />
          Small businesses account for almost 96% of the Nigerian Business
          Economy and even adds a whopping 48% to the GDP as well as 84% to
          employment in this country. Inability to cater for the needs of the
          Small Business would create a major caveat in the economy stemming
          from the loss of revenue.
          <br />
          <br />
          If you are interested in hiring alumni of our program, kindly sign-up
          for updates on the program by emailing us at :
          info@www.smithsworkltd.com
        </p>
      </Project>
    </div>
  );
};

export default Projects;
