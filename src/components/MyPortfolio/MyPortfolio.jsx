import React, { useState, useEffect, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const MyPortfolio = () => {
  const { t } = useTranslation();
  const lang = localStorage.getItem("i18nextLang");
  const [projects, setProjects] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("ALL");
  const [loading, setLoading] = useState(true);

  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
    console.log("Catégorie sélectionnée :", event.target.value);
  };

  // Filtrage (robuste : gère DATA/DEV en majuscules, et tags éventuels)
  const filteredProjects = useMemo(() => {
    if (selectedCategory === "ALL") return projects;

    const target = String(selectedCategory).toUpperCase().trim();

    return projects.filter((project) => {
      const cat = String(project?.category ?? "").toUpperCase().trim();
      if (cat === target) return true;

      // Optionnel: si ton JSON a un champ "category": ["DATA", "DEV", ...]
      if (Array.isArray(project?.category)) {
        const tagsUpper = project.category.map((x) => String(x).toUpperCase().trim());
        if (tagsUpper.includes(target)) return true;
      }
      return false;
    });
  }, [projects, selectedCategory]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("../../jsons/portfolio.json", { method: "GET" });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setProjects(data);
      } catch (e) {
        console.error("Erreur de chargement des projets :", e);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return <div className="myPortfolio">Chargement des projets…</div>;
    
  }

  return (
    
<section className="myPortfolio">
     <div> 
         <label className="selectCategory">
          <select className="btg" value={selectedCategory} onChange={handleChange}>
            <option value="ALL">Tous les projets</option>
            <option value="DEV">Projets de Développement, Full Stack</option>
            <option value="DATA">Projets DATA</option>
          </select>
        </label></div>
<div className="myPortfolio">      
     
      {filteredProjects.length === 0 && (
        <p style={{ marginTop: 16 }}>
          Aucun projet trouvé pour la catégorie <strong>{selectedCategory}</strong>.
        </p>
      )}

      {filteredProjects.map((project) => (
        <figure className="card" key={project.id}>
          <div className="card-face front">
            <img src={project.image} alt={project.alt || project.title} loading="lazy" />
          </div>
          <figcaption className="card-face back">
            <h3 style={{ textTransform: "uppercase", fontWeight: "bold" }}>
              {project.title}
            </h3>
            <p
              style={{
                direction: lang === "ar" ? "rtl" : "ltr",
                fontSize: lang === "ar" ? "16px" : "initial",
              }}
            >
              {t(project.brief_description)}
            </p>
            <div className="glow-on-hover">
              <Link to={`/Project/${project.id}`} target="_blank" className="btn_text">
                {t("Readmore")}
              </Link>
            </div>
          </figcaption>
        </figure>
      ))}
</div>   
    </section>
  );
};

export default MyPortfolio;
