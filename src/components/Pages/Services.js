import React from "react";
import "../../App.css";

export default function About() {
  return (
    <div className="about">
      <div className="about__inner">
        <h1 className="about__title">About Me</h1>
        <p className="about__text">
          I’m a front-end developer who enjoys building playful, approachable
          web experiences. This portfolio is a small collection of sites and
          experiments I’ve created recently.
        </p>
        <p className="about__text">
          I care about clean, accessible UI, thoughtful motion, and
          small details that make an interface feel delightful. I’m always
          exploring new ideas, whether that’s a tiny micro-site, a UI demo, or a
          silly web experiment.
        </p>
        <h2 className="about__subtitle">Things I work with</h2>
        <ul className="about__list">
          <li>React & modern JavaScript</li>
          <li>HTML & modern CSS (flexbox, grid, animations)</li>
          <li>Design systems, component-driven UIs</li>
          <li>Responsive, mobile-first layouts</li>
        </ul>
        <p className="about__text">
          If you’d like to collaborate, have a project in mind, or just want to
          say hi, you can reach me through the contact form on the site.
        </p>
      </div>
    </div>
  );
}