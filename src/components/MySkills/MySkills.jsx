 import React from "react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const MySkills = () => {  
  const [filtre, setFiltre] = useState();
//on assigne une des valeurs du ligne 29 au ligne 33 
  const handleFiltreChange = (value) => {
    setFiltre(value);
  };
  return (
    <div className="competance__Container">
   <Filtre onFiltreChange={handleFiltreChange} />
    <Competance filtre={filtre} /> 
    </div>
  );
};

//Filtre component
const Filtre = ({onFiltreChange}) => {
  const {t} = useTranslation();

  const handleFiltreSelect = (e) => {
    onFiltreChange(e.target.value);
  };
  return (
    <div>
      <select className="filtre" onChange={handleFiltreSelect}>
        <option value={t("all")}></option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Logiciel">{t("software")}</option>
        <option value="Mobile">{t("Mobile")}</option>
      </select>
    </div>
  );
};

// SkillsGrille component
const Competance = ({ filtre }) => {
  const [skills, setSkills] = useState([]);

  useEffect (() =>{
    //créer une fonction asynchrone pour récupérer tous les skills du fichier skills.json
    const fetchSkills = async () => {
    try {
      const skills = await fetch("../../jsons/skills.json", {
       method: "GET", 
      });
      if (skills.ok) {
        const response = await skills.json()
        setSkills(response);
      }
    } catch (e) {
      console.log(e);
   }   
    }; 
    fetchSkills();   
  }, []);

  return  (
  filtre === undefined ||
  filtre === null  ||
  filtre === "الكل" ||
  filtre === "ALL"  ||
  filtre === "Tout" ) ? (
  <div className="competance">
  {skills.map((skill) => (
    <div className="competance_item" key={skill.key}>
                  <div className="skill-bar"></div>
      <b className="skills__title">{skill.name}</b>
    </div>
  ))}
</div>
) : (
    <div className="competance">
      {skills
      .filter((skill) => skill.category === filtre)
      .map((skill) => (
        <div className="competance_item" key={skill.key}>
        <div className="skill-bar"></div>
           <b>{skill.name}</b>
        </div>
      )) }
    </div>
  );

};

export default MySkills;
