import styles from './styles/SingleProject.module.scss'
import './styles/SingleProject.scss'
import website from '../../src/assets/website.svg'
import github from '../../src/assets/github.svg'

interface ProjectDetails {
  name: string,
  technologies: string[],
  linkGithub: string,
  linkWebsite: string,
  description: string,
  short: string,
}

const SingleProject = ({ project }: { project: ProjectDetails }) => {
  return (
    <div className={styles.wrapper}>
      <div className={`${styles.imageBg} ${project.short}`}>
        <div className={styles.gitHub}>
          <div>
            <a href={project.linkGithub} target="_blank" rel="noreferrer" style={{ color: 'black' }}>
              <img src={github} alt="github" />
              <p>GITHUB</p>
            </a>
          </div>
        </div>
        <div className={styles.website}>
          <div>
            <a href={project.linkWebsite} target="_blank" rel="noreferrer">
              <img src={website} alt="website"/>
              <p>WEBSITE</p>
            </a>
          </div>
        </div>
      </div>
      <div className={styles.description}>
        <h4>
          { project.name }
        </h4>
        <h5>Technologies used:</h5>
        <ul>
          {project.technologies.map(tech => {
            return <li key={tech}>{tech}</li>
          })}
        </ul>
        <p>{project.description}</p>
      </div>
    </div>
  )
}

export default SingleProject
