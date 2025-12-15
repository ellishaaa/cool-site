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
                text="Mr. Wheel Deal – custom wheel & tire ecommerce built with PHP, React, and JS, focused on a smooth quote flow."
                label="Ecommerce · PHP · React · JS"
                path="/projects"
                url="https://www.mrwheeldeal.com/"
                cta="View live site"
              />
              <CardItem
                src="../images/img-2.jpg"
                text="CHKD Careers – pediatric health careers site with clear paths, HTML/CSS layout, and accessible UI."
                label="Healthcare · WordPress · HTML · CSS"
                path="/projects"
                url="https://www.chkdcareers.org/"
                cta="View live site"
              />
            </Fade>
          </ul>
          <ul className="cards__items">
            <Fade>
              <CardItem
                src="../images/img-3.jpg"
                text="Fitment Industries – high-volume React/PHP ecommerce with fitment search, galleries, and performance tuning."
                label="Ecommerce · PHP · React · UI/UX"
                path="/projects"
                url="https://www.fitmentindustries.com/"
                cta="View live site"
              />
              <CardItem
                src="../images/img-4.jpg"
                text="RWJBarnabas Health Careers – large healthcare careers hub with search, filtering, and responsive templates."
                label="Healthcare · WordPress · JS · Responsive"
                path="/projects"
                url="https://www.rwjbarnabashealthcareers.org/"
                cta="View live site"
              />
              <CardItem
                src="../images/img-5.jpg"
                text="MaineHealth Careers – multi-hospital careers experience focusing on information architecture and mobile UX."
                label="Healthcare · WordPress · UI/UX · Mobile"
                path="/projects"
                url="https://www.careersatmainehealth.org/"
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
