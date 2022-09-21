import React from 'react';
import "swiper/swiper.min.css";
import "./assets/boxicons-2.0.7/css/boxicons.min.css";
import "./App.scss";

import { BrowserRouter } from 'react-router-dom';
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import RoutesHandler from "./config/RoutesHandler"

function App() {
  return (
      <BrowserRouter>
          <Header />
          <RoutesHandler />
          <Footer />
      </BrowserRouter>
  )
}

export default App