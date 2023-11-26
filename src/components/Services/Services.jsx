import React from 'react';
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
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
    AOS.init({ duration: 6000 });
  }, []);
  return (

    <section id="Service">
               <h2 className="serviceTitle"> {t("service_title")} </h2>
      {services.map((service) => (

        <div id={t("service_id")} className="Service__Container">
     
          <div className='serviceCard'>
          <h3>{service.titile}</h3>
                <figure className='Card'
                key={service.id}
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                >     
           </figure>

          </div>
        </div>
      ))
      }
    </section>


  );
};

export default Service;