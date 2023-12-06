import React from 'react';
import skillsPortfolio from "../../assets/images/bakground/Capture d'écran skills.png"
import { FaCogs } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { FaComment } from "react-icons/fa";
import DownloadBtn from '../Download/download';


const BlobCloud = () => {
    return (
      <div id="blobCloud">
        <p className='softSkills__Intro'>Qu'est ce que je sais faire ?</p>
      <p>Mes compétences professionnelles me permettent d'être aujourd'hui <span className='IntroP'>Autonome, Polyvalent</span>
       et de disposer des compétences techniques dont voici un aperçu :</p>
    <div className='softSkills'>
    <div className='softSkills__item'>
    {/* <i className="fa fa-cogs" aria-hidden="true"></i> */}
    <FaCogs className="fa"/>
      <h5 className='softSkills__title' >Getion de projets</h5>
    </div>

    <div className='softSkills__item'>
      {/* <i className='fa fa-users'> </i>  */}
      <HiUserGroup className="fa"/>
      <h5 className='softSkills__title'>Pilotage d'équipe</h5>
    </div>
 
    <div className='softSkills__item'>
      {/* <i className='fa fa-comment'> </i>  */}
      <FaComment className="fa"/>
      <h5 className='softSkills__title'>Relation clients</h5>
    </div>

    </div>
        <DownloadBtn />
    </div>

    );

};

export default BlobCloud;

/**
 
      **/