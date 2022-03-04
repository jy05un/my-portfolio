import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Service Security</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Penetration testing</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Website analysis</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Vulnerability Detection</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Vulnerability Analysis</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Prepare for vulnerabilitys</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Web security consulting</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB SERVICE */}

        <article className="service">
          <div className="service__head">
            <h3>Translation and Interpretation</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>Korea-Chinese translation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Simultaneous interpretation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Translation of thesis</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Personal media translation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Business interpretation</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>Business translation</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
