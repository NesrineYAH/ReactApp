import React from 'react';
import { FaCogs } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { FaComment } from "react-icons/fa";
import DownloadBtn from '../Download/download';
import { useTranslation } from "react-i18next";
import '../../i18n';
import devine from "../../assets/images/bakground/deveineBGR.png";


const BlobCloud = () => {
  const { t } = useTranslation();
  const lang = localStorage.getItem("i18nextLang");

    return (
      <div style={{ flexDirection: lang === "ar" ? "row" : "row-reverse" }} id="blobCloud">
        <h6 style={{ direction: lang === "ar" ? "rtl": "ltr" }} className='softSkills__Intro'>{t("Competence.question")}</h6>
        <img src={devine} alt='image devine' className='softSkills__img' />
      <p className='softSkills__p'>{t("Competence.prgI")} <strong className='IntroP'>{t("Competence.strongWords")} </strong>
      {t("Competence.prgII")} </p>

    <div className='softSkills'>

    <div className='softSkills__item'>
    <FaCogs className="fa"/>
      <h5 className='softSkills__title' >{t("Competence.softSkills__titleI")}</h5>
    </div>
    <div className='softSkills__item'> 
      <HiUserGroup className="fa"/>
      <h5 className='softSkills__title'>{t("Competence.softSkills__titleII")}</h5>
    </div>
    <div className='softSkills__item'>
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