import React from "react";
import ReactGA from "react-ga4";
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import ServiceSection from "./sections/ServiceSection";
import MarketingSection from "./sections/MarketingSection";
import Workflow from "./sections/Workflow";
import Portfolio from "./sections/Portfolio";
import BrochuresSection from "./sections/BrochuresSection";
import ContactSection from "./sections/ContactSection";
import ClientBanner from "../components/molecules/ClientBanner";
import DropdownBanner from "../components/molecules/DropdownBanner";
import Navigation from "../components/molecules/Navigation";
import homeDataSr from "../assets/sr.json";
import homeDataEn from "../assets/en.json";
import Footer from "../components/molecules/Footer";
import Overlay from "../screens/sections/Overlay";

class MainPage extends React.PureComponent {
  state = {
    language: "en", // Default language is English
  };

  switchLanguage = (lang) => {
    this.setState({ language: lang });
  };

  componentDidMount() {
    // Refresh ScrollTrigger after mounting all sections
    setTimeout(() => {
      window.dispatchEvent(new Event("resize")); // Trigger resize to refresh ScrollTrigger
    }, 100);
  }

  render() {
    ReactGA.send({
      hitType: "pageview",
      page: "/",
      title: "Home",
    });

    const data = this.state.language === "sr" ? homeDataSr : homeDataEn;

    console.log("Current language:", this.state.language);
    console.log("Loaded data:", data);

    return (
      <div className="main-screen" style={{ overflow: "visible" }}>
        <Overlay />
        <DropdownBanner data={data} />
        <Navigation data={data} onLanguageChange={this.switchLanguage} />
        <section id="home">
          <HomeSection data={data} />
        </section>
        <section id="about">
          <AboutSection data={data} />
        </section>
        <section>
          <ServiceSection data={data} sectionId="it-services" />
        </section>
        <section>
          <MarketingSection data={data} />
        </section>
        <section>
          <ServiceSection data={data} sectionId="consulting-services" />
        </section>
        <section id="portfolio">
          <Portfolio data={data} />
        </section>
        <section id="workflow">
          <Workflow data={data} />
        </section>
        <section>
          <BrochuresSection data={data} />
        </section>

        <section id="client">
          <ClientBanner />
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
