import React, { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import '../../i18n';
import { IoArrowBackOutline } from "react-icons/io5";
import { useParams } from 'react-router-dom';

const Certification = () => {
    const lang = localStorage.getItem("i18nextLang");
    const { id } = useParams();
    const [certifications, setCertifications] = useState([]);
    const [error, setError] = useState(false);

useEffect(()=> {
    const fetchCertifications = async () => {
        try {
    const requete = await fetch("../jsons/Certification.json", {
        method:"GET",
    })
    if (requete.ok) {
        const response = await requete.json();
        setCertifications(response);
        console.log(response);
    }
        } catch (e) {
            console.log(e);
        }
    };
    fetchCertifications();
}, [])
const { t } = useTranslation();
    return (
        // style={{ direction: lang === "ar" ? "rtl" : "ltr", marginRight:'2%'}}
        <section id="certifications">
            <h3 className='certifications__Title'>{t('rotate')}</h3>


        <div className='Container'>
        {certifications.map((certification) => (
     
        <figure className='Container__card'  key={certification.id}>
            <img src={certification.image} alt={certification.alt} className='Container__card__img' />
            <div className='overly' key={certification.id}>
             <a href={certification.document} target=  "_blank"  rel="noopener noreferrer"  className='Container__card__doc'> 
            <h4 className='Container__card__h4'>{certification.title}</h4>
            </a>
            </div>
          </figure>    

      
        ))}    

        </div>
        </section>
    );
};

export default Certification;

        
        