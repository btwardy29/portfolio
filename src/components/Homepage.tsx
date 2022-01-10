import Animation from './Animation';
import styles from './styles/Homepage.module.scss'

const Homepage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headerWrapper}>
        <span>Bartosz Twardyy </span>
        <h1 className="gradientText">Front-end developer </h1>
        <h1 className="gradientText">& web designer</h1>
      </div>
      <div className={styles.headerWrapper}>
        <div className={styles.blankSpace}></div>
        <h3>Let me introduce myself. My name's Bartek and I'm based in Wroclaw, Poland. </h3>
        <h3>My goal is to engage in a maximum effort in projects I'm working on.</h3>
      </div>
      <Animation />
    </div>
  )
}

export default Homepage
