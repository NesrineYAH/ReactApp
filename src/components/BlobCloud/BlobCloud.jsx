import React from 'react';
import { useEffect, useRef } from "react";
import { FaCogs } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { FaComment } from "react-icons/fa";
import DownloadBtn from '../Download/download';
import { useTranslation } from "react-i18next";
import '../../i18n';
import devine from "../../assets/images/bakground/deveineBGR.png";
import { gsap } from "gsap";


const BlobCloud = () => {
  const { t } = useTranslation();
  const lang = localStorage.getItem("i18nextLang");
  const textRef = useRef(null);

   useEffect(() => {
       const timeline = gsap.timeline({ repeat: -1 });
        const chars = Array.from(textRef.current.querySelectorAll(' .display-dots'));

        timeline.from(chars, { opacity: 0, stagger: 0.5 })
           .to(chars, { opacity: 1, stagger: 0.5, delay: 0 })
            .from(chars.reverse(), { opacity: 1, stagger: 0.5 })
           .to(chars.reverse(), { opacity: 0, stagger: 0.5, delay: 0 })
       return () => {
            timeline.kill();
        };
   }, []);

    return (
      <div style={{ flexDirection: lang === "ar" ? "row" : "row-reverse" }} id="blobCloud">
        <h6 style={{ direction: lang === "ar" ? "rtl": "ltr" }} className='softSkills__Intro'>{t("Competence.question")}
           <span ref={textRef}><span className='display-dots'>?</span>
           <span className='display-dots'>?</span><span className='display-dots'>?</span></span> 
        </h6>
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