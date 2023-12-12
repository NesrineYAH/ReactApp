import React from 'react';
import { FaCogs } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { FaComment } from "react-icons/fa";
import DownloadBtn from '../Download/download';
import { useTranslation } from "react-i18next";
import '../../i18n';


const BlobCloud = () => {
  const { t } = useTranslation();


    return (
      <div id="blobCloud">
        <h6 className='softSkills__Intro'>{t("Competence.question")}</h6>
      <p className='softSkills__p'>{t("Competence.prgI")} <strong className='IntroP'>{t("Competence.strongWords")}</strong>
      {t("Competence.prgII")} :</p>
    <div className='softSkills'>
    <div className='softSkills__item'>
    {/* <i className="fa fa-cogs" aria-hidden="true"></i> */}
    <FaCogs className="fa"/>
      <h5 className='softSkills__title' >{t("Competence.softSkills__titleI")}</h5>
    </div>

    <div className='softSkills__item'>
      {/* <i className='fa fa-users'> </i>  */}
      <HiUserGroup className="fa"/>
      <h5 className='softSkills__title'>{t("Competence.softSkills__titleII")}</h5>
    </div>
 
    <div className='softSkills__item'>
      {/* <i className='fa fa-comment'> </i>  */}
      <FaComment className="fa"/>
      <h5 className='softSkills__title'>{t("Competence.softSkills__titleIII")}</h5>
    </div>

    </div>
<DownloadBtn className='ButtonCV'/>
    </div>

    );

};

export default BlobCloud;

/**
 
      **/