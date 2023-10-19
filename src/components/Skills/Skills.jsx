import React from "react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const Skills = () => {
  const [filtre, setFiltre] = useState();
  const handleFiltreChange = (value) => {
    setFiltre(value);
  };
  return (
    <div id="skills__Container">
   <filtre onFiltreChange={handleFiltreChange} />
    <Skills filtre={filtre} /> 
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
const skillsGrille = ({ filtre }) => {
  const [Skills, setSkills] = useState([]);
}
export default Skills;
