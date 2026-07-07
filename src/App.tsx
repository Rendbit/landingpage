import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import DataSafety from "./pages/legal/DataSafety";
import AccountDeletion from "./pages/legal/AccountDeletion";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

const ScrollToTop: React.FC = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

const AppInner: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <div
      id="home"
      data-theme={isDark ? "dark" : "light"}
      style={{
        background: isDark
          ? "radial-gradient(1200px 820px at 50% 0%, #13161d 0%, #0b0c10 58%)"
          : "#ffffff",
        color: isDark ? "#f5f5f5" : "#171717",
        minHeight: "100vh",
        transition: "background 0.3s, color 0.3s",
      }}
    >
      <ScrollToTop />
      <ToastContainer position="top-right" autoClose={5000} />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/safety" element={<DataSafety />} />
        <Route path="/account-deletion" element={<AccountDeletion />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
};

const App: React.FC = () => (
  <ThemeProvider>
    <AppInner />
  </ThemeProvider>
);

export default App;