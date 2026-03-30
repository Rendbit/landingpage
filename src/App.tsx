import React from "react";
import Nav from "./components/nav/Nav";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider, useTheme } from "./context/ThemeContext";

const AppInner: React.FC = () => {
  const { isDark } = useTheme();

  return (
    <div
      id="home"
      data-theme={isDark ? "dark" : "light"}
      style={{
        backgroundColor: isDark ? "#0f0f0f" : "#ffffff",
        color: isDark ? "#f5f5f5" : "#171717",
        minHeight: "100vh",
        transition: "background-color 0.3s, color 0.3s",
      }}
    >
      <ToastContainer position="top-right" autoClose={5000} />
      <Nav />
      <Home />
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