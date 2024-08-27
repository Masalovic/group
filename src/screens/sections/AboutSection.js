import React from "react";
import aboutImage from "../../assets/images/about.jpg";

const AboutSection = ({ data }) => {
    return (
        <div className="about-section">
            <div className="about-container">
                <img src={aboutImage} alt="About us" />
                <div className="about-text">
                    <h2 className="about-title">{data.about.title}</h2>
                    <h3 className="about-subtitle colored">{data.about.subtitle1}</h3 >
                    <h3 className="about-subtitle">{data.about.subtitle2}</h3>
                    <p className="about-text colored">{data.about.text1}</p>
                    <p className="about-text">{data.about.text2}</p>
                </div>
            </div>
        </div>
    );
}
export default AboutSection;