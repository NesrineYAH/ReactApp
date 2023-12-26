import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import { IoMail } from "react-icons/io5";
import { FaPhoneFlip  } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from '../socialMedia/socialMedia';

const Contact = () => {
  const lang = localStorage.getItem("i18nextLang");
  const { t } = useTranslation();
  const form =useRef();

  
  useEffect(() => {
    AOS.init({ duration: 6000 });
  }, []);

 
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
  });

  const validateForm = () => {
    const nameRegex = /^[a-zA-Z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
    let isValid = true;
    const newErrors = { name: '', email: ''};

    // Validate name
    if (!nameRegex.test(formData.name)) {
      newErrors.name = 'Le nom ne doit contenir que des lettres et des espaces.';
      isValid = false;
    }

    // Validate email
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Veuillez saisir une adresse e-mail valide.';
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const SendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm("service_qb61wt1", "template_uvl35a8", form.current,"fDUMt5JDlc0iHfBWb")
    .then(
      (result) => {
        alert(`${form.current.user_name.value} ${t("email_envoyer")}`);
        console.log(result.text);
         // delet  inputs
        form.current.user_name.value = "";
        form.current.user_name.value = "";
        form.current.user_email.value = "";
        form.current.message.value = "";
  
      },
      (error) => {
        console.log(error.text);
      }
    );
    if (validateForm()) {
      // Envoyer les données du formulaire
      console.log('Formulaire valide, soumission des données :', formData);
      // Ajoutez ici le code pour envoyer les données du formulaire à votre backend ou effectuer d'autres actions.
    } else {
      console.log('Le formulaire contient des erreurs. Veuillez le corriger.');
    }
  };
   const handleChange = (e) => {
    const { name, value } = e.target;
   setFormData({ ...formData, [name]: value });
 };

  return (
    <section id={t("contact_id")}  className= "contact" itemScope itemType="http://schema.org/Person">
      <h2 className='titlePortfolio'>{t("contact_title")}</h2>

      <div style={{ flexDirection: lang === "ar" ? "row" : "row-reverse" }}  className=" contact-wrapper" >
     
      <form ref={form} onSubmit={SendEmail}  className="form-horizontal" 
      data-aos= "zoom-in-up"  style={{ direction: lang === "ar" ? "rtl": "ltr" }}>
        
        <lable htmlFor="lastName">{t("lastName")}</lable>
        <input type="text" name="user_name" className="form-control" placeholder={t("lastName")} id="name"   required  />
        <div className="error">{errors.name}</div>  

        <lable htmlFor="FirstName">{t("firstName")}</lable>
        <input type="text" name="user_name" className="form-control" placeholder={t("firstName")} id="name" required/>
          <div className="error">{errors.name}</div> 

       <label htmlFor="email">{t("Email")}</label>
       <input type="email" id="email" name="user_email" className="form-control"  placeholder={t("Email")}   required />
        <div className="error">{errors.email}</div> 
      
       <lable htmlFor="message">{t("Message")}</lable>
       <textarea style={{ direction: lang === "ar" ?  "rtl": "ltr" }}
       name="message" id="message" className="form-control" placeholder={t("Message")} rows="10"   required >
       </textarea>
      <input type="submit" value={t("Send")} className="send-text" />
      </form> 

      <div className='contactList__conatiner' data-aos="zoom-in-up">
        <ul className="contactList">  
          <li className="contactList__item">    
        <FaPhoneFlip className ="contactList__i" />
          <span className="contactList__span phone">
          <a itemProp="telephone" href="00769551422" className="contactList__a">
            (33) 7 69 55 14 22
          </a>
          </span>
          </li>

          <li className="contactList__item">  
          <IoMail className="contactList__i Noc" />
          <span className="contact-text gmail">
          <a itemProp="email" href="mailto:nesrineyahoum@gmail.com" className="contactList__a">
          nesrineyahoum@gmail.com
          </a>
          </span>
          </li>

          <li className="contactList__item">

              <FontAwesomeIcon icon={faLocationDot}  className="loc" />
              <span itemProp="location" className="contactList__sapn place">
                 Paris, ile de France
              </span>
          </li> 
        </ul>
        <SocialMedia className="sm"/>
      </div>
      </div>
  
    <div>
    </div>
    </section>
  );
};

export default Contact;
