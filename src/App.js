import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from "./components/Header"; // Import the Header component
import Home from "./components/Home"; // Import the Home component
import "./assets/styles/todo.css";
// import About from "./components/About";
// import ContactUs from "./components/ContactUs";

const App = () => {
  return (
    <BrowserRouter>
      <Header /> {/* Include Header component here */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Home component as the landing page */}
        {/* <Route path="/about" element={<About />} /> */}
        {/* <Route path="/contact-us" element={<ContactUs />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
