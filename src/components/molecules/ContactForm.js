import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";

const ContactForm = ({ data = {} }) => {
  const formLabels = data.contact?.form || {};
  const form = useRef();

  const [formValues, setFormValues] = useState({
    user_name: "",
    company_name: "",
    user_email: "",
    phone_number: "",
    message: "",
    attachment: null,
  });
  const [fileName, setFileName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [stateMessage, setStateMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormValues((prev) => ({ ...prev, attachment: file }));
    setFileName(file ? file.name : ""); // Clear fileName if no file selected
  };

  const validateForm = () => {
    const errors = [];
    if (!formValues.user_name.trim()) errors.push(formLabels.name);
    if (
      !formValues.user_email.trim() ||
      !/\S+@\S+\.\S+/.test(formValues.user_email)
    )
      errors.push(formLabels.email);
    if (!formValues.message.trim()) errors.push(formLabels.message);

    if (errors.length) {
      setStateMessage(
        `${formLabels.errors.mandatoryFields}: ${errors.join(", ")}`
      );
      return false;
    }
    return true;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setStateMessage("");

    try {
      await emailjs.sendForm(
        "service_5og20h5", // Replace with your EmailJS service ID
        "template_ryfkm2k", // Replace with your EmailJS template ID
        form.current,
        "tKy3UnH2drzeygQXA" // Replace with your EmailJS public key
      );
      setStateMessage(
        formLabels.successMessage || "Message sent successfully!"
      );
      setFormValues({
        user_name: "",
        company_name: "",
        user_email: "",
        phone_number: "",
        message: "",
        attachment: null,
      });
      setFileName("");
    } catch (error) {
      console.error("Error sending email:", error);
      setStateMessage(
        formLabels.errors.failedToSend || "Failed to send the message."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form-container">
      <form className="form" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          placeholder={`${formLabels.name}*`}
          className="input"
          name="user_name"
          value={formValues.user_name}
          onChange={handleInputChange}
          required
        />
        <input
          type="text"
          placeholder={formLabels.companyName}
          className="input"
          name="company_name"
          value={formValues.company_name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder={`${formLabels.email}*`}
          className="input"
          name="user_email"
          value={formValues.user_email}
          onChange={handleInputChange}
          required
        />
        <input
          type="tel"
          placeholder={formLabels.phoneNumber}
          className="input"
          name="phone_number"
          value={formValues.phone_number}
          onChange={handleInputChange}
        />
        <textarea
          placeholder={`${formLabels.message}*`}
          className="textarea full-width"
          name="message"
          value={formValues.message}
          onChange={handleInputChange}
          required
        ></textarea>
        <div className="file-upload-wrapper">
          <label htmlFor="file-upload" className="file-upload-label">
            {formLabels.chooseFile}
          </label>
          <input
            id="file-upload"
            type="file"
            className="file-input"
            name="attachment"
            onChange={handleFileChange}
          />
          <span className="file-upload-text">
            {fileName || formLabels.noFile || "No file chosen"}
          </span>
        </div>
        <button type="submit" className="submit-button" disabled={isSubmitting}>
          {isSubmitting ? formLabels.submitting : formLabels.button}
        </button>
      </form>
      {stateMessage && <p>{stateMessage}</p>}
    </div>
  );
};

export default ContactForm;
