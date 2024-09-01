import React from "react";
import lightBulb from "../../assets/icons/Lightbulb.png";
import phone from "../../assets/icons/Phone.png";
import rocket from "../../assets/icons/Rocket.png";
import seo from "../../assets/icons/SEO.png";
import AOS from "aos";
import "aos/dist/aos.css";

const ServiceCard = ({ index, title, text }) => {
  AOS.init({ duration: 2000 });
  const images = [lightBulb, seo, rocket, phone];
  return (
    <div className="service-card" data-aos="fade-up">
      <div className="top-container">
        <img src={images[index]} alt="service icon" />
        <p className="card-title">
          {title.split("\n").map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
      </div>{" "}
      <div className="bottom-container">
        <p className="card-details">{text}</p>
      </div>
    </div>
  );
};
export default ServiceCard;
