import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = ({ data }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateMessage, setStateMessage] = useState(null);
    const [formValues, setFormValues] = useState({
        user_name: "",
        user_email: "",
        message: ""
    });
    const form = useRef();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const validateEmail = (email) => {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    };

    const validateForm = () => {
        const { user_name, user_email, message } = formValues;
        if (!user_name.trim() || !user_email.trim() || !message.trim()) {
            setStateMessage("Please fill in all fields.");
            return false;
        }
        if (!validateEmail(user_email)) {
            setStateMessage("Please enter a valid email address.");
            return false;
        }
        return true;
    };

    const sendEmail = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }
        setIsSubmitting(true);
        const publicKey = process.env.REACT_APP_PUBLIC_KEY;
        if (!publicKey) {
            setIsSubmitting(false);
            setStateMessage("Public key is not set. Please try again later.");
            console.error("Public key is undefined.");
            return;
        }

        emailjs
            .sendForm("vortex_test_1", "vortex_test_id123", form.current, publicKey)
            .then(
                (result) => {
                    setIsSubmitting(false);
                    setStateMessage("Message sent successfully!");
                    console.log(result.text);
                },
                (error) => {
                    setIsSubmitting(false);
                    setStateMessage("Failed to send message, please try again.");
                    console.error(error.text);
                }
            );
    };

    return (
        <div className="form-container">
            <form className="form" ref={form} onSubmit={sendEmail}>
                <input
                    type="text"
                    placeholder={data.contact.form.name}
                    className="input"
                    name="user_name"
                    required
                    value={formValues.user_name}
                    onChange={handleInputChange}
                />
                <input
                    type="email"
                    placeholder={data.contact.form.email}
                    className="input full-width"
                    name="user_email"
                    required
                    value={formValues.user_email}
                    onChange={handleInputChange}
                />
                <textarea
                    placeholder={data.contact.form.message}
                    className="textarea full-width"
                    name="message"
                    required
                    value={formValues.message}
                    onChange={handleInputChange}
                ></textarea>
                <button type="submit" className="submit-button" disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : data.contact.form.button}
                </button>
            </form>
            {stateMessage && <p>{stateMessage}</p>}
        </div>
    );
};

export default ContactForm;
