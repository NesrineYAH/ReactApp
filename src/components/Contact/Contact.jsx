import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
//import Boutton from "../Bouttons/Boutton";
import { IoMail } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { regexName } from "../../regex.js";
import SocialMedia from '../socialMedia/socialMedia';

const Contact = () => {
  const lang = localStorage.getItem("i18nextLang");
  const { t } = useTranslation();
  const form =useRef();


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
        form.reset();
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  useEffect(() => {
    AOS.init({ duration: 6000 });
  }, []);

// a revenir pour éxcuter les expression régulière 

  const [firstName, setFirstName] = useState("");
const nameValidation =() => {

  if (regexName.test(firstName)) {
   setFirstName("Nom est valide");
  } else if (!regexName.test(firstName)){;
  setFirstName("Nom est n'est pas valide");
  } else {
    setFirstName("");
  }
};

  return (
    <section id={t("contact_id")}  className= "contact" itemScope itemType="http://schema.org/Person">
      <h1 className='titleContact'>{t("contact_title")}</h1>
      <div
        style={{ flexDirection: lang === "ar" ? "row" : "row-reverse" }}
        className=" contact-wrapper"
      >
      <form ref={form} onSubmit={SendEmail} 
      className="form-horizontal" 
      data-aos= "zoom-in-up"
      style={{ direction: lang === "ar" ? "rtl": "ltr" }}
      >
        <lable htmlFor="lastName">{t("lastName")}</lable>
        <input style={{ direction : lang === "ar" ? "rtl" : "ltr" }}
        type="text" name="user_name" className="form-control" placeholder={t("lastName")}
        id="name"
        required
       />
        <lable htmlFor="FirstName">{t("firstName")}</lable>
        <input style={{ direction : lang === "ar" ? "rtl" : "ltr" }}
        type="text" name="user_name" className="form-control" placeholder={t("firstName")}
        id="name"
        required
       />
       <label htmlFor="email">{t("Email")}</label>
       <input 
       style={{ direction: lang === "ar" ?  "rtl": "ltr" }}
       type="email" id="email" name="user_email" className="form-control" 
       placeholder={t("Email")}
       required
       />
       <lable htmlFor="message">{t("Message")}</lable>
       <textarea style={{ direction: lang === "ar" ?  "rtl": "ltr" }}
       name="message" id="message" className="form-control" placeholder={t("Message")} rows="10"
       required
       >
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
          <IoMail className="contactList__i" />
          <span className="contact-text gmail">
          <a itemProp="email" href="mailto:nesrineyahoum@gmail.com" className="contactList__a">
          nesrineyahoum@gmail.com
          </a>
          </span>
          </li>

          <li className="contactList__item">
              <IoLocationSharp className="loc" /> 
              <span itemProp="location" className="contactList__sapn place">
                 Paris, ile de France
              </span>
          </li> 
        </ul>
        <SocialMedia />
      </div>
      </div>
  
    <div>
    </div>
    </section>
  );
};

export default Contact;
