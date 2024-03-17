import React from "react";
import "./home.css";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src="https://cdn.discordapp.com/attachments/736227949019398235/1218806574521385020/1701497958059.jpeg?ex=66090113&is=65f68c13&hm=51c9989b16288736aa7b8ba5db404525044e3040ecc0c0f7ebddbee929db259d&" alt="Me" className="home__img" />
        <h1 className="home__name">Pranav Tiwari</h1>
        <span className="home__education">
        I'm a Frontend Enthusiast and a learner of web development.
        </span>
        <HeaderSocials />

        <a href="https://www.linkedin.com/in/pranav-tiwari-968419229" className="btn">Connect with me</a>
      
        <ScrollDown />
      </div>

      <Shapes />
    </section>
  );
};

export default Home;
