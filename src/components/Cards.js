import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import { Button } from "./Button";

function Cards() {
  return (
    <div className="cards">
      <h1>Here are a few of my recent projects!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <Fade>
              <CardItem
                src="../images/mr-wheel-deal.png"
                title="Mr. Wheel Deal"
                description="Custom wheel & tire ecommerce built with PHP, React, and JS, focused on a smooth quote flow."
                label="Ecommerce · PHP · Mobile · JS"
                url="https://www.mrwheeldeal.com/"
                cta="View Project"
              />
              <CardItem
                src="../images/chkd.png"
                title="CHKD Careers"
                description="Pediatric health careers site with clear paths, HTML/CSS layout, and accessible UI."
                label="Healthcare · HTML/CSS · Mobile · JS"
                url="https://www.chkdcareers.org/"
                cta="View Project"
              />
            </Fade>
          </ul>
          <ul className="cards__items">
            <Fade>
              <CardItem
                src="../images/fitment.png"
                title="Fitment Industries"
                description="High-volume React/PHP ecommerce with fitment search, galleries, and performance tuning."
                label="Ecommerce · PHP · Mobile · UI/UX"
                url="https://www.fitmentindustries.com/"
                cta="View Project"
              />
              <CardItem
                src="../images/RWJ.png"
                title="RWJBarnabas Health Careers"
                description="Large healthcare careers hub with search, filtering, and responsive templates."
                label="Healthcare · WordPress · UI/UX · Responsive"
                url="https://www.rwjbarnabashealthcareers.org/"
                cta="View Project"
              />
              <CardItem
                src="../images/mainehealth.png"
                title="MaineHealth Careers"
                description="Multi-hospital careers experience focusing on information architecture and mobile UX."
                label="Healthcare · WordPress · Cross Browser · Mobile"
                url="https://www.careersatmainehealth.org/"
                cta="View Project"
              />
            </Fade>
          </ul>
          <div className="cards__cta">
            <Button
              buttonStyle="btn--secondary"
              buttonSize="btn--large"
              to="/projects"
            >
              View all projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
