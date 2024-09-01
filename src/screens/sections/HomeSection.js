import React from "react";

const HomeSection = ({ data }) => {
    return (
        <div className="home-section">
            <div className="home-container">
                <h1 className="home-title">{data.home.title}</h1>
                <h3 className="home-subtitle">{data.home.subtitle}</h3>
                <p className="home-text">{data.home.text}</p>
                <a href="/#contact">
                    <button className="home-button">{data.home.button}</button>
                </a>
            </div>
        </div>
    );
}
export default HomeSection;