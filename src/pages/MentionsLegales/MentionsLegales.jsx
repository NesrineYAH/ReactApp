import React from 'react';
import { useTranslation } from "react-i18next";

const MentionsLegales = () => {
  const { t } = useTranslation();
    return (
        <div id='mentionsLegales'>
          <h1 className='H1'>{t('TextInfo.info')}</h1> 
          <br />
        
<p>{t('TextInfo.p')}:</p>
<br />
 <h4>1. {t('TextInfo.info')}:</h4>

<p>{t('TextInfo.pI')}</p>
<p>{t('TextInfo.pII')}</p>
<p>{t('TextInfo.pIII')}</p>

<br />

<h4>2. {t('TextInfo.infoI')}:</h4>

<p> {t('TextInfo.prI')}:  <a href="https://nesrinebekkar.com" target="_blank" rel="noreferrer">nesrinebekkar.com  </a>  {t('TextInfo.prII')}</p>
<p>  {t('TextInfo.prIII')}  <a href="https://nesrinebekkar.com" target="_blank" rel="noreferrer">nesrinebekkar.com</a>  {t('TextInfo.prIIII')}</p>

<br />

<h4>3. {t('TextInfo.infoII')}:</h4>

 <p>{t('TextInfo.prIII')} <a href="https://nesrinebekkar.com" target="_blank" rel="noreferrer">nesrinebekkar.com</a>{t('TextInfo.pIIIII')}</p>
 <p>{t('TextInfo.prIII')}  <a href="https://nesrinebekkar.com" target="_blank" rel="noreferrer">nesrinebekkar.com</a>  se devouera à faire de son mieux pour rétablir l'accès au site suivant et s'efforcera alors d'informer au préalable aux
  utilisateurs Dates & heures de l'interruption. N'étant subordonné qu'à une obligation de moyen, <a href="https://nesrinebekkar.com" target="_blank" rel="noreferrer">nesrinebekkar.com</a> ne saurait être tenu comme responsable des dommages, peu importe la nature, résultant d'une indisponibilité du service.</p> 


  <br />
  <h4>4. {t('TextInfo.infoIII')}:</h4>
 <p> Nesrine BEKKAR YAHOUM est le propriétaire exclusif de tous les droits de propriété intellectuelle ou détient les droits d'usage sur l'intégralité des éléments accessibles sur le site web, tant sur la structure que sur les articles et textes, graphismes, icônes, bande sonore, logiciels…<br />
 Toute reproduction totale ou partielle du site <a href="https://nesrinebekkar.com" target="_blank" rel="noreferrer">nesrinebekkar.com</a>, affichage, edition, adaptation totale ou partielle de l'un de ces éléments, peu importe le  moyen ou le procédé utilisé, est interdite, sauf acceptation écrite préalable de Benjamin Leveque, propriétaire du site <a href="https://nesrinebekkar.com" target="_blank" rel="noreferrer">nesrinebekkar.com</a>. Dans le cas contraire elle sera considérée de la même manière qu'une contrefaçon et passible de poursuite d'après les dispositions des articles L.335-2 et suivants du Code de Propriété Intellectuelle.</p>
    <br />  

    <h4>5. Protection des biens et personnes - Utilisation des données personnelles :</h4>

<p>En France, les données personnelles sont par exemple protégées par la loi n° 78-87 du 6 janvier 1978 et la loi n° 2004-801 datant du 6 août 2004,
 l'article L. 226-13 du Code pénal et la Directive Européenne datant du 24 octobre 1995. </p>

    <br /> 
    <br /> 
    <br /> 
 </div>
    );
};

export default MentionsLegales;