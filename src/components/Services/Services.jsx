import React from 'react';
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";


const Services = () => {
  const { t } = useTranslation();
  const [services, setServices] = useState([]);
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const requete = await fetch("../../jsons/service.json", {
          method: "GET",
        });
        if (requete.ok) {
          const response = await requete.json();
          setServices(response);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchServices();
  }, []);

  return (
    <section id="Services">
       <div id={t("service_id")} className="Service__Container">
        <h2 className="titlePortfolio"> {t("service_title")} </h2>
      {services.map((service) => (          
          <figure key={service.id} className='serviceCard' >
          <img className='serviceCard__img' src={service.image} alt ={service.alt} />
          <h3 className='serviceCard__title' >{t(service.title)}</h3>
          <p className='serviceCard__prg'>{t(service.description)}</p>    
          </figure>
      ))
       }  
     </div>     
    </section>
  );
};

export default Services;