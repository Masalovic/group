// App.js
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import MainPage from '../../screens/MainScreen';
import ReactGA from 'react-ga4';

const TrackPageView = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname + location.search });
  }, [location]);

  return null;
};

export default function App() {
  ReactGA.initialize('G-9XB8PJEDC6');

  return (
    <BrowserRouter>
      <TrackPageView />
      <Routes>
        <Route exact path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
}
