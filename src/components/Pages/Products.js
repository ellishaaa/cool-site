import React from "react";
import "../../App.css";
import "../Cards.css";
import CardItem from "../CardItem";
import { Fade } from "react-reveal";

const HEALTHCARE_PROJECTS = [
  {
    src: "../images/img-5.jpg",
    label: "Healthcare Careers · WordPress · UI/UX",
    text: "RWJBarnabas Health Careers – careers portal with category-based search, filters, and mobile‑friendly layouts.",
    url: "https://www.rwjbarnabashealthcareers.org/",
  },
  {
    src: "../images/img-6.jpg",
    label: "Healthcare Careers · WordPress · HTML/CSS",
    text: "CHKD Careers – pediatric system careers site emphasizing clear pathways for clinical and non‑clinical roles.",
    url: "https://www.chkdcareers.org/",
  },
  {
    src: "../images/img-7.jpg",
    label: "Healthcare Careers · WordPress · JS",
    text: "Pediatric Associates Jobs – pediatric primary care careers site with focused search and clean job details.",
    url: "https://jobs.pediatricassociates.com/",
  },
  {
    src: "../images/img-8.jpg",
    label: "Healthcare Careers · UI/UX · Mobile",
    text: "MyMichigan Careers – regional health system careers experience with role and location filtering on all devices.",
    url: "https://careers.mymichigan.org/",
  },
  {
    src: "../images/img-9.jpg",
    label: "Healthcare Careers · WordPress · Branding",
    text: "TidalHealth Careers – careers site that blends regional branding with an approachable job search flow.",
    url: "https://www.tidalhealthcareers.org/",
  },
  {
    src: "../images/img-1.jpg",
    label: "Healthcare Careers · WordPress · IA",
    text: "MaineHealth Careers – multi‑hospital careers hub focused on information architecture and navigation.",
    url: "https://www.careersatmainehealth.org/",
  },
];

const ECOMMERCE_PROJECTS = [
  {
    src: "../images/img-home.jpg",
    label: "Ecommerce · PHP · React · JS",
    text: "Mr. Wheel Deal – custom wheel & tire ecommerce with a guided quote builder, fitment logic, and modern UI.",
    url: "https://www.mrwheeldeal.com/",
  },
  {
    src: "../images/img-2.jpg",
    label: "Ecommerce · React · UI/UX",
    text: "Fitment Industries – high-volume store with React-driven fitment search, galleries, and product discovery.",
    url: "https://www.fitmentindustries.com/",
  },
  {
    src: "../images/img-3.jpg",
    label: "Ecommerce · PHP · Branding",
    text: "Anthem Off-Road – niche off-road wheel ecommerce experience with bold brand visuals and product filtering.",
    url: "https://www.anthemwheels.com/",
  },
  {
    src: "../images/img-4.jpg",
    label: "Ecommerce · PHP · Mobile",
    text: "TrailBuilt Off-Road – off-road focused store for wheels, tires, and suspension, tuned for mobile shoppers.",
    url: "https://www.trailbuiltoffroad.com/",
  },
];

export default function Projects() {
  return (
    <div className="cards cards--projects-page">
      <h1>All Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <h2 className="cards__section-title">
            Healthcare careers & hospital sites
          </h2>
          <ul className="cards__items">
            <Fade>
              {HEALTHCARE_PROJECTS.slice(0, 3).map((project, index) => (
                <CardItem
                  key={`health-${index}`}
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
              {HEALTHCARE_PROJECTS.slice(3).map((project, index) => (
                <CardItem
                  key={`health-${index + 3}`}
                  src={project.src}
                  label={project.label}
                  text={project.text}
                  url={project.url}
                />
              ))}
            </Fade>
          </ul>

          <h2 className="cards__section-title">Ecommerce & product sites</h2>
          <ul className="cards__items">
            <Fade>
              {ECOMMERCE_PROJECTS.slice(0, 2).map((project, index) => (
                <CardItem
                  key={`ecom-${index}`}
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
              {ECOMMERCE_PROJECTS.slice(2).map((project, index) => (
                <CardItem
                  key={`ecom-${index + 2}`}
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