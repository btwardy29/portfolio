import SingleProject from "./SingleProject"
import styles from "./styles/Projects.module.scss"
import UnderConstruction from "./UnderConstruction"

const Projects = () => {
  const projects = [
    { name: 'TastyGram',
      short: 'tastygram',
      technologies: ['Vue', 'Firebase', 'CSS/Sass'],
      linkGithub: 'https://github.com/btwardy29/tastygram',
      linkWebsite: 'https://tastygram.vercel.app/',
      description: 'This is a simple web page that looks like a cook book. User can create account and add their own recipes. I\'ve also implemented comments and rating system based on Firebase.'
    },
    { name: 'Personal Trainer Manager',
      short: 'ptm',
      technologies: ['React', 'Firebase', 'CSS/Sass'],
      linkGithub: 'http://www.google.pl',
      linkWebsite: 'http://www.onet.pl',
      description: 'App that tests ability to merge different techniques.'
    },
    { name: 'Web3 Smart Contracts',
      short: 'web33',
      technologies: ['JavaScript', 'Solidity', 'CSS/Sass'],
      linkGithub: 'http://www.google.pl',
      linkWebsite: 'http://www.onet.pl',
      description: 'A simple project that helped to dive-in into Solidity language.'
    },
  ]
  return (
    <div>
      <h1 className="gradientText">Projects</h1>
      <p>These are some project I've been developing in different technlologies.</p>
      <div className={styles.wrapper}>
        {projects.map(project => {
          return <SingleProject key={project.short} project={project} />
        })}
        <UnderConstruction />
      </div>
    </div>
  )
}

export default Projects
