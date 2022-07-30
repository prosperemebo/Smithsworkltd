import classes from './Project.module.scss';

const Project = ({ children, label, image, description, body }) => {
  return (
    <div className={classes.Project}>
      <div className={classes.content}>
        <div className={classes.capsule}>
          <div className={classes.info}>
            <div className='heading-tertiary  big'>{label}</div>
            <p className='paragraph'>{description}</p>
          </div>
          {image && (
            <div className={classes.image}>
              <img src={image} alt={`Image of ${label}`} />
            </div>
          )}
        </div>
      </div>
      <div className={classes.body}>{children}</div>
    </div>
  );
};

export default Project;
