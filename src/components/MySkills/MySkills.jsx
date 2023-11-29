 import React from "react";
import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";
//import skills from "../../jsons/skills";

const MySkills = () => {  
  const [skills, setSkills] = useState([]);

  useEffect (() =>{
    //créer une fonction asynchrone pour récupérer tous les skills du fichier skills.json
    const fetchSkills = async () => {
    try {
      const query = await fetch("../../jsons/skills.json", {
       method: "GET", 
      });
      if (query.ok) {
        const response = await query.json()
        setSkills(response);
        console.log(response);
      }
    } catch (e) {
      console.log(e);
   }   
    }; 
    fetchSkills();   
  }, []);

  return  (
    <div className="competence__Container">
 
 {skills
//.sort((skill) => skill.category === "Frontend")
 .map((skill) => (
  
   <div className="competence__Frentend"  category={skill.category} key={skill.key}>

          <h5>{skills.name}</h5>
   <div className="competence-bar"></div>

                <img src={skill.image} alt={skill.alt} />
    </div>
  ))


  .map((skill) => (
    <div className="competence__Backend" category={skill.category} key={skill.key}>
           <li>key={skill.key}</li> 
          <h5>{skills.name}</h5>
    <div className="competence-bar"></div>
    <div className="skill-bar-fullfilled office_skill"></div>
  
     </div>
   ))
  }
</div>

) 


};
export default MySkills;
