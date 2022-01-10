import './styles/Animation.scss';
import cloudFront from "../assets/cloud_front.png"
import cloudMiddle from "../assets/cloud_middle.png"
import cloudBack from "../assets/cloud_back.png"
import stars from "../assets/stars.png"
import hill from "../assets/hill.png"
import human from "../assets/human.png"
import glow from "../assets/glow.png"
import moon from "../assets/moon.png"
import { useState, useEffect } from 'react';

function Animation() {

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
      <div className="container">
        <div className="containerWrapper">
          <div className="mask">
          <div className="moonWrapper">
            <div className={`moon ${scrollPosition < 150  ? 'invisible' : 'visible'}`}>
              <img src={moon} alt="moon"/>
            </div>
          </div>
            <div className="cloudFront">
              <img src={cloudFront} alt="cloudFront"/>
            </div>
            <div className="cloudMiddle">
              <img src={cloudMiddle} alt="cloudMiddle" />
            </div>
            <div className="cloudBack">
              <img src={cloudBack} alt="cloudBack"/>
            </div>
            <div className="stars">
              <img src={stars} alt="stars"/>
            </div>
            <div className="stars">
              <img src={stars} alt="stars"/>
            </div> 
            <div className="stars2">
              <img src={stars} alt="stars"/>
            </div> 
          </div>
          <div className="hill">
            <img src={hill} alt="hill"/>
          </div>
          <div className="human">
            <img src={human} alt="human"/>
          </div>
          <div className="glow">
            <img src={glow} alt="glow"/>
          </div>

        </div>
      </div>
    </>
  );
}

export default Animation;
