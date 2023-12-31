import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import '../../i18n';
import { IoArrowBackOutline } from "react-icons/io5";
import { useParams } from 'react-router-dom';
import Boutton from "../../components/Bouttons/Boutton";
import ErrorPage from "../../components/Error/Error";
import Caroussel from "../../components/Caroussel/Caroussel";

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
            (p) => p.id === id
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
         <div className="project" > 
         <div className="project__header">
        <a href="/">
        <IoArrowBackOutline className="project__iconeBack"
        onMouseOver={ ({ target }) =>          // à voir onMouseOver
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
          <h6 className="project__title" key={project.id}>
           {project.title}
          </h6>  
        ))}    
        </div>  
        <div // pour change de position de page en cas de langue arabe
        style={{ flexDirection: lang === "ar" ?"row" : "row-reverse" }}
        className="project__page" >

      <div className="project__carousel" >
     <Caroussel className="carousel" />
      </div>

    <div className="project__descreption" style={{ direction: lang === "ar" ? "rtl" : "ltr"}}>
     {projects
     .filter((project) => project.id === id)
     .map((project) => (
      <p  style={{ direction: lang === "ar" ? "rtl" : "ltr",   fontSize: '16px'}}
      key={project.id}>{t(project.description_project)}</p>
     ))} 

       <div className="project__boutton" >    
      <div className="Technologies">
        <h6 style={{ direction: lang === "ar" ? "rtl" : "ltr",   textAlign: 'right'}}> {t("Technologies_used")}</h6>
        <div className="technologyUsed_icons">
        {projects
        .filter((project) => project.id ===id)
        .map((project) => project.technologyUsed.map((icon) => (
          <ul className='wrapper' key={icon.name}>
          <li className="wrapper__icon icons">
          <span className='wrapper__tooltip'>{icon.name}</span>
          <span><img src={icon.icon} alt="icon"/></span>
          </li>
          </ul>
        ))
        )}
        </div>
    </div>
    {projects
            .filter((project) => project.id === id)
            .map((project) =>
            project.site && project.github ? (
           <div className="Boutton" key={project.id}>
          <Boutton destination={project.site} title={t("Demo")} />
          <Boutton destination={project.github} title={t("source_code")} />
          </div>
          ) : project.github && !project.site ? (
        <div className="Boutton" key={project.id}>
        <Boutton destination={project.github} title={t("source_code")} />
         </div>
          ) : (
       <div className="Boutton" key={project.id}>
        <Boutton destination={project.site} title={t("Demo")} />
     </div>
      ))}          
          </div>
        </div>
      </div>
   </div>
      )}
 </section>
  );
};


export default Project;