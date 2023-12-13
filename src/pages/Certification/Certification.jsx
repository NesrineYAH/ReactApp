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
    const requete = await fetch("../jsons/Certifications.json", {
        method:"GET",
    })
    if (requete.ok) {
        const response = await requete.json();
        setCertifications(response);
    }
        } catch (e) {
            console.log(e);
        }
    };
    fetchCertifications();
}, [])

    return (
        <section id="certifications">
        <div className='certifications__Container'>
            <h2 className='certifications__Title'></h2>
        {certifications.map((certifications) => (
           <div id="certifications.id">   
        <div className='certifications__card'>
            <img src={certifications.image} alt={certifications.alt} className='certifications__card__img' />
            <h3 className='certifications__card__h3'></h3>
         </div>
        </div>
        ))}    

        </div>
        </section>
    );
};

export default Certification;