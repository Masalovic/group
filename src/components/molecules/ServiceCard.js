import lightBulb from "../../assets/icons/Lightbulb.png";
import phone from "../../assets/icons/Phone.png";
import rocket from "../../assets/icons/Rocket.png";
import seo from "../../assets/icons/SEO.png";

const ServiceCard = ({ index, title, text }) => {
    const images = [lightBulb, phone, rocket, seo];
    return (
        <div className="service-card">
            <div className="top-container">
                <img src={images[index]} alt="service icon" />
                <p className="card-title">{title}</p>
            </div>
            <div className="bottom-container">
                <p className="card-details">{text}</p>
            </div>
        </div>
    );
}
export default ServiceCard;