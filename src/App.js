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
                  <title>Skin Care - Ứng dụng chăm sóc da thông minh</title>
                  <meta
                    name="description"
                    content="Ứng dụng chăm sóc da thông minh"
                  />
                  <meta
                    name="keywords"
                    content="chăm sóc da, da đẹp, da sáng, Phân tích da, Ứng dụng phân tích da, Ứng dụng chăm sóc da, Kiểm tra tình trạng da, Ứng dụng kiểm tra da,Ứng dụng tư vấn da, Ứng dụng đánh giá da, Ứng dụng skincare, Ứng dụng công nghệ da ,ng dụng công nghệ skincare"
                  ></meta>
                </Helmet>
                <Home />
              </>
            }
          />
          <Route path="/thong_tin" element={<Information />} />
          <Route path="/bi_quyet_cham_soc_da" element={<News />} />
          <Route path="/gioi_thieu" element={<About />} />
          <Route path="/skin_care_scan" element={<Scan />} />
          <Route path="/lien_he" element={<Contact />} />
          <Route path="/cam_ket" element={<Commit />} />
          <Route path="/review" element={<Review />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
