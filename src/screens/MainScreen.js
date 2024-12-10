import React from "react";
import ReactGA from "react-ga4";
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import ServiceSection from "./sections/ServiceSection";
import ContactSection from "./sections/ContactSection";
import PortfolioSection from "./sections/PortfolioSection";

import Workflow from "./sections/Workflow";

import Navigation from "../components/molecules/Navigation";
import homeDataSr from "../assets/sr.json";
import homeDataEn from "../assets/en.json";
import Footer from "../components/molecules/Footer";

class MainPage extends React.PureComponent {
  state = {
    language: "sr", // Default language is Serbian
  };

  switchLanguage = (lang) => {
    this.setState({ language: lang });
  };

  render() {
    ReactGA.send({
      hitType: "pageview",
      page: "/",
      title: "Home",
    });

    const data = this.state.language === "sr" ? homeDataSr : homeDataEn;

    return (
      <div className="main-screen">
        <Navigation data={data} onLanguageChange={this.switchLanguage} />
        <section id="home">
          <HomeSection data={data} />
        </section>
        <section id="services">
          <ServiceSection data={data} />
        </section>
        <section id="about">
          <AboutSection data={data} />
        </section>
        <section id="portfolio">
          <PortfolioSection data={data} />
        </section>

        <section id="workflow">
          <Workflow />
        </section>

        <section id="contact">
          <ContactSection data={data} />
        </section>
        <Footer data={data} />
      </div>
    );
  }
}

export default MainPage;
