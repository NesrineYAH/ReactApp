/*import React, { useState } from "react";
//const regexName = new RegExp(/^[a-zA-ZÀ-ÿ]{2,35}([-' ,][a-zA-ZÀ-ÿ]+)*$/i);

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const validateForm = () => {
    const nameRegex = /^[a-zA-Z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    let isValid = true;
    const newErrors = { name: "", email: "", phoneNumber: "" };

    // Validate name
    if (!nameRegex.test(formData.name)) {
      newErrors.name =
        "Le nom ne doit contenir que des lettres et des espaces.";
      isValid = false;
    }

    // Validate email
    if (!emailRegex.test(formData.email)) {
      newErrors.email = "Veuillez saisir une adresse e-mail valide.";
      isValid = false;
    }

    // Validate phone number
    if (!phoneRegex.test(formData.phoneNumber)) {
      newErrors.phoneNumber =
        "Le numéro de téléphone doit contenir 10 chiffres.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Envoyer les données du formulaire
      console.log("Formulaire valide, soumission des données :", formData);
      // Ajoutez ici le code pour envoyer les données du formulaire à votre backend ou effectuer d'autres actions.
    } else {
      console.log("Le formulaire contient des erreurs. Veuillez le corriger.");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nom :</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <div className="error">{errors.name}</div>
      </div>

      <div>
        <label>Email :</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <div className="error">{errors.email}</div>
      </div>

      <div>
        <label>Numéro de téléphone :</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <div className="error">{errors.phoneNumber}</div>
      </div>

      <button type="submit">Envoyer</button>
    </form>
  );
};

export default ContactForm;
*/
