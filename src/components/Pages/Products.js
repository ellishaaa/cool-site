import React from "react";
import "../../App.css";
import "../Cards.css";
import CardItem from "../CardItem";
import { Fade } from "react-reveal";

const HEALTHCARE_PROJECTS = [
  {
    src: "../images/RWJ.png",
    label: "Healthcare · WordPress · UI/UX",
    title: "RWJBarnabas Health",
    description:
      "Careers portal with category-based search, filters, and mobile‑friendly layouts.",
    url: "https://www.rwjbarnabashealthcareers.org/",
  },
  {
    src: "../images/chkd.png",
    label: "Healthcare · HTML/CSS · Mobile",
    title: "CHKD Careers",
    description:
      "Pediatric system careers site emphasizing clear pathways for clinical and non‑clinical roles.",
    url: "https://www.chkdcareers.org/",
  },
  {
    src: "../images/pediatricassociates.png",
    label: "Healthcare · WordPress · JS",
    title: "Pediatric Associates Jobs",
    description:
      "Pediatric primary care careers site with focused search and clean job details.",
    url: "https://jobs.pediatricassociates.com/",
  },
  {
    src: "../images/mymichigan.png",
    label: "Healthcare · UI/UX · Mobile",
    title: "MyMichigan Careers",
    description:
      "Regional health system careers experience with role and location filtering on all devices.",
    url: "https://careers.mymichigan.org/",
  },
  {
    src: "../images/tidalhealth.png",
    label: "Healthcare · HTML/CSS · JS",
    title: "TidalHealth Careers",
    description:
      "Careers site that blends regional branding with an approachable job search flow.",
    url: "https://www.tidalhealthcareers.org/",
  },
  {
    src: "../images/mainehealth.png",
    label: "Healthcare · WordPress · Cross Browser",
    title: "MaineHealth Careers",
    description:
      "Multi‑hospital careers hub focused on information architecture and navigation.",
    url: "https://www.careersatmainehealth.org/",
  },
];

const ECOMMERCE_PROJECTS = [
  {
    src: "../images/mr-wheel-deal.png",
    label: "Ecommerce · PHP · React.js · UI/UX",
    title: "Mr. Wheel Deal",
    description:
      "Custom wheel & tire ecommerce with a guided quote builder, fitment logic, and modern UI.",
    url: "https://www.mrwheeldeal.com/",
  },
  {
    src: "../images/fitment.png",
    label: "Ecommerce · PHP · Mobile",
    title: "Fitment Industries",
    description:
      "High-volume store with React-driven fitment search, galleries, and product discovery.",
    url: "https://www.fitmentindustries.com/",
  },
  {
    src: "../images/anthem.png",
    label: "Ecommerce · PHP · JS",
    title: "Anthem Off-Road",
    description:
      "Niche off-road wheel ecommerce experience with bold brand visuals and product filtering.",
    url: "https://www.anthemwheels.com/",
  },
  {
    src: "../images/trailbuilt.png",
    label: "Ecommerce · UI/UX · Mobile",
    title: "TrailBuilt Off-Road",
    description:
      "Off-road focused store for wheels, tires, and suspension, tuned for mobile shoppers.",
    url: "https://www.trailbuiltoffroad.com/",
  },
];

export default function Projects() {
  return (
    <>
      <div className="about-me">
        <h1>Portfolio</h1>
      </div>

      {/* Projects grid */}
      <div className="cards cards--projects-page">
        <div className="cards__container">
          <div className="cards__wrapper">
            <h2 className="cards__section-title">
              Healthcare Sites and Applications
            </h2>
            <ul className="cards__items">
              <Fade>
                {HEALTHCARE_PROJECTS.slice(0, 3).map((project, index) => (
                  <CardItem
                    key={`health-${index}`}
                    src={project.src}
                    label={project.label}
                    title={project.title}
                    description={project.description}
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
                    title={project.title}
                    description={project.description}
                    url={project.url}
                  />
                ))}
              </Fade>
            </ul>

            <h2 className="cards__section-title ecommerce">
              Ecommerce Sites and Web Applications
            </h2>
            <ul className="cards__items">
              <Fade>
                {ECOMMERCE_PROJECTS.slice(0, 2).map((project, index) => (
                  <CardItem
                    key={`ecom-${index}`}
                    src={project.src}
                    label={project.label}
                    title={project.title}
                    description={project.description}
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
                    title={project.title}
                    description={project.description}
                    url={project.url}
                  />
                ))}
              </Fade>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
