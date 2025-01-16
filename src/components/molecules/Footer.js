import React from "react";
import logo from "../../assets/logos/logo.png";
import FacebookIcon from "../../assets/icons/Facebook.svg";
import InstagramIcon from "../../assets/icons/Instagram.png";
import LinkedInIcon from "../../assets/icons/LinkedIn.svg";
import WhatsAppIcon from "../../assets/icons/WhatsApp.png";
import EmailIcon from "../../assets/icons/Email.png";
import { Link } from "react-router-dom";

const Footer = ({ data }) => {
  // Safely access data to avoid undefined errors
  const {
    moto = "",
    copy = "",
    legalLinks = {},
    contact = {},
    socialMedia = { socialIcons: [] },
    navbar = [],
  } = data.footer || {};

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
        {/* Branding */}
        <div className="footer-brand">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className="footer-moto">{moto}</p>
        </div>

        {/* Quick Links */}
        <div className="footer-nav">
          <h4 className="footer-title">Link</h4>
          <ul className="footer-links">
            {navbar.map((link, index) => (
              <li key={index} className="footer-link-item">
                <Link to={link.path} className="footer-link">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Details */}
        <div className="footer-contact">
          <h4 className="footer-title">{contact.title || "Contact"}</h4>
          {contact.phone && (
            <a
              href={`tel:${contact.phone.replace(/\s+/g, "")}`}
              className="footer-contact-text"
            >
              {contact.phone}
            </a>
          )}
          {contact.email && (
            <a href={`mailto:${contact.email}`} className="footer-contact-text">
              {contact.email}
            </a>
          )}
          {/* Replace the address with the Google Business link */}
          <a
            href="https://www.google.com/search?q=universe+force+marketing&oq=universe+force+marketing&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIKCAEQABiABBiiBDIKCAIQABiABBiiBDIKCAMQABiABBiiBDIKCAQQABiABBiiBDIGCAUQRRg8MgYIBhBFGD0yBggHEEUYPdIBCDc0MDZqMGo0qAIAsAIB&sourceid=chrome&ie=UTF-8"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-contact-text"
          >
            {contact.address || "Our Location"}
          </a>
        </div>

        {/* Social Media */}
        <div className="footer-social">
          <h4 className="footer-title">{socialMedia.title || "Follow Us"}</h4>
          <div className="social-icons">
            {socialIcons.map((icon, index) => (
              <a
                key={index}
                href={icon.url || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <img
                  src={icon.img}
                  alt={icon.alt || "Social Icon"}
                  className="social-icon"
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        {/* <div className="footer-legal">
          <Link to="/privacy-policy" className="footer-legal-link">
            {legalLinks.privacyPolicy || "Privacy Policy"}
          </Link>
          <Link to="/terms-conditions" className="footer-legal-link">
            {legalLinks.termsConditions || "Terms & Conditions"}
          </Link>
        </div> */}

        <div className="footer-legal-links">
          <a href="/terms-of-service" className="footer-link">
            {legalLinks.termsService || "Terms of Service"}
          </a>
          <a href="/privacy-policy" className="footer-link">
            {legalLinks.privacyPolicy || "Privacy Policy"}
          </a>
          <a href="/cookie-policy" className="footer-link">
            {legalLinks.cookiePolicy || "Cookie Policy"}
          </a>
        </div>
        <p className="footer-copy">{copy}</p>
      </div>
    </footer>
  );
};

export default Footer;
