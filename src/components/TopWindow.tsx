import React, { PureComponent } from "react";
import logo from "../assets/profile.png";

export default class TopWindow extends PureComponent {
    render() {
        return (
            <div>

                <header className="Top-window">
                    <img src={logo} className="Page-logo" alt="logo"/>
                </header>
                <div className="Header-text">
                    Full-stack engineer with background in AI and extensive knowledge of computer vision and camera feed processing.
                </div>

                <a href="https://www.linkedin.com/in/milan-pultar/">
                    <img src="./assets/linkedin.svg" alt="Image description"></img>
                </a>
            </div>
        );
    }
}
