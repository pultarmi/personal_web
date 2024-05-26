import React, {useEffect, useState} from "react";
import { Link as LinkRouter } from "react-router-dom";

// @ts-ignore
import styles from "../styles/WindowContact.module.scss";

import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";


export default function WindowContact() {
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth < 800);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const runonClick = (e:any) => {
    window.location.href="mailto:milan.pultar@gmail.com";
    e.preventDefault();
  }

  return (
    <div className={styles.Content}>
      {/*<div>*/}
        <div className={styles.TopWindowLeft}>
          <h2>Milan Pultar</h2>
          <img src={require('../assets/profile500.png')} className={styles.PageLogo} alt="logo"/>

          <h2>Software and AI engineer</h2>
          <h2 style={{fontStyle: 'italic'}}>Building the future, one line at a time.</h2>
        </div>
      {/*</div>*/}
      {/*<div>*/}
        <div className={styles.TopWindowBody}>
          <h1 className={styles.ContactText}>
            Contact
          </h1>
          <h2 className={styles.BigEmail}>
            <LinkRouter to='#' onClick={runonClick}>
              milan.pultar@gmail.com
            </LinkRouter>
          </h2>
          <div className={styles.Profiles}>
            <LinkRouter to='#' onClick={runonClick} className={styles.SmallEmail}>
              @
            </LinkRouter>
            <a href="https://www.linkedin.com/in/milan-pultar/">
              <img src={linkedin} alt="LinkedIn profile"></img>
            </a>
            <a href="https://github.com/pultarmi?tab=repositories">
              <img src={github} alt="GitHub profile"></img>
            </a>
          </div>
          <h2>+420 737 540 909</h2>
          <br></br>
        </div>
        {/*<div className={styles.Arrows}>*/}
        {/*  <div className={styles.arrow}></div>*/}
        {/*  <div className={styles.arrow}></div>*/}
        {/*</div>*/}
      {/*</div>*/}

      {/*<img src={require('../assets/fotor-ai-2024013023542.jpg')} className={styles.BackgroundImage} alt="logo"/>*/}
    </div>
  );
}
