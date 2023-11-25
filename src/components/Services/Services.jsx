import React from 'react';
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Service = () => {
    const { t } = useTranslation();
    useEffect(() => {
        AOS.init({ duration: 6000 });
      }, []);
    return (
        <div>
<section id="Service">
    <div id={t("service_id")} className="Service__Container">   
      <h2 className="serviceTitle"> {t("service_title")} </h2>
      <div className='serviceCard'>

  {services.map((service) => (
<figure className='Card'
key={service.id}
data-aos="flip-left"
data-aos-easing="ease-out-cubic"
data-aos-duration="2000"
>
<div className='Card'></div>    
<h3>{service.titile}</h3>
 </figure>
  ))}
      </div>
    </div>
 </section>
            
        </div>
    );
};

export default Service;