import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Analytics from "./components/Analytics.jsx";
import NewsSetller from "./components/NewsSetller.jsx";
import Cards from "./components/Cards.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <NewsSetller />
      <Cards />
      <Footer />
    </div>
  );
};

export default App;
