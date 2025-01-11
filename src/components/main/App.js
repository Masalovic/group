import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "../molecules/PrivacyPolicy";
import TermsOfService from "../molecules/TermsOfService";
import CookiePolicy from "../molecules/CookiePolicy";
import MainPage from "../../screens/MainScreen";
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
      </Routes>
    </Router>
  );
}
