import React from "react";
import call from "../../assets/icons/callIcon.png";
import email from "../../assets/icons/emailIcon.png";
import location from "../../assets/icons/locationIcon.png";
import ContactForm from "../../components/molecules/ContactForm";

import message from "../../assets/icons/ovalMessage.png";
import facebook from "../../assets/icons/ovalFacebook.png";
import instagram from "../../assets/icons/ovalInsta.png";

const ContactSection = ({ data }) => {
  const icons = [call, email, location];
  const socialIcons = [message, facebook, instagram];
  return (
    <div className="contact-section">
      <div className="contact-container">
        <div className="contact-text">
          {/* <h2 className="contact-title">{data.contact.title}</h2> */}
          <div className="subtitle-container">
            <h3 className="contact-subtitle">{data.contact.subtitle1}</h3>
            <h3 className="contact-subtitle colored">
              {data.contact.subtitle2}
            </h3>
            <h3 className="contact-subtitle">{data.contact.subtitle3}</h3>
            <h3 className="contact-subtitle colored">
              {data.contact.subtitle4}
            </h3>
          </div>
        </div>
        <div className="contact-info">
          <div className="contact-info-container">
            <h3 className="contact-title">{data.contact.infoCard.cardTitle}</h3>
            {icons.map((element, index) => {
              let text = "";

              if (index === 0) {
                text = data.contact.infoCard.phoneNumber;
              } else if (index === 1) {
                text = data.contact.infoCard.email;
              } else {
                text = data.contact.infoCard.location;
              }
              return (
                <div className="row">
                  <img src={element} alt="contact ic" />
                  <p className="contact-information">{text}</p>
                </div>
              );
            })}
            <div className="link-row">
              {socialIcons.map((element) => {
                return <img src={element} alt="social media icon" />;
              })}
            </div>
          </div>
          <div className="contact-form-container">
            <ContactForm data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactSection;
