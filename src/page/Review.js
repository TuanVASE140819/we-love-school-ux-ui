import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import about data
import { aboutData, contentInfoData } from "../data";
import Hero from "../components/Hero";
import Banner2 from "../components/Banner2";
import Statistical from "../components/Statistical";
import About2 from "../components/About2";
import Footer from "../components/Footer";
import Product from "../components/Info/Product";
import Review1 from "../components/Review/Review1";
import Review2 from "../components/Review/Review2";

import StatisticalHome from "../components/StatisticalHome";
import FooterMB from "../components/Footermb";
import Banner2MB from "../components/Banner2mb";
const Review = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 768);
    });
  }, []);
  return (
    <div className="overflow-hidden">
      {isMobile ? <Banner2MB /> : <Banner2 />}
      <StatisticalHome />
      <Review1 />
      <Review2 />
      {isMobile ? <FooterMB /> : <Footer />}
    </div>
  );
};

export default Review;
