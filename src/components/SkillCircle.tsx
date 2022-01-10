import { useEffect, useState } from 'react'
import styles from './styles/SkillCircle.module.scss'
import './styles/SkillCircle.scss'

const SkillCircle = ({percentage, skillName, description}:{percentage: number, skillName: string, description: string}) => {
  const [skillValue, setSkillValue] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      if(skillValue < percentage) {
        setSkillValue(prevVal => prevVal + 1)
      } else {
        clearInterval(intervalId)
      }
    }, (percentage/3))
    return () => clearInterval(intervalId)

  }, [skillValue, percentage])


  return (

    <div className={styles.container}>
      <div className={`${styles.circleBox} ${skillName}`}>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="100px" height="100px">
          <defs>
              <linearGradient id="GradientColor">
                <stop offset="0%" stopColor="rgb(255, 106, 106)" />
                <stop offset="100%" stopColor="rgb(255, 228, 108)" />
              </linearGradient>
          </defs>
          <circle cx="50" cy="50" r="40" strokeLinecap="round" />
      </svg>
      <span>{skillValue}%</span>
        
      </div>
      <div>
        <img src={`images/${skillName}.png`} alt={skillName}/>
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  )
}

export default SkillCircle
