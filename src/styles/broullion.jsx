// import React, { useRef } from "react";
// import { useTranslation } from "react-i18next";
// import { useEffect, useState } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import emailjs from "@emailjs/browser";
// import { IoMail } from "react-icons/io5";
// import { FaPhoneFlip  } from "react-icons/fa6";
// import { IoLocationSharp } from "react-icons/io5";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
// import SocialMedia from '../socialMedia/socialMedia';

// const Contact = () => {
//   const lang = localStorage.getItem("i18nextLang");
//   const { t } = useTranslation();
//   const form =useRef();

  
//   useEffect(() => {
//     AOS.init({ duration: 6000 });
//   }, []);

 
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//   });
//   const [errors, setErrors] = useState({
//     name: '',
//     email: '',
//   });

//   const validateForm = () => {
//     const nameRegex = /^[a-zA-Z ]+$/;
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
//     let isValid = true;
//     const newErrors = { name: '', email: ''};

//     // Validate name
//     if (!nameRegex.test(formData.name)) {
//       newErrors.name = 'Le nom ne doit contenir que des lettres et des espaces.';
//       isValid = false;
//     }

//     // Validate email
//     if (!emailRegex.test(formData.email)) {
//       newErrors.email = 'Veuillez saisir une adresse e-mail valide.';
//       isValid = false;
//     }
//     setErrors(newErrors);
//     return isValid;
//   };

//   const SendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//     .sendForm("service_qb61wt1", "template_uvl35a8", form.current,"fDUMt5JDlc0iHfBWb")
//     .then(
//       (result) => {
//         alert(`${form.current.user_name.value} ${t("email_envoyer")}`);
//         console.log(result.text);
//          // delet  inputs
//         form.current.user_name.value = "";
//         form.current.user_name.value = "";
//         form.current.user_email.value = "";
//         form.current.message.value = "";
  
//       },
//       (error) => {
//         console.log(error.text);
//       }
//     );
//     if (validateForm()) {
//       // Envoyer les données du formulaire
//       console.log('Formulaire valide, soumission des données :', formData);
//       // Ajoutez ici le code pour envoyer les données du formulaire à votre backend ou effectuer d'autres actions.
//     } else {
//       console.log('Le formulaire contient des erreurs. Veuillez le corriger.');
//     }
//   };
//    const handleChange = (e) => {
//     const { name, value } = e.target;
//    setFormData({ ...formData, [name]: value });
//  };

//   return (
//     <section id={t("contact_id")}  className= "contact" itemScope itemType="http://schema.org/Person">
//       <h2 className='titlePortfolio'>{t("contact_title")}</h2>

//       <div style={{ flexDirection: lang === "ar" ? "row" : "row-reverse" }}  className=" contact-wrapper" >
     
//       <form ref={form} onSubmit={SendEmail}  className="form-horizontal" 
//       data-aos= "zoom-in-up"  
//       style={{ direction: lang === "ar" ? "rtl" : "ltr" }}>

      
//         <label htmlFor="lastName">{t("lastName")}</label>
//         <input 
//         style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
//         type="text"
//          name="user_name"
//          placeholder={t("lastName")} id="name"   required  />
//         <div className="error">{errors.name}</div>  

//         <label htmlFor="firstName">{t("firstName")}</label>
//         <input
//          style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
//         type="text" name="user_name" className="form-control" placeholder={t("firstName")} id="name" required />
//         <div className="error">{errors.name}</div> 

//        <label htmlFor="email">{t("Email")}</label>
//        <input style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
//        type="email" id="email" name="user_email" className="form-control"  placeholder={t("Email")}   required />
//         <div className="error">{errors.email}</div> 

//      <label htmlFor="message">{t("Message")}</label>
//      <textarea 
//      style={{ direction: lang === "ar" ?  "rtl": "ltr" }}
//        name="message" id="message" className="form-control" placeholder={t("Message")} rows="10" required    />
    
//       <input   
//       style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
//       type="submit" value={t("Send")} className="send-text" />
 
//       </form> 

//       <div className='contactList__conatiner' data-aos="zoom-in-up">
//         <ul className="contactList">  
//           <li className="contactList__item">    
//         <FaPhoneFlip className ="contactList__i" />
//           <span className="contactList__span phone">
//           <a itemProp="telephone" href="00769551422" className="contactList__a">
//             (33) 7 69 55 14 22
//           </a>
//           </span>
//           </li>

//           <li className="contactList__item">  
//           <IoMail className="contactList__i Noc" />
//           <span className="contact-text gmail">
//           <a itemProp="email" href="mailto:nesrineyahoum@gmail.com" className="contactList__a">
//           nesrineyahoum@gmail.com
//           </a>
//           </span>
//           </li>

//           <li className="contactList__item">

//               <FontAwesomeIcon icon={faLocationDot}  className="loc" />
//               <span itemProp="location" className="contactList__sapn place">
//                  Paris, ile de France
//               </span>
//           </li> 
//         </ul>
//         <SocialMedia className="sm"/>
//       </div>
//       </div>
  
  
//     </section>
//   );
// };


// export default Contact;

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./style.min.css";
import SocialMedia from "../../components/socialMedia";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Contact = () => {
  const lang = localStorage.getItem("i18nextLng");
  const { t } = useTranslation();
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ftu8pss",
        "template_8chj4e7",
        form.current,
        "UBZTusyE5gpEpliK1"
      )
      .then(
        (result) => {
          alert(` ${form.current.user_name.value} ${t("email_envoyer")} `);
          console.log(result.text);
          // delet  inputs
          form.current.user_name.value = "";
          form.current.user_email.value = "";
          form.current.message.value = "";
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section
      id={t("contact_id")}
      className=" contact"
      itemScope
      itemType="http://schema.org/Person">
    
      <h1 className="title">{t("contact_title")}</h1>

      <div
        style={{ flexDirection: lang === "ar" ? "row" : "row-reverse" }}
        className=" contact-wrapper">
     
        <form
          ref={form}
          onSubmit={sendEmail}
          className="form-horizontal"
          data-aos="zoom-in-up"
          style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
        >
          <label htmlFor="name">{t("Name")}</label>
          <input
            style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
            type="text"
            name="user_name"
            className="form-control"
            placeholder={t("Name")}
            id="name"
            required
          />

          <label htmlFor="email">{t("Email")}</label>
          <input
            style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
            type="email"
            id="email"
            name="user_email"
            className="form-control"
            placeholder={t("Email")}
            required
          />
          <label htmlFor="message">{t("Message")}</label>
          <textarea
            style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
            name="message"
            id="message"
            className="form-control"
            placeholder={t("Message")}
            rows="10"
            required
          />

          <input type="submit" value={t("Send")} className="send-text" />
        </form>

        <div className="direct-contact-container" data-aos="zoom-in-up">
          <ul className="contact-list">
            <li className="list-item">
              <i className="fa fa-map-marker fa-2x"></i>
              <span itemProp="location" className="contact-text place">
                Ile de France , Paris
              </span>
            </li>

            <li className="list-item">
              <i className="fa fa-phone fa-2x"></i>
              <span className="contact-text phone">
                <a itemProp="telephone" href="tel:0033612218389">
                  (33) 6 12 21 83 89
                </a>
              </span>
            </li>

            <li className="list-item">
              <i className="fa fa-envelope fa-2x"></i>
              <span className="contact-text gmail">
                <a itemProp="email" href="mailto:Imaniman4848@gmail.com">
                  Imaniman4848@gmail.com
                </a>
              </span>
            </li>
          </ul>

          <SocialMedia />
        </div>
      </div>
    </section>
  );
};
export default Contact;









