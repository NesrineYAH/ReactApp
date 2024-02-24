import React from 'react';
import {useTypewriter, Cursor } from "react-simple-typewriter"; 
import { withTranslation, useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import "../../i18n";
import Boutton from "../Bouttons/Boutton";


const TxtToDisplay = () => {
  const { t } = useTranslation();
  
  const [text1] = useTypewriter({
    words: [
      t('presentation.h1Text')
        ],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 80
  })
  const [text2] = useTypewriter({
    words: [
      t('presentation.h2Text')
        ],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 80
  })
  return (
    <div className="txt-display">
      <h1 className="hiddenI">{text1}</h1>
      <h2 className="hiddenII">{text2}</h2>
    </div>
  );
};
TxtToDisplay.propTypes = {
  t: PropTypes.func.isRequired,
};
const About = () => {
  const { t } = useTranslation();
  const lang = localStorage.getItem("i18nextLang");
  const [text] = useTypewriter({
    words: [
      t('world'),
      t('Visiteurs'), 
      t('Développeurs')

    ],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 80
  })

  return (
    <section>
      <div id="About">
        <div className="presentation">
          <p  style={{ direction: lang === "ar" ? "rtl" : "ltr",   fontSize: '18px'}}>
            {t('lan')} {' '}
            <span period={3000}>{text}</span>
            <Cursor cursorColor='navy' />
          </p>
          <TxtToDisplay />
          <button  className="glow-on-hover" >
            <a href={t('Profil_path')}  className="btn_text">{t('txtInfo')}</a>
        </button>
        </div>
      </div>
    </section>
  );
};

About.propTypes = {
  t: PropTypes.func.isRequired,
  period: PropTypes.number.isRequired,
};

export default withTranslation()(About);