import React from 'react';
import bozic from '../../assets/images/logoBozic.png';
import bosch from '../../assets/images/logoBosh.png';
import muro from '../../assets/images/logoMuro.png';
import markovic from '../../assets/images/logoMarkovic.png';
import takeuchi from '../../assets/images/logoTakeuchi.png';
import divia from '../../assets/images/logoDivia.png';
import LogoList from '../../components/atoms/LogoList'
import MarqueeText from '../../components/atoms/MarqueeText';


const PortfolioSection = ({ data }) => {
    const logos = [
        bozic, bosch, muro, markovic, takeuchi, divia
    ];
    return (
        <div className="portfolio-section">
            <div className="portfolio-container">
                <MarqueeText text={data.portfolio.marquee} />
                <LogoList logos={logos} />
            </div>
        </div>
    );
}
export default PortfolioSection;