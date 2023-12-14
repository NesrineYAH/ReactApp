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

    return (
        <section id="certifications">
            <h3 className='certifications__Title'>Mes certifications</h3>



        <div className='Container'>
        {certifications.map((certification) => (
           // <div id={("certification.id")} className='Container__dd'>   
        <figure className='Container__card'  key={certification.id}>
            <img src={certification.image} alt={certification.alt} className='Container__card__img' />
            <div className='overly'>
             <a href={certification.document} target=  "_blank"  rel="noopener noreferrer"  className='Container__card__doc'> 
            {/* <a href={certification.document} data-toggle="modal" target={certification.document}> */}

            <h4 className='Container__card__h4'>{certification.title}</h4>
            </a>
            </div>
          </figure>    
      // </div>
      
        ))}    

        </div>
        </section>
    );
};

export default Certification;

        
        