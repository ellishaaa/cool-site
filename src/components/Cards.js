import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import { Fade } from "react-reveal";

function Cards() {
  return (
    <div className="cards">
      <h1>Here are a few of my recent projects!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Fade>
              <CardItem
                src="../images/img-home.jpg"
                text="[Project One] A clean marketing site showcasing a fictional product with responsive layout."
                label="React / CSS"
                path="/projects"
                url="https://your-project-one-url.com"
                cta="View live site"
              />
              <CardItem
                src="../images/img-2.jpg"
                text="[Project Two] A small web app demonstrating interactive UI components and animations."
                label="React / UI"
                path="/projects"
                url="https://your-project-two-url.com"
                cta="View live site"
              />
            </Fade>
          </ul>
          <ul className="cards__items">
            <Fade>
              <CardItem
                src="../images/img-3.jpg"
                text="[Project Three] A minimal portfolio or landing page focused on typography and layout."
                label="HTML / CSS"
                path="/projects"
                url="https://your-project-three-url.com"
                cta="View live site"
              />
              <CardItem
                src="../images/img-4.jpg"
                text="[Project Four] A simple web experiment or fun side project that highlights creativity."
                label="Experimental"
                path="/projects"
                url="https://your-project-four-url.com"
                cta="View live site"
              />
              <CardItem
                src="../images/img-5.jpg"
                text="[Project Five] A small client-style site or clone that shows attention to detail."
                label="Client-style"
                path="/projects"
                url="https://your-project-five-url.com"
                cta="View live site"
              />
            </Fade>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
