import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home.jsx";
import Card from "./Components/Card.jsx";
import Banner from "./Components/Banner.jsx";
import Footer from "./Components/Footer.jsx";
import AboutsUs from "./Components/AboutsUs.jsx";
import CheckoutPage from './pages/CheckoutPage.jsx'
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import ProductList from "./Components/Productlist.jsx";
import ProductPage from "./pages/ProductPage.jsx";
import ContactUs from "./Components/ContactUs.jsx";

const App = () => {
  return (
    <Router>
       <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/product" element={<ProductList />} />
           <Route path='/productPage' element={<ProductPage />} />
          <Route path="/cart" element={<Card />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path='/about' element={<AboutsUs />} />
           <Route path='/contact' element={<ContactUs />} />
          <Route path="/banner" element={<Banner />} />
        </Routes>
          <Footer />
    </Router>

  );
};

export default App;
