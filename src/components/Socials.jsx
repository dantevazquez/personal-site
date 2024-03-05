import React from "react";
import { IoLogoGithub, IoLogoLinkedin, IoIosMail, IoIosVolumeHigh, IoIosVolumeOff } from "react-icons/io";
import INFO from "../data/user";
import 'doodle.css/doodle.css'
import "./styles/socials.css";

const Socials = () => {
    return (
        <div className="socials">

            <div className="social">
                <a href={INFO.socials.github} target="_blank" rel="noreferrer">
                    <div className="social-icon">
                        <IoLogoGithub />
                    </div>
                    <div className="social-text">Follow on GitHub</div>
                </a>
            </div>

            <div className="social">
                <a
                    href={INFO.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                >
                    <div className="social-icon">
                        <IoLogoLinkedin />
                    </div>
                    <div className="social-text">Follow on LinkedIn</div>
                </a>
            </div>

            <div className="social">
            <a
                        href={`mailto:${INFO.main.email}`}
                        target="_blank"
                        rel="noreferrer"
                    >
                        <div className="social-icon">
                            <IoIosMail />
                        </div>

                        <div className="social-text">{INFO.main.email}</div>
                    </a>
            </div>

            <div className="resume">
                <div className="resume-wrapper">
                    <button>Download resume</button>
                </div>
            </div>
        </div>
    );
};

export default Socials;
