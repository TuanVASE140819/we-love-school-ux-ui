import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import about data
import { aboutData, contentInfoData } from "../data";
import Hero from "../components/Hero";
import Banner2 from "../components/Banner2";
import Banner2MB from "../components/Banner2mb";
import Footer from "../components/Footer";
import FooterMB from "../components/Footermb";
import Contact1 from "../components/Contact/Contact1";
import Statistical from "../components/Statistical";

import StatisticalHome from "../components/StatisticalHome";
const Contact = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 768);
    });
  }, []);
  return (
    <div className="overflow-hidden">
      {/* {isMobile ? <Banner2MB /> : <Banner2 />}
      <StatisticalHome /> */}
      <Contact1 />
      {isMobile ? <FooterMB /> : <Footer />}
    </div>
  );
};

export default Contact;
