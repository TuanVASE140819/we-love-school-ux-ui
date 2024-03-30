import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import animate on scroll
import Aos from "aos";
import "aos/dist/aos.css";

// import components
import Hero from "./components/Hero";

import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import Statistical from "./components/Statistical";
import Home from "./page/Home";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Information from "./page/Information";
import News from "./page/News";
import About from "./page/About";
import Scan from "./page/Scan";
import Contact from "./page/Contact";
import Commit from "./page/Commit";
import Review from "./page/Review";
import { Helmet } from "react-helmet";
const App = () => {
  // animate on scroll initialization
  Aos.init({
    duration: 1800,
    offset: 0,
  });
  return (
    <Router>
      <Header />
      {/* <Nav /> */}
      <div className="overflow-hidden">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <title>WeLoveSchool</title>
                </Helmet>
                <Home />
              </>
            }
          />
          {/* <Route path="/thong_tin" element={<Information />} />
          <Route path="/bi_quyet_cham_soc_da" element={<News />} />
          <Route path="/gioi_thieu" element={<About />} />
          <Route path="/skin_care_scan" element={<Scan />} />
          <Route path="/lien_he" element={<Contact />} />
          <Route path="/cam_ket" element={<Commit />} />
          <Route path="/review" element={<Review />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
