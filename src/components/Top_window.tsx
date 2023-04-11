import React, { Component } from "react";
import { Link } from "react-scroll";

import logo from "../assets/profile.png";
import linkedin from "../assets/linkedin.svg";


export default class Top_window extends Component {
    render() {
        return (
            <div className="Top-window">
                <header className="Top-window-header">
                    <img src={logo} className="Page-logo" alt="logo"/>

                    <a href="https://www.linkedin.com/in/milan-pultar/">
                        <img src={linkedin} alt="Image description"></img>
                    </a>
                </header>

                <div className="Top-window-body">
                    <h1>Full-stack engineer with background in AI specialty in computer vision and camera feed processing.</h1>

                  <Link to="my-other-component" smooth={true} duration={500} spy={true}>
                    Scroll to my other component
                  </Link>
                </div>

            </div>
        );
    }
}
