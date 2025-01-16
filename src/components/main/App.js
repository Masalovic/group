import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "../../screens/MainScreen";
import PrivacyPolicy from "../molecules/PrivacyPolicy";
import TermsOfService from "../molecules/TermsOfService";
import CookiePolicy from "../molecules/CookiePolicy";
import CookiesNotification from "../atoms/CookiesNotification"; // Import CookiesNotification
import homeDataSr from "../../assets/sr.json";
import homeDataEn from "../../assets/en.json";

export default function App() {
  const [language, setLanguage] = React.useState("sr"); // Default language

  const data = language === "sr" ? homeDataSr : homeDataEn;

  return (
    <Router>
      <CookiesNotification /> {/* Add CookiesNotification */}
      <Routes>
        <Route
          path="/"
          element={<MainPage language={language} setLanguage={setLanguage} />}
        />
        <Route
          path="/privacy-policy"
          element={<PrivacyPolicy data={data} onLanguageChange={setLanguage} />}
        />
        <Route
          path="/terms-of-service"
          element={
            <TermsOfService data={data} onLanguageChange={setLanguage} />
          }
        />
        <Route
          path="/cookie-policy"
          element={<CookiePolicy data={data} onLanguageChange={setLanguage} />}
        />
      </Routes>
    </Router>
  );
}
