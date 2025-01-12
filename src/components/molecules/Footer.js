import React from "react";
import logo from "../../assets/images/logo.png";
import FacebookIcon from "../../assets/icons/Facebook.svg";
import InstagramIcon from "../../assets/icons/Instagram.png";
import LinkedInIcon from "../../assets/icons/LinkedIn.svg";
import WhatsAppIcon from "../../assets/icons/WhatsApp.png";
import EmailIcon from "../../assets/icons/Email.png";
import { Link } from "react-router-dom";

const Footer = ({ data }) => {
  const { contact: footerContact, moto, copy } = data.footer;

  const [contactInfo, quickLinks, socialMedia] = footerContact;

  const socialIcons = socialMedia.socialIcons.map((icon) => ({
    ...icon,
    img:
      icon.alt === "Facebook"
        ? FacebookIcon
        : icon.alt === "Instagram"
        ? InstagramIcon
        : icon.alt === "LinkedIn"
        ? LinkedInIcon
        : icon.alt === "WhatsApp"
        ? WhatsAppIcon
        : EmailIcon,
  }));

  return (
    <footer className="footer-container">
      <div className="footer-top">
        <div className="footer-brand">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className="footer-moto">{moto}</p>
        </div>
        <div className="footer-nav">
          <h4 className="footer-title">{quickLinks.title}</h4>
          <ul className="footer-links">
            {quickLinks.links.map((link, index) => (
              <li key={index} className="footer-link-item">
                <Link to={link.path} className="footer-link">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Details Section */}
        <div className="footer-contact">
          <h4 className="footer-title">{contactInfo.title}</h4>
          <a
            href={`tel:${contactInfo.phone.replace(/\s+/g, "")}`}
            className="footer-contact-text"
          >
            {contactInfo.phone}
          </a>
          <a
            href={`mailto:${contactInfo.email}`}
            className="footer-contact-text"
          >
            {contactInfo.email}
          </a>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
              contactInfo.address
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact-text"
          >
            {contactInfo.address}
          </a>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <h4 className="footer-title">{socialMedia.title}</h4>
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

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        {/* Add Privacy Policy and Terms Links */}
        <div className="footer-legal">
          <Link to="/privacy-policy" className="footer-legal-link">
            Privacy Policy
          </Link>
          <Link to="/terms-conditions" className="footer-legal-link">
            Terms & Conditions
          </Link>
        </div>
        <p className="footer-copy">{copy}</p>
        <div className="footer-legal-links">
          <a href="/terms-of-service" className="footer-link">
            Terms of Service
          </a>
          <a href="/privacy-policy" className="footer-link">
            Privacy Policy
          </a>
          <a href="/cookie-policy" className="footer-link">
            Cookie Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
