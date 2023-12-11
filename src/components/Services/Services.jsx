import React from 'react';
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";


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
          console.log(response);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchServices();
  }, []);
  useEffect(() => {
    AOS.init({ duration: 5000 });
  }, []);

  return (
    <section id="Services">
       <div className="Service__Container">
        <h2 className="titlePortfolio"> {t("service_title")} </h2>
      {services.map((service) => (       
    
       <div id={("service.id")} >
          <figure className='serviceCard' key={service.id}
            data-aos="zoom-in-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
          <img className='serviceCard__img' src={service.image} alt ={service.alt} />
       {/*  <img className='Img' src={service.icon} /> */} 
          <h3 className='serviceCard__title' >{t(service.title)}</h3>
          <p className='serviceCard__prg'>{t(service.description)}</p>    
          </figure>
       </div>
      ))
       }  
     </div>     
    </section>
  );
};

export default Services;