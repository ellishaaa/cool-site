import React from "react";
import "../../App.css";
import "../Cards.css";
import CardItem from "../CardItem";
import { Fade } from "react-reveal";

const PROJECTS = [
  {
    src: "../images/img-home.jpg",
    label: "React / CSS",
    text: "[Project One] A marketing-style homepage with responsive layout and call-to-action sections.",
    url: "https://your-project-one-url.com",
  },
  {
    src: "../images/img-2.jpg",
    label: "React / UI",
    text: "[Project Two] A small app showing interactive components, hover states, and animations.",
    url: "https://your-project-two-url.com",
  },
  {
    src: "../images/img-3.jpg",
    label: "HTML / CSS",
    text: "[Project Three] A minimal landing page that focuses on clean typography and spacing.",
    url: "https://your-project-three-url.com",
  },
  {
    src: "../images/img-4.jpg",
    label: "Experimental",
    text: "[Project Four] A playful experiment exploring color, motion, or unexpected layouts.",
    url: "https://your-project-four-url.com",
  },
  {
    src: "../images/img-5.jpg",
    label: "Client-style",
    text: "[Project Five] A small client-style website that pays attention to details and polish.",
    url: "https://your-project-five-url.com",
  },
  {
    src: "../images/img-6.jpg",
    label: "Personal",
    text: "[Project Six] A personal or experimental project that reflects your personality.",
    url: "https://your-project-six-url.com",
  },
];

export default function Projects() {
  return (
    <div className="cards cards--projects-page">
      <h1>All Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Fade>
              {PROJECTS.slice(0, 3).map((project, index) => (
                <CardItem
                  key={index}
                  src={project.src}
                  label={project.label}
                  text={project.text}
                  url={project.url}
                />
              ))}
            </Fade>
          </ul>
          <ul className="cards__items">
            <Fade>
              {PROJECTS.slice(3).map((project, index) => (
                <CardItem
                  key={index + 3}
                  src={project.src}
                  label={project.label}
                  text={project.text}
                  url={project.url}
                />
              ))}
            </Fade>
          </ul>
        </div>
      </div>
    </div>
  );
}