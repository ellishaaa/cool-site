import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/Purple_video.mp4" autoPlay loop muted />
      <h1>Web Developer & Designer</h1>
      <p>Turning ideas into clean, user-focused digital experiences.</p>

      <div className="hero-btns">
        <Link to="/about">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            About Me
          </Button>
        </Link>

        <Link to="/projects">
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            View Portfolio
            <i className="fas fa-play-circle" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
