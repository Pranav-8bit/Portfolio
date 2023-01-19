import React from "react";
import "./about.css";
import about from "../../assets/avatar-2.svg";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={about} alt="avatar" className="about__img" />
        
        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">I am Pranav Tiwari, MERN stack web developer from Ahmedabad. I have rich experience in reactJS framework and building and customization, also I am good at backend and noSQL database.</p>
            <a href="https://cdn.discordapp.com/attachments/736227949019398235/1064574157536378880/Pranavs_Resume_out_of_ahmdabad.pdf" className="btn">Download CV</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <span className="skills__number ">90%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Front-End design</h3>
                <span className="skills__number">80%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Backend-development</h3>
                <span className="skills__number">60%</span>
              </div>

              <div className="skills__bar">
                <span className="skills__percentage gaming"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default About;
