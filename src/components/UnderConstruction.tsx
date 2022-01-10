import styles from './styles/UnderConstruction.module.scss'

const SingleProject = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.tape}>
        <span> UNDER CONSTRUCTION UNDER CONSTRUCTION UNDER CONSTRUCTION UNDER CONSTRUCTION </span>
      </div>
      <div className={styles.tape2}>
        <span> UNDER CONSTRUCTION UNDER CONSTRUCTION UNDER CONSTRUCTION UNDER CONSTRUCTION </span>
      </div>
      <div className={`${styles.imageBg} underConstruction`}>
      </div>
      <div className={styles.description}>
        <h2>
          More projects coming soon!
        </h2>
        <br />
        <h3>( ... )</h3>
      </div>
    </div>
  )
}

export default SingleProject
