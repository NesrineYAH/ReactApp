import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";
import { IoMail } from "react-icons/io5";
import { FaPhoneFlip  } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from '../socialMedia/socialMedia';


const Contact = () => {
  const lang = localStorage.getItem("i18nextLang");
  const { t } = useTranslation();
  const formRef = useRef();

  const [formData, setFormData] = useState({
    last_name: "",
    first_name: "",
    user_email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    last_name: "",
    first_name: "",
    user_email: "",
    message: "",
  });

  useEffect(() => {
    AOS.init({ duration: 6000 });
  }, []);

  const validateForm = () => {
    const nameRegex = /^[a-zA-Z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let isValid = true;
    const newErrors = { last_name: "", first_name: "", user_email: "", message: "" };

    // Validate last name
    if (!nameRegex.test(formData.last_name)) {
      newErrors.last_name = "Le nom ne doit contenir que des lettres et des espaces.";
      isValid = false;
    }

    // Validate first name
    if (!nameRegex.test(formData.first_name)) {
      newErrors.first_name = "Le prénom ne doit contenir que des lettres et des espaces.";
      isValid = false;
    }

    // Validate email
    if (!emailRegex.test(formData.user_email)) {
      newErrors.user_email = "Veuillez saisir une adresse e-mail valide.";
      isValid = false;
    }

    // Validate message
    if (formData.message.trim() === "") {
      newErrors.message = "Veuillez saisir un message.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      emailjs
        .sendForm("service_qb61wt1", "template_uvl35a8", formRef.current, "fDUMt5JDlc0iHfBWb")
        .then(
          (result) => {
            alert(`${formData.first_name} ${t("email_envoyer")}`);
            console.log(result.text);
            // Clear form inputs
            setFormData({ last_name: "", first_name: "", user_email: "", message: "" });
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      alert("Le formulaire contient des erreurs. Veuillez le corriger.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <section id={t("contact_id")} className="contact" itemScope itemType="http://schema.org/Person">
      <h2 className="titlePortfolio">{t("contact_title")}</h2>

      <div
       style={{ flexDirection: lang === "ar" ? "row" : "row-reverse" }}
        className=" contact-wrapper">

        <form 
         ref={formRef}             
          onSubmit={handleSubmit}
          className="form-horizontal"
          data-aos="zoom-in-up"  
         style={{ direction: lang === "ar" ?  "rtl" : "ltr" }}  
          >
      
          <label htmlFor="last_name">{t("lastName")}</label>
          <input
           style={{
            direction: lang === "ar" ?  "rtl" : "ltr" ,
            borderColor: errors.last_name ? "red" : "initial",
          }}
            type="text"
            name="last_name"
            value={formData.last_name}
            onChange={handleChange}
            className="form-control"
            placeholder={t("lastName")}
            id="last_name"
            required
          />         
          <div className="error">{errors.last_name}</div>
          
          
          <label htmlFor="first_name">{t("firstName")}</label>
          <input
             style={{
              direction: lang === "ar" ?  "rtl" : "ltr" ,
              borderColor: errors.first_name ? "red" : "initial",
            }}
            type="text"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className="form-control"
            placeholder={t("firstName")}
            id="first_name"
            required
          />
          <div className="error">{errors.first_name}</div>

          <label htmlFor="user_email">{t("Email")}</label>
          <input
            style={{
              direction: lang === "ar" ?  "rtl" : "ltr" ,
              borderColor: errors.user_email ? "red" : "initial",
            }}
            type="email"
            id="user_email"
            name="user_email"
            value={formData.user_email}
            onChange={handleChange}
            className="form-control"
            placeholder={t("Email")}
            required  
          />         
          <div className="error">{errors.user_email}</div>

          <label htmlFor="message">{t("Message")}</label>
          <textarea
            style={{
              direction: lang === "ar" ?  "rtl" : "ltr" ,
              borderColor: errors.message ? "red" : "initial",}}
            name="message"
            id="message"
            value={formData.message}
            onChange={handleChange}
            className="form-control"
            placeholder={t("Message")}
            rows="10"
            required
          />
          <div className="error">{errors.message}</div>

          <input type="submit" value={t("Send")} className="send-text" />
        </form>

        <div className="contactList__conatiner" data-aos="zoom-in-up">
          <ul className="contactList">
            <li className="contactList__item">
              <FaPhoneFlip className="contactList__i" />
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
              <FontAwesomeIcon icon={faLocationDot} className="loc" />
              <span itemProp="location" className="contactList__sapn place">
                Paris, ile de France
              </span>
            </li>
          </ul>
          <SocialMedia className="sm" />
        </div>
      </div>
    </section>
      );
};
    export default Contact;