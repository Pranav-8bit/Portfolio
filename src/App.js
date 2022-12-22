import React from "react";
import "./App.css";

//components
import Sidebar from "./components/sidebar/Sidebar";
import Portfolio from "./components/portfolio/Portfolio";
import Blog from "./components/blog/Blog";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Resume from "./components/resume/Resume";
import About from "./components/about/About";
import Testimonial from "./components/testimonials/Testimonial";

function App() {
  return (
    <>
      <Sidebar />
      <main className="main">
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Testimonial />
        <Blog />
        <Contact />
      </main>
    </>
  );
}

export default App;
