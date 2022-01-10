import styles from './styles/Contact.module.scss'
import facebook from '../assets/facebook2.png'
import github from '../assets/github2.png'
import email from '../assets/email2.png'
import instagram from '../assets/instagram2.png'
import { useEffect, useRef, useState } from 'react'

const Contact = () => {
  const [showModal, setShowModal] = useState(false)

  let useClickOutside = (handler:(() => void)) => {

    let domNode:any = useRef();
  
    useEffect(() => {
      let maybeHandler = (event:any) => {
        if (domNode.current && !domNode.current.contains(event.target)) {
          handler();
        }
      };
  
      document.addEventListener("mousedown", maybeHandler);
  
      return () => {
        document.removeEventListener("mousedown", maybeHandler);
      };
    });
  
    return domNode;
  };

  let domNode = useClickOutside(() => {
    setShowModal(false);
  });

  return (
    <>
    <div className={styles.description}>
      <h1 className="gradientText">Contact me</h1>
      <p className={styles.descr}>If you wish to contact me, or just say "Hi!", be my guest:</p>
    </div>
      <div className={styles.wrapper}>
        <div className={styles.footer}>
          <div className={styles.images}>
            <a href='https://www.facebook.com/bartek.twardy.7/' target='_blank' rel="noreferrer" className={`${styles.imgClicker} ${styles.facebookDiv}`} />
            <a href='https://github.com/btwardy29' target='_blank' rel="noreferrer" className={`${styles.imgClicker} ${styles.githubDiv}`} />
            <a href='https://www.instagram.com/btwardy29/' target='_blank' rel="noreferrer" className={`${styles.imgClicker} ${styles.instagramDiv}`} />
            <div className={`${styles.imgClicker} ${styles.emailDiv}`}  onClick={() => setShowModal(true)}></div>
            <img className={`${styles.facebook} facebook`} src={facebook} alt="facebook"/>
            <img className={`${styles.github}`} src={github} alt="github"/>
            <img className={styles.instagram} src={instagram} alt="instagram"/>
            <img className={styles.email} src={email} alt="email"/>
          </div>
          <div className={styles.blur}>
            <p>Made with commitment and passion. All graphics and animations made by me with pure CSS, Adobe Illustrator and w/o other libraries. Spread <span>❤️</span> everywhere.</p>
          </div>
        </div>
      </div>
      { showModal && 
        <div className={styles.modalWrapper}>
          <div ref={domNode} className={styles.mailWindow}>
            <div className={styles.flexContainer}>
              <span>Just copy my email address</span>
              <h2>btwardy2929@gmail.com</h2>
              <p>One hardly ever uses Outlook these days, right?</p>
            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Contact
