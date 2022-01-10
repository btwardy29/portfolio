import { useEffect, useState } from 'react';
import styles from './styles/FixedNav.module.scss'

const FixedNav = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
  };
  
  useEffect(() => {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => {
          window.removeEventListener('scroll', handleScroll);
      };
  }, []);

  return (
    <>
      <div className={`${styles.wrapper} ${scrollPosition ? styles.out : styles.in}`}>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  )
}

export default FixedNav
