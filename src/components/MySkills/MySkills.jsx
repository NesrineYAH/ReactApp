import React from "react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

const MySkills = () => {
  
  const [filtre, setFiltre] = useState();

  const handleFiltreChange = (value) => {
    setFiltre(value);
  };
  return (
    <div id="competance__Container">
   <filtre onFiltreChange={handleFiltreChange} />
    <competance filtre={filtre} /> 
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
const competance = ({ filtre }) => {
  const [skills, setSkills] = useState([]);

  useEffect (() =>{
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

  return  filtre === undefined ||
  filtre === null  ||
  filtre === "الكل" ||
  filtre === "ALL"  ||
  filtre === "Tout"  ? (
  <div className="competance">
  {skills.map((skill) => (
    <div className="competance_item" key={skill.key}>
      {/* <div className="skillsGrille_img">
        <img src={skill.image} alt={skill.alt} />
      </div> */}
      <b>{skill.name}</b>
    </div>
  ))}
</div>
) : (
    <div className="competance">
      {skills
      .filter((skill) => skill.category === filtre)
      .map((skill) => (
        <div className="competance_item" key={skill.key}>
         {/* <div className="skillsGrille_img">
          <img src={skill.img} alt={skill.alt}/>
           </div> */}
           <b>{skill.name}</b>
        </div>
      )) }
    </div>
  );

};

export default MySkills;
