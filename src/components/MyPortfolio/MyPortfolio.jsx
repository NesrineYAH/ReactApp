import React from "react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const MyPortfolio = () => {
  const { t } = useTranslation();
  const lang = localStorage.getItem("i18nextLang");
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const requete = await fetch("../../jsons/portfolio.json", {
          method: "GET",
        });
        if (requete.ok) {
          const response = await requete.json();
          setProjects(response);
          console.log(response);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchProjects();
  }, []);

  

  return (
    <div className="myPortfolio">
      {projects.map((project) => (
        <figure
          className="card"
          key={project.id}>
          <div className="card-face front">
            <img src={project.image} alt={project.alt}  loading="lazy" />
          </div>
          <figcaption className="card-face back">
            <h3 style={{textTransform: "uppercase", fontWeight: "bold"}}> {project.title} </h3>
            <p style={{direction: lang === "ar" ? "rtl" : "ltr", fontSize: lang === "ar" ? "18px" : "initial"}}>{t(project.brief_description)}</p>
            <div className="glow-on-hover">
              <Link
                to={`/Project/${project.id}`} target="_blank"  className="btn_text" key={project.id}>
                {t("Readmore")}
              </Link>
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
};

export default MyPortfolio;