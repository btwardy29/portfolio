import styles from './styles/Navbar.module.scss'

const Navbar = () => {
  return (
    <div className={styles.navigation}>
      <span>Home</span>
      <span>About  me</span>
      <span>Projects</span>
      <span>Contact</span>
    </div>
  )
}

export default Navbar
