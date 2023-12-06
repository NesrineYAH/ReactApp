import React from 'react';
import skillsPortfolio from "../../assets/images/bakground/Capture d'écran skills.png"
import { FaCogs } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { FaComment } from "react-icons/fa";
import DownloadBtn from '../Download/download';


const BlobCloud = () => {
    return (
      <div id="blobCloud">
        <h6 className='softSkills__Intro'>Qu'est ce que je sais faire ?</h6>
      <p className='softSkills__p'>Mes compétences professionnelles me permettent d'être aujourd'hui <strong className='IntroP'>Autonome, Polyvalent, Tenace </strong>
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
<DownloadBtn className='ButtonCV'/>
    </div>

    );

};

export default BlobCloud;

/**
 
      **/