import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import '../../i18n';
import { IoArrowBackOutline } from "react-icons/io5";
import { useParams } from 'react-router-dom';

const Project = () => {
  const lang = localStorage.getItem("i18nextLang");
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
  const fetchProjects = async () => {
    try {
     const requete = await fetch("../jsons/portfolio.json", {
       method: "GET", 
     });
     if (requete.ok) {
        const response = await requete.json();
        setProjects(response);
        const verify = response.find(
            (accommodation) => accommodation.id === id
        );

     if (verify === undefined) {
        setError(true);
     }
     }
    } catch (e) {
console.log(e);
    }
  };
  fetchProjects();
  }, [id]);
     const { t } = useTranslation();
     console.log(projects);
     console.log(id);

    return (
        <section>
            {error ? (
              <ErrorPage />
            ) : (
         <div className="project"> 
         <div className="project_header">
        <a href="/">
        <IoArrowBackOutline className="iconeBack"
        onMouseOver={ ({ target }) =>
        (target.style.color = "var(--background_icons)")
       }
       onMouseOut={({ target })=>
       (target.style.color ="var(--body_color)")
    }
     />    
    </a>
    {projects
        .filter((project) => project.id === id)
        .map((project) =>(
          <h6 className="project_title" key={project.id}>
           {project.title}
          </h6>  
        ))}    
        </div>  
        <div
        style={{ flexDirection: lang === "ar" ? "row" : "row-reverse" }}
        className="project_page">

      <div className="project-carousel">
      {/*<Caroussel  />*/}
      </div>
    <div style={{ direction: lang === "ar" ? "rtl": "ltr" }} 
    className="project_descreption">
     {projects
     .filter((project) => project.id === id)
     .map((project) => (
      <p key={project.id}>{t(project.description_project)}</p>
     ))} 
          {/* //à réviser demain  de la ligne 86 */}

    </div>

        </div>       
        </div>
            ))};
     
       </section> 
    );
  
};

export default Project;