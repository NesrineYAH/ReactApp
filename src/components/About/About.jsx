import React from 'react';
import {useTypewriter, Cursor } from "react-simple-typewriter"; 
import { withTranslation, useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import "../../i18n";



const TxtToDisplay = () => {
  const { t } = useTranslation();
  const [text1] = useTypewriter({
    words: [
      t('presentation.h1Text')
        ],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 200
  })
  const [text2] = useTypewriter({
    words: [
      t('presentation.h2Text')
        ],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 200
  })
  return (
    <div className="txt-display">
      <h1 className="hidden">{text1}</h1>
      <h2 className="hidden">{text2}</h2>
    </div>
  );
};
TxtToDisplay.propTypes = {
  t: PropTypes.func.isRequired,
};

const About = () => {
  const { t } = useTranslation();
  const [toRotate] = useTypewriter({
    words: [
      t('world !'),
      t('Visiteurs !'), 
      t('Recruteurs !')
    ],
    loop: 0,
    typeSpeed: 120,
    deleteSpeed: 200
  })
  
  return (
    <section>
      <div id="About">
        <div className="presentation">
          <p>{t('lan')} {' '}
          <span period={3000}>{toRotate}</span>
          <Cursor  cursorColor='navy' />
          </p>
           <TxtToDisplay />   
       <button className="glow-on-hover">
       <a href={t('Profil_path')} >{t('txtInfo')}</a>
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