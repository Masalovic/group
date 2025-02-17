import bozic from "../../assets/logos/logoBozic.png";
import bosch from "../../assets/logos/logoBosh.png";
import muro from "../../assets/logos/logoMuro.png";
import markovic from "../../assets/logos/logoMarkovic.png";
import takeuchi from "../../assets/logos/logoTakeuchi.png";
import divia from "../../assets/logos/logoDivia.png";
import blu from "../../assets/logos/blu.png";
import aki from "../../assets/logos/aki.png";
import nineLives from "../../assets/logos/nineLives.png";
import bacioNero from "../../assets/logos/bacioNero.png";
import paradiseBay from "../../assets/logos/paradiseBay.png";
import vojo from "../../assets/logos/vojo.png";
import fyrBear from "../../assets/logos/fyrBear.png";
import LogoList from "../../components/atoms/LogoList";
import "../../styles/components/_clientBanner.scss";

const ClientBanner = () => {
  const logos = [
    bozic,
    bosch,
    muro,
    markovic,
    takeuchi,
    divia,
    blu,
    aki,
    nineLives,
    bacioNero,
    paradiseBay,
    vojo,
    fyrBear,
  ];
  return (
    <div className="banner-section">
      <div className="banner-container">
        <LogoList logos={logos} />
      </div>
    </div>
  );
};
export default ClientBanner;
