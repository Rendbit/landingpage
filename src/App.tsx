import React from "react";
// import { HashRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Nav from "./components/nav/Nav";

const App: React.FC = () => {
  return (
    <div id="home">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
      {/* <Navbar /> */}
      <Nav />
      <Home />
      <Footer />
      {/* <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div>About</div>} />
          <Route path="/contact" element={<div>Contact</div>} />
          <Route path="/:path" element={<div>404 Not Found</div>} />
        </Routes>
      </HashRouter> */}
      
    </div>
  );
};

export default App;
