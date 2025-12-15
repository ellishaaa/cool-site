import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <div>
        <h1 className="about__title about-me">About Me</h1>
      </div>

      <div className="about__inner">
        <p className="about__text">
          Hi, my name's <strong>Ellisha</strong>! I’m a front-end developer with
          an artistic background who loves building playful, approachable web
          experiences. I got into web development because it felt like the
          perfect mix of creativity and problem-solving. I love designing
          something visual and then actually bringing it to life.
        </p>

        <p className="about__text">
          I’ve worked professionally on large healthcare and e-commerce sites,
          teaming up with designers and stakeholders to turn wireframes and
          design systems into real, responsive websites. I enjoy collaborating,
          asking questions, and finding simple, thoughtful solutions to tricky
          problems.
        </p>
        <p className="about__text">
          While you're here, free to check out out{" "}
          <Link to="/products">my portfolio</Link>! It contains a collection of
          some of my recent professional projects. I care a lot about clean,
          accessible UI, smooth motion, and the little details that make a site
          feel good to use. Most of my work focuses on building polished
          production websites from scratch, turning wireframes and design
          concepts into responsive, user-friendly experiences.
        </p>
        <h2 className="about__subtitle">Things I work with:</h2>
        <ul className="about__list">
          <li>JavaScript and its frameworks (React.js, Gulp.js, Node.js...)</li>
          <li>HTML5 & CSS3 (flexbox, grid, animations)</li>
          <li>PHP & CMS-driven platforms such as WordPress</li>
          <li>Component-based UIs & design systems</li>
          <li>Responsive, mobile-first layouts</li>
          <li>SQL & data-driven features</li>
          <li>QA testing, debugging, and cross-browser fixes</li>
          <li>AWS & Azure DevOps workflows</li>
        </ul>
        <p className="about__text">
          If you’d like to collaborate, have a project in mind, or just want to
          say hi, you can reach me through my{" "}
          <Link to="/sign-up">contact form</Link>!
        </p>
      </div>
    </div>
  );
}
