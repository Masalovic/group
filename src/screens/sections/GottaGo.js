import React, { useState } from "react";
import data from "../../assets/en.json";
import Navigation from "../../components/molecules/Navigation";
import NtpbgLogo from "../../assets/images/ntpbgLogo.jpg";
import GottagoLogo from "../../assets/images/gottagoLogo.png";
import GottaGoPresentation from "./GottaGoPresentation";
import ContactForm from "../../components/molecules/ContactForm";

const GottaGo = () => {
    const [showPresentation, setShowPresentation] = useState(false);
    const [showContactForm, setShowContactForm] = useState(false);

    const handleSeeMore = () => {
        setShowPresentation(true);
    };

    const handleClosePresentation = () => {
        setShowPresentation(false);
    };

    const handleTalkToUs = () => {
        setShowContactForm(true);
    };

    const handleCloseContactForm = () => {
        setShowContactForm(false);
    };

    return (
        <div className="gottago-page">
            <Navigation data={data} />
            <div className="gottago-content">
                <div className="left-section">
                    <div className="info-block">
                        <p className="text-highlight">
                            Plus, our social platform connects you with locals and fellow travellers, so you can share experiences, ask questions, and get insider advice.
                        </p>
                    </div>

                    <div className="info-block">
                        <p className="text-highlight">
                            Our AI engine adjust itinerary as you wish and as you move, so you'll always have the latest local tips at your fingertips.
                        </p>
                    </div>

                    <div className="info-block">
                        <p className="text-highlight">
                            Now, we're looking to team up with investors, tourism boards, advisors, and tech partners to keep growing. Hit that button and reach out to us.
                        </p>
                    </div>
                </div>

                <div className="center-section">
                    <h2 className="description">
                        GottaGo is designed to make exploring new places easy, authentic, and fun.
                    </h2>

                    <p className="description">
                        Developed by Universe Force Group DOO, GottaGo is backed by a team of tourism marketing and technology experts who understand what it is like to navigate a destination.
                    </p>

                    <div className="key-partner">
                        <h3>Key partner</h3>
                        <div className="partner-logo">
                            <img src={NtpbgLogo} alt="Science Technology Park Belgrade" />
                        </div>
                    </div>
                </div>

                <div className="right-section">
                    <div className="logo-section">
                        <div className="logo">
                            <img src={GottagoLogo} alt="GottaGo Logo" />
                        </div>
                        <h1 className="tagline">Explore like a local, in a real time anywhere in the world.</h1>
                    </div>

                    <div className="cta-buttons">
                        <button className="cta-button" onClick={handleTalkToUs}>TALK TO US</button>
                        <button className="cta-button" onClick={handleSeeMore}>SEE MORE</button>
                    </div>
                </div>
            </div>
            <footer className="footer">
                <p>©2025 Universe Force Group. All Rights Reserved.</p>
            </footer>

            {showPresentation && (
                <div className="modal-overlay" onClick={handleClosePresentation}>
                    <div className="modal-content presentation-modal" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={handleClosePresentation}>×</button>
                        <GottaGoPresentation />
                    </div>
                </div>
            )}

            {showContactForm && (
                <div className="modal-overlay" onClick={handleCloseContactForm}>
                    <div className="modal-content contact-form-modal" onClick={e => e.stopPropagation()}>
                        <button className="modal-close" onClick={handleCloseContactForm}>×</button>
                        <div className="contact-form-wrapper">
                            <h2>Contact Us</h2>
                            <ContactForm data={data} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GottaGo;
