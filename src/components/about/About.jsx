import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { AiOutlineProject } from "react-icons/ai";
import { MdComputer } from "react-icons/md";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about-icon" />
              <h5>Experience</h5>
              <small>University Student Ambassador</small>
            </article>

            <article className="about__card">
              <MdComputer className="about-icon" />
              <h5>Language</h5>
              <small>Python, Java, C++, JavaScript</small>
            </article>

            <article className="about__card">
              <AiOutlineProject className="about-icon" />
              <h5>Projects</h5>
              <small>20+ Pen–Testing</small>
            </article>
          </div>

          <p>
            An expert in Penetration-testing and socializing, and also can speak
            three languages. I'm ready to build and consult the best security
            system for you. Please feel free to contact me.
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
