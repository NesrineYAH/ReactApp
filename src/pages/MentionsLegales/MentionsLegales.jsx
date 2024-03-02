import React from 'react';
import { useTranslation } from "react-i18next";

const MentionsLegales = () => {
  const { t } = useTranslation();
    return (
        <div id='mentionsLegales'>
          <h1 className='H1'>{t('TextInfo.info')}</h1> 
          <br />
        
<p>{t('TextInfo.p')}</p>
<br />
 <h4>1. {t('TextInfo.info')}:</h4>

<span  style={{whiteSpace:"nowrap"}}>{t('TextInfo.pI')} : <span style={{fontWeight: 'bold'}}> {t('TextInfo.nom')}</span></span> <br/>
<span >{t('TextInfo.pS')}<span style={{fontWeight: 'bold'}}>{t('TextInfo.pS1')}</span></span> <br/>
<span>{t('TextInfo.pII')} <span style={{fontWeight: 'bold'}}>contact@nesrinebekkar.com</span></span>   <br/>
<span>{t('TextInfo.pIII')} <span style={{fontWeight: 'bold'}}>{t('TextInfo.pIII1')}</span></span><br/>
<span>{t('TextInfo.pS2')}<span style={{fontWeight: 'bold'}}> {t('TextInfo.nom')}</span></span>
<p>{t('TextInfo.pr')}</p>
<p>{t('TextInfo.pr1')}</p>
<p>{t('TextInfo.pr2')}</p>
<br />

<h4>2. {t('TextInfo.infoI')}:</h4>

<p> {t('TextInfo.prI')}:  <a href="https://nesrinebekkar.com" target="_blank" rel="noreferrer"> https://nesrinebekkar.com  </a>  {t('TextInfo.prII')}</p>
<p>  {t('TextInfo.prIII')}  <a href="https://nesrinebekkar.com" target="_blank" rel="noreferrer"> https://nesrinebekkar.com </a>  {t('TextInfo.prIIII')}</p>

<br />

<h4>3. {t('TextInfo.infoII')}:</h4>

 <p>{t('TextInfo.prIII')} <a href="https://nesrinebekkar.com" target="_blank" rel="noreferrer"> https://nesrinebekkar.com  </a>{t('TextInfo.pIIIII')}</p>
 <p>{t('TextInfo.prIII')}  <a href="https://nesrinebekkar.com" target="_blank" rel="noreferrer"> https://nesrinebekkar.com </a> {t('TextInfo.pT1')} <a href="https://nesrinebekkar.com" target="_blank" rel="noreferrer"> https://nesrinebekkar.com </a>{t('TextInfo.pT2')}.</p> 


  <br />
  <h4>4. {t('TextInfo.infoIII')}:</h4>
 <p>{t('TextInfo.pT3')}…</p>
 <p>{t('TextInfo.pT4')}<a href="https://nesrinebekkar.com" target="_blank" rel="noreferrer"> https://nesrinebekkar.com </a>, {t('TextInfo.pT5')} <a href="https://nesrinebekkar.com" target="_blank" rel="noreferrer"> https://nesrinebekkar.com </a> {t('TextInfo.pT6')}.</p>
    <br />  

    <h4>5. {t('TextInfo.infoVI')}:</h4>

<p>{t('TextInfo.pT7')}</p>

    <br /> 
    <br /> 
    <br /> 
 </div>
    );
};

export default MentionsLegales;