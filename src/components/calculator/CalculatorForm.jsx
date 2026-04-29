import { useState } from "react";
import Joi from "joi";
import styles from "./Calculator.module.scss";
import Button from "@/components/common/Button/Button";

const CounterInput = ({ label, name, value, setFormData }) => {
  const increase = () => {
    setFormData((prev) => ({
      ...prev,
      [name]: Number(prev[name]) + 1,
    }));
  };

  const decrease = () => {
    setFormData((prev) => ({
      ...prev,
      [name]: Number(prev[name]) > 0 ? Number(prev[name]) - 1 : 0,
    }));
  };

  return (
    <div className={styles.counterGroup}>
      <label>{label}</label>

      <div className={styles.counter}>
        <button type="button" onClick={decrease}>
          -
        </button>

        <span>{value}</span>

        <button type="button" onClick={increase}>
          +
        </button>
      </div>
    </div>
  );
};

const CalculatorForm = () => {
  const [formData, setFormData] = useState({
    Name: "",
    LastName: "",
    Mobile: "",
    email: "",
    Address: "",
    Suburb: "",
    Area: "",
    Rooms: 0,
    Bathrooms: 0,
    Kitchens: 0,
    Dining: 0,
    Living: 0,
    Balconies: 0,
    Garages: 0,
    Ovens: 0,
    Staircases: 0,
    Fridges: 0,
    Others: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const schema = Joi.object({
    Name: Joi.string().min(2).required(),
    LastName: Joi.string().min(2).required(),
    Mobile: Joi.string().pattern(/^[0-9+\-()\s]{7,15}$/).required(),
    email: Joi.string().email({ tlds: { allow: false } }).required(),
    Address: Joi.string().min(2).required(),
    Suburb: Joi.string().min(2).required(),
    Area: Joi.number().min(2).required(),
    Rooms: Joi.number().min(0).required(),
    Bathrooms: Joi.number().min(0).required(),
    Kitchens: Joi.number().min(0).required(),
    Dining: Joi.number().min(0).required(),
    Living: Joi.number().min(0).required(),
    Balconies: Joi.number().min(0).required(),
    Garages: Joi.number().min(0).required(),
    Ovens: Joi.number().min(0).required(),
    Staircases: Joi.number().min(0).required(),
    Fridges: Joi.number().min(0).required(),
    Others: Joi.string().allow("").optional(),
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataToValidate = {
      ...formData,
      Area: Number(formData.Area),
    };

    const { error } = schema.validate(dataToValidate, {
      abortEarly: false,
    });

    if (error) {
      const newErrors = {};
      error.details.forEach((err) => {
        newErrors[err.path[0]] = err.message;
      });
      setErrors(newErrors);
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("entry.858082033", formData.Name);
    formDataToSend.append("entry.606358454", formData.LastName);
    formDataToSend.append("entry.1312283038", formData.Mobile);
    formDataToSend.append("entry.894478258", formData.email);

    formDataToSend.append("entry.1053560177", formData.Address);
    formDataToSend.append("entry.380256653", formData.Suburb);
    formDataToSend.append("entry.1801684072", formData.Area);
    formDataToSend.append("entry.1343483356", formData.Rooms);
    formDataToSend.append("entry.1259806521", formData.Bathrooms);
    formDataToSend.append("entry.1645907636", formData.Kitchens);
    formDataToSend.append("entry.107788615", formData.Dining);
    formDataToSend.append("entry.1191623128", formData.Living);
    formDataToSend.append("entry.763028932", formData.Balconies);
    formDataToSend.append("entry.996555557", formData.Garages);
    formDataToSend.append("entry.1524206728", formData.Ovens);
    formDataToSend.append("entry.1687195953", formData.Staircases);
    formDataToSend.append("entry.1922917361", formData.Fridges);
    formDataToSend.append("entry.1351082343", formData.Others);

    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLSdqOJ_6RUGhN1XgKy_7mzB9Kc-np_luFFgqBWcAsDZbLzcTDw/formResponse",
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
      Address: "",
      Suburb: "",
      Area: "",
      Rooms: 0,
      Bathrooms: 0,
      Kitchens: 0,
      Dining: 0,
      Living: 0,
      Balconies: 0,
      Garages: 0,
      Ovens: 0,
      Staircases: 0,
      Fridges: 0,
      Others: "",
    });

    setErrors({});
  };

  return (
    <div className={styles.infoWrapper}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.leftColumn}>
          <h3 className={styles.sectionTitle}>Your Details</h3>

          <p className={styles.sectionSubtitle}>
            Tell us how we can contact you
          </p>

          <input
            name="Name"
            placeholder="Name"
            value={formData.Name}
            onChange={handleChange}
          />
          {errors.Name && <small>{errors.Name}</small>}

          <input
            name="LastName"
            placeholder="Last name"
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

          <input
            name="Address"
            placeholder="Address"
            value={formData.Address}
            onChange={handleChange}
          />
          {errors.Address && <small>{errors.Address}</small>}

          <input
            name="Suburb"
            placeholder="Suburb"
            value={formData.Suburb}
            onChange={handleChange}
          />
          {errors.Suburb && <small>{errors.Suburb}</small>}

          <input
            name="Area"
            type="number"
            placeholder="Area (sqm)"
            value={formData.Area}
            onChange={handleChange}
          />
          {errors.Area && <small>{errors.Area}</small>}
        </div>

        <div className={styles.rightColumn}>
          <h3 className={styles.sectionTitle}>Property Details</h3>

          <p className={styles.sectionSubtitle}>
            Select the size of your property
          </p>

          <div className={styles.counterGrid}>

          <CounterInput
            label="Rooms"
            name="Rooms"
            value={formData.Rooms}
            setFormData={setFormData}
          />
          {errors.Rooms && <small>{errors.Rooms}</small>}

          <CounterInput
            label="Bathrooms"
            name="Bathrooms"
            value={formData.Bathrooms}
            setFormData={setFormData}
          />
          {errors.Bathrooms && <small>{errors.Bathrooms}</small>}

          <CounterInput
            label="Kitchens"
            name="Kitchens"
            value={formData.Kitchens}
            setFormData={setFormData}
          />
          {errors.Kitchens && <small>{errors.Kitchens}</small>}

          <CounterInput
            label="Dining Areas"
            name="Dining"
            value={formData.Dining}
            setFormData={setFormData}
          />
          {errors.Dining && <small>{errors.Dining}</small>}

          <CounterInput
            label="Living Areas"
            name="Living"
            value={formData.Living}
            setFormData={setFormData}
          />
          {errors.Living && <small>{errors.Living}</small>}

          <CounterInput
            label="Balconies"
            name="Balconies"
            value={formData.Balconies}
            setFormData={setFormData}
          />
          {errors.Balconies && <small>{errors.Balconies}</small>}

          <CounterInput
            label="Garages"
            name="Garages"
            value={formData.Garages}
            setFormData={setFormData}
          />
          {errors.Garages && <small>{errors.Garages}</small>}

          <CounterInput
            label="Ovens"
            name="Ovens"
            value={formData.Ovens}
            setFormData={setFormData}
          />
          {errors.Ovens && <small>{errors.Ovens}</small>}

          <CounterInput
            label="Staircases"
            name="Staircases"
            value={formData.Staircases}
            setFormData={setFormData}
          />
          {errors.Staircases && <small>{errors.Staircases}</small>}

          <CounterInput
            label="Fridges"
            name="Fridges"
            value={formData.Fridges}
            setFormData={setFormData}
          />
          {errors.Fridges && <small>{errors.Fridges}</small>}

          </div>

          <textarea
            name="Others"
            placeholder="Other details (optional)"
            rows="5"
            value={formData.Others}
            onChange={handleChange}
          />
          {errors.Others && <small>{errors.Others}</small>}
        </div>

        {submitted && (
          <p className={styles.contact__successMessage}>
            Thank you! Your information has been submitted. Our team will
            contact you in less than 24 hours.
          </p>
        )}

        <div className={styles.buttonWrapper}>
          <Button type="submit">Get My Quote</Button>
        </div>
      </form>
    </div>
  );
};

export default CalculatorForm;