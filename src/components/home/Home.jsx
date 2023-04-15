import React from "react";
import "./home.css";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";

import Shapes from "./Shapes";

const Home = () => {
  return (
    <section className="home container" id="home">
      <div className="intro">
        <img src="https://cdn.discordapp.com/attachments/736227949019398235/1059156928309252106/myimage.png" alt="Me" className="home__img" />
        <h1 className="home__name">Pranav Tiwari</h1>
        <span className="home__education">
        I'm a Frontend Enthusiast and a learner of web development.
        </span>
        <HeaderSocials />

        <a href="#contact" className="btn">Connect with me</a>
      
        <ScrollDown />
      </div>

      <Shapes />
    </section>
  );
};

export default Home;
