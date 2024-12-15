import React from "react";
import ContactForm from "../../components/molecules/ContactForm";

const ContactSection = ({ data }) => {
  return (
    <div className="contact-section">
      {/* Contact Heading */}
      <div className="contact-heading">
        <h2 className="contact-title">Kontakt</h2>
        <p className="contact-description">
          "Otkrijte kako možemo transformisati vaš brend i pomoći vam da
          postignete poslovne ciljeve. Naša prva konsultacija je potpuno
          besplatna!”
        </p>
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
