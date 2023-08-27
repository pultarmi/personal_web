import React, { Component } from "react";
import { Link } from "react-scroll";

import styles from "../assets/Top_window.css";

import linkedin from "../assets/linkedin.svg";


export default function Top_window() {
    return (
        <div className="Top-window">
            <header className="Top-window-header">
                <img src={require('../assets/profile500.jpg')} className="Page-logo" alt="logo"/>

                <a href="https://www.linkedin.com/in/milan-pultar/">
                    <img src={linkedin} alt="Image description"></img>
                </a>
            </header>

            <div className="Top-window-body">
                <h1>Milan Pultar</h1>
                <h2>Building the future, one line at a time.</h2>

              <Link to="my-other-component" smooth={true} duration={500} spy={true}>
                Curriculum Vitae
              </Link>
            </div>

        </div>
    );
}
