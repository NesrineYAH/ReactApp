import React from "react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const Skills = () => {
  const [filtre, setFiltre] = useState();
  const handleFiltreChange = (value) => {
    setFiltre(value);
  };
  return (
    <div id="skillsGrille__Container">
   <filtre onFiltreChange={handleFiltreChange} />
    <SkillsGrille filtre={filtre} /> 
    </div>
  );
};
//Filtre component
const Filtre = ({onFiltreChange}) => {
  const {t} = useTranslation();

  const handleFiltreSelect = (e) => {
    onFiltreChange(e.target.value);
  }
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
  )
}
// SkillsGrille component
const skills = ({ filtre }) => {
  const [Skills, setSkills] = useState([]);
  useEffect (() =>{
    const fetchSkills = async () => {
    try {
      const skillsPersonal = await fetch("../../json/skills.json", {
       method: "GET", 
      });
      if (skillsPersonal.ok) {
        const response = await skills.json()
        setSkills(response);
      }
    } catch (e) {
      console.log(e);
   }   
    }; 
    fetchSkills();   
  }, []);

  return filtre === undefined ||
  filtre === null  ||
  filtre === "الكل" ||
  filtre === "ALL"  ||
  filtre === "Tout"  ? (
    <div className="SkillsGrille">
      {skills
      .filtre((skill) => skill.category === filtre)
      .map((skill) => (
        <div className="skillsGrille_item" key={skill.key}>
         <div className="skillsGrille_img">
          <img src={skill.img} alt={skill.alt}/>
           </div>
           <b>{skill.name}</b>
        </div>
      )) }
    </div>
  )

};
export default Skills;
