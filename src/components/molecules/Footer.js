import React from "react";
import logo from "../../assets/images/logo.png";
import facebookIcon from "../../assets/icons/ovalFacebook.png";
import instagramIcon from "../../assets/icons/ovalInsta.png";
import emailIcon from "../../assets/icons/ovalMessage.png";

const Footer = ({ data }) => {
  const contactDetails = [
    { text: data.contact.infoCard.phoneNumber },
    { text: data.contact.infoCard.email },
    { text: data.contact.infoCard.location },
  ];

  const socialIcons = [
    {
      img: facebookIcon,
      url: "https://www.facebook.com/profile.php?id=100090554024215",
      alt: "Facebook",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/vortex_mk/",
      alt: "Instagram",
    },
    {
      img: emailIcon,
      url: "mailto:office@vortex-mk.com",
      alt: "Email",
    },
  ];

  const navLinks = ["Početna", "Usluge", "O Nama", "Projekti", "Kontakt"];

  return (
    <footer className="footer-container">
      {/* Top Section */}
      <div className="footer-top">
        {/* Logo and Moto */}
        <div className="footer-brand">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className="footer-moto">
            "Transforming Brands, Building Futures."
          </p>
        </div>

        {/* Navigation Links */}
        <div className="footer-nav">
          <h4 className="footer-title">Brzi Linkovi</h4>
          <ul className="footer-links">
            {navLinks.map((link, index) => (
              <li key={index} className="footer-link-item">
                <a href={`#${link.toLowerCase().replace(/\s+/g, "")}`}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Details */}
        <div className="footer-contact">
          <h4 className="footer-title">Kontakt</h4>
          {contactDetails.map((item, index) => (
            <p key={index} className="footer-contact-text">
              {item.text}
            </p>
          ))}
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h4 className="footer-title">Pratite Nas</h4>
          <div className="social-icons">
            {socialIcons.map((icon, index) => (
              <a
                key={index}
                href={icon.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <img src={icon.img} alt={icon.alt} className="social-icon" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p className="footer-copy">
          &copy; {new Date().getFullYear()} Vortex Digital Agency. Sva prava
          zadržana.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
