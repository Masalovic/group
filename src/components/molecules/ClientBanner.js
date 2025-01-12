import bozic from "../../assets/images/logoBozic.png";
import bosch from "../../assets/images/logoBosh.png";
import muro from "../../assets/images/logoMuro.png";
import markovic from "../../assets/images/logoMarkovic.png";
import takeuchi from "../../assets/images/logoTakeuchi.png";
import divia from "../../assets/images/logoDivia.png";
import LogoList from "../../components/atoms/LogoList";
import "../../styles/components/_clientBanner.scss";

const ClientBanner = () => {
  const logos = [bozic, bosch, muro, markovic, takeuchi, divia];
  return (
    <div className="banner-section">
      <div className="banner-container">
        <LogoList logos={logos} />
      </div>
    </div>
  );
};
export default ClientBanner;
