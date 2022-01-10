import { useRef } from 'react'
import useElementOnScreen from '../hooks/useElementOnScreen'
import SkillCircle from './SkillCircle'
import styles from './styles/About.module.scss'

const About = () => {
  const targetRef = useRef<HTMLDivElement>(null)
  const isVisible = useElementOnScreen({
    root: null,
    rootMargin: '-100px',
    threshold: 0.3
  }, targetRef)
  const skills = [
    { percentage: 70, skillName: 'javaScript', description: 'JavaScript'},
    { percentage: 50, skillName: 'Vue', description: 'Vue'},
    { percentage: 85, skillName: 'CSS', description: 'CSS/Sass'},
    { percentage: 65, skillName: 'react', description: 'React'},
    { percentage: 25, skillName: 'web3', description: 'WEB3/Solidity'},
    { percentage: 65, skillName: 'firebase', description: 'Firebase'},
  ]

  return (
    <>
      <div className={styles.flexBox}>
        <h1 className="gradientText">About me</h1>
      </div>
      <div className={`${styles.flexContainer}`} ref={targetRef}>
        <div className={`${styles.skillsBox} ${ isVisible ? 'fadeInLeft' : ''}`}>
          {isVisible ? skills.map(skill => {
            return <SkillCircle key={skill.skillName} percentage={skill.percentage} skillName={skill.skillName} description={skill.description}/>
          }) : <div></div>}
        </div>
        <div className={`${styles.description} ${ isVisible ? 'fadeInRight' : ''}`}>
          <span className={styles.wave}>
            👋
          </span>
          <span>
            I was born and raised in southern Poland. My first step into programming world began long time ago, in high school. Back then, <strong className="gradientText">Flash</strong> technology alongside with <strong className="gradientText">ActionScript</strong> were on the roll. From that time, many things have changed, but my passion for coding is still unchanged.
          </span>
        </div>
      </div>
    </>
  )
}

export default About
