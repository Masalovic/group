import React from "react";
import ServiceCard from "../../components/molecules/ServiceCard";
import quotationIcon from "../../assets/icons/quotation.png";

const ServiceSection = ({ data }) => {
  return (
    <div className="service-section">
      <div className="service-container">
        <div className="service-text">
          {/* <h2 className="service-title">{data.services.title}</h2> */}
          <div className="subtitle-container">
            <h3 className="service-subtitle colored">
              {data.services.subtitle1}
            </h3>
            <h3 className="service-subtitle">{data.services.subtitle2}</h3>
            <h3 className="service-subtitle">{data.services.subtitle3}</h3>
          </div>
        </div>
        <div className="service-cards">
          {data.services.cardList.map((element, index) => {
            return (
              <ServiceCard
                index={index}
                title={element.title}
                text={element.text}
              />
            );
          })}
        </div>
        <div className="service-quotation">
          <img src={quotationIcon} alt="Quotation" />
          <div className="quotation-text-container">
            <p className="quotation-text">{data.services.quotation[0]}</p>
            <p className="quotation-text">{data.services.quotation[1]}</p>
            <div className="line"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ServiceSection;
