import React from "react";
import { Link } from "react-router-dom";
import "../style/Home.css";
import gautam from "../assets/image/gautam.png";
import heroBg from "../assets/image/hero-background.png"; // background image
import Footer from "../Component/Footer";
function Home() {
  return (
   <>
    <div
      className="home-container"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="home-content">
        {/* LEFT TEXT */}
        <div className="hero-text">
          <h1 className="hero-title">Hi, I'm <span>Gautam Kumar</span></h1>
          <p className="hero-subtitle">A MERN Stack Developer & Problem Solver</p>
          <Link to="/projects" className="cta-button">View My Work</Link>
        </div>

        {/* RIGHT IMAGE */}
        <div className="profile-picture-container">
          <img src={gautam} alt="A portrait of the developer" />
        </div>
      </div>
    </div>
    <Footer/>
   </>
    
  );
}

export default Home;
