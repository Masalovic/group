import React from "react";
import ContactForm from "../../components/molecules/ContactForm";

const ContactSection = ({ data }) => {
  return (
    <div className="contact-section">
      {/* Contact Heading */}
      <div className="contact-heading">
        <h2 className="contact-title">{data.contact.title}</h2>
        <p className="contact-description">{data.contact.description}</p>
      </div>
      {/* Contact Form */}
      <div className="contact-form">
        <ContactForm data={data} />
      </div>
    </div>
    // </div>
  );
};

export default ContactSection;
