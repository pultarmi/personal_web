import React, { Component } from "react";
import { Link } from "react-scroll";
import { Outlet, Link as LinkRouter } from "react-router-dom";

import styles from "../styles/TopWindow.module.css";

import linkedin from "../assets/linkedin.svg";


export default function TopWindow() {
    const runonClick = (e:any) => {
      window.location.href="mailto:milan.pultar@gmail.com";
      e.preventDefault();
    }

  return (
        <div className={styles.TopWindow}>
            <header>
                <img src={require('../assets/profile500.jpg')} className={styles.PageLogo} alt="logo"/>

                <a href="https://www.linkedin.com/in/milan-pultar/">
                    <img src={linkedin} alt="Image description"></img>
                </a>
            </header>
            <div className={styles.TopWindowBody}>
                <h1>Milan Pultar</h1>
                <h2>Building the future, one line at a time.</h2>

                <LinkRouter to='#' onClick={runonClick} >
                    milan.pultar@gmail.com
                </LinkRouter>
              <br></br>

                {/*<Link to="my-other-component" smooth={true} duration={500} spy={true}>*/}
                {/*    Curriculum Vitae*/}
                {/*</Link>*/}
            </div>

        </div>
    );
}
