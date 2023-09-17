import React from "react";
import { Link } from "react-scroll";
import { Link as LinkRouter } from "react-router-dom";

import styles from "../styles/TopWindow.module.css";

import linkedin from "../assets/linkedin.svg";
import github from "../assets/github.svg";


export default function TopWindow() {
  const runonClick = (e:any) => {
    window.location.href="mailto:milan.pultar@gmail.com";
    e.preventDefault();
  }

  return (
    <div className={styles.TopWindow}>
      <div>
        <div className={styles.TopWindowLeft}>
          <img src={require('../assets/profile500.jpg')} className={styles.PageLogo} alt="logo"/>

          <div className={styles.Profiles}>
            <a href="https://www.linkedin.com/in/milan-pultar/">
              <img src={linkedin} alt="LinkedIn profile"></img>
            </a>
            <a href="https://github.com/pultarmi?tab=repositories">
              <img src={github} alt="GitHub profile"></img>
            </a>
        </div>
        </div>
      </div>
      <div>
        <div className={styles.TopWindowBody}>
          <h2>Milan Pultar</h2>
          <LinkRouter to='#' onClick={runonClick} >
            milan.pultar@gmail.com
          </LinkRouter>
          <h2>Software engineer</h2>

          <h2 style={{fontStyle: 'italic'}}>Building the future, one line at a time.</h2>

          <br></br>
      </div>

      <div className={styles.Arrows}>
        <div className={styles.arrow}></div>
        <div className={styles.arrow}></div>
      </div>

          {/*<Link to="my-other-component" smooth={true} duration={500} spy={true}>*/}
          {/*    Curriculum Vitae*/}
          {/*</Link>*/}
      </div>

    </div>
  );
}
