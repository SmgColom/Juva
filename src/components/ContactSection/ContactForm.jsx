  import { useState } from "react";
  import Joi from "joi";
  import styles from "./ContactForm.module.scss";
  import Button from '@/components/common/Button/Button';

  const ContactForm = () => {
    const [formData, setFormData] = useState({ Name: "", LastName: "", Mobile: "", email: "", Message: "" });
    const [errors, setErrors] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const schema = Joi.object({
      Name: Joi.string().min(2).required().messages({
        "string.empty": "Name is required.",
        "string.min": "The name must be at least 2 characters long.",
      }),
      LastName: Joi.string().min(2).required().messages({
        "string.empty": "Last name is required.",
        "string.min": "The last name must be at least 2 characters long.",
      }),
      Mobile: Joi.string().pattern(/^[0-9+\-()\s]{7,15}$/).required().messages({
        "string.empty": "Mobile is required.",
        "string.pattern.base": "Enter a valid mobile phone number.",
      }),
      email: Joi.string().email({ tlds: { allow: false } }).required().messages({
        "string.empty": "Email is required.",
        "string.email": "Enter a valid email",
      }),
      Message: Joi.string().min(5).max(500).required().messages({
        "string.empty": "The message is required",
        "string.min": "Message must be at least 5 characters long.",
        "string.max": "Maximum 500 characters.",
      }),
    });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
      e.preventDefault();
      const { error } = schema.validate(formData, { abortEarly: false });
      if (error) {
        const newErrors = {};
        error.details.forEach(err => newErrors[err.path[0]] = err.message);
        setErrors(newErrors);
        return;
      }

      // Enviar a Google Forms
const formDataToSend = new FormData();
formDataToSend.append("entry.2137210133", formData.Nombre);
formDataToSend.append("entry.85802793", formData.Apellido);
formDataToSend.append("entry.1410648333", formData.Celular);
formDataToSend.append("entry.967153321", formData.email);
formDataToSend.append("entry.896293727", formData.Mensaje);
     // Reemplaza la URL con la de tu formulario (vista pública)
fetch("https://docs.google.com/forms/d/e/1FAIpQLSflq8LwsEpjMXZxpXzWzJqTC3BQSiJLKxA_shtjebM87QPiCA/formResponse", {
  method: "POST",
  mode: "no-cors",
  body: formDataToSend,
});
setSubmitted(true);
setFormData({ Name: "", LastName: "", Mobile: "", email: "", Message: "" });
setErrors({});
    };

    return (
      <div className={styles.infoWrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input name="Name" placeholder="Name" value={formData.Name} onChange={handleChange} />
          {errors.Name && <small>{errors.Name}</small>}

          <input name="Lastname" placeholder="Lastname" value={formData.Lastname} onChange={handleChange} />
          {errors.Lastname && <small>{errors.Lastname}</small>}

          <input name="Mobile" placeholder="Mobile" value={formData.Mobile} onChange={handleChange} />
          {errors.Mobile && <small>{errors.Mobile}</small>}

          <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
          {errors.email && <small>{errors.email}</small>}

          <textarea name="Message" placeholder="Message" rows="5" value={formData.Message} onChange={handleChange} />
          {errors.Message && <small>{errors.Message}</small>}

          {submitted && <p className={styles.contact__successMessage}>¡Thank you! Your message was delivered.</p>}
          <Button type="submit">Send</Button>
        </form>
        
      </div>
      
    );
  };

  export default ContactForm;




