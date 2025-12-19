import { useState } from "react";
import Joi from "joi";
import styles from "./ContactForm.module.scss";
import Button from "@/components/common/Button/Button";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    LastName: "",
    Mobile: "",
    email: "",
    Message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const schema = Joi.object({
    Name: Joi.string().min(2).required(),
    LastName: Joi.string().min(2).required(),
    Mobile: Joi.string().pattern(/^[0-9+\-()\s]{7,15}$/).required(),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    Message: Joi.string().min(5).max(500).required(),
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { error } = schema.validate(formData, { abortEarly: false });
    if (error) {
      const newErrors = {};
      error.details.forEach(
        (err) => (newErrors[err.path[0]] = err.message)
      );
      setErrors(newErrors);
      return;
    }

    // ✅ Google Forms payload
    const formDataToSend = new FormData();
    formDataToSend.append("entry.1261720761", formData.Name);
    formDataToSend.append("entry.936412452", formData.LastName);
    formDataToSend.append("entry.531441860", formData.Mobile);
    formDataToSend.append("entry.1367818115", formData.email);
    formDataToSend.append("entry.733222462", formData.Message);

    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSfVoZ4DlsKsEQ7aQq3Z5mvm5YSNL6KWR_P4_PEsK5Hg_UksFQ/formResponse",
      {
        method: "POST",
        mode: "no-cors",
        body: formDataToSend,
      }
    );

    setSubmitted(true);
    setFormData({
      Name: "",
      LastName: "",
      Mobile: "",
      email: "",
      Message: "",
    });
    setErrors({});
  };

  return (
    <div className={styles.infoWrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          name="Name"
          placeholder="Name"
          value={formData.Name}
          onChange={handleChange}
        />
        {errors.Name && <small>{errors.Name}</small>}

        <input
          name="LastName"
          placeholder="Lastname"
          value={formData.LastName}
          onChange={handleChange}
        />
        {errors.LastName && <small>{errors.LastName}</small>}

        <input
          name="Mobile"
          placeholder="Mobile"
          value={formData.Mobile}
          onChange={handleChange}
        />
        {errors.Mobile && <small>{errors.Mobile}</small>}

        <input
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <small>{errors.email}</small>}

        <textarea
          name="Message"
          placeholder="Message"
          rows="5"
          value={formData.Message}
          onChange={handleChange}
        />
        {errors.Message && <small>{errors.Message}</small>}

        {submitted && (
          <p className={styles.contact__successMessage}>
            Thank you! Your message has been sent.
          </p>
        )}

        <Button type="submit">Send</Button>
      </form>
    </div>
  );
};

export default ContactForm;





