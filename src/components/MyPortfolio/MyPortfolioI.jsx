import React from "react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const MyPortfolio = () => {
  const { t } = useTranslation();
  const lang = localStorage.getItem("i18nextLang");
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    console.log("Catégorie sélectionnée :", event.target.value);
    // Ici tu peux aussi déclencher un filtre sur tes projets
  };


//    function fILTRAGE PROJET
 const filteredProjects = selectedCategory === 'ALL'
    ? projects
    : projects.filter((project) => project.category === selectedCategory);


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
///////////////////////////15/08/2025



  return (    
    <div className="myPortfolio">
  < div>
     <label className="slectCategory">
      <select
        className="btg"
        value={selectedCategory}
        onChange={handleChange}
    >
        <option value="ALL">Tous les projets</option>
        <option value="DEV">
          Projets de Développement, Full Stack</option>
        <option value="DATA">Projets DATA</option>
      </select>
    </label>
   </div>



      {projects.map((project) => (
        <figure
          className="card"
          key={project.id}>
          <div className="card-face front">
            <img src={project.image} alt={project.alt}  loading="lazy" />
          </div>
          <figcaption className="card-face back">
            <h3 style={{textTransform: "uppercase", fontWeight: "bold"}}> {project.title} </h3>
            <p style={{direction: lang === "ar" ? "rtl" : "ltr", fontSize: lang === "ar" ? "16px" : "initial"}}>{t(project.brief_description)}</p>
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