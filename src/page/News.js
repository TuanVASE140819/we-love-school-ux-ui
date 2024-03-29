import React, { useState, useEffect } from "react";
import About from "../components/About1";

import Statistical from "../components/Statistical";
import Banner2 from "../components/Banner2";
import { footerData, navigationData } from "../data";
import Content from "../components/Info/Content";
import Product from "../components/Info/Product";
import Newsindex from "../components/Info/News";
import Rule from "../components/Info/Rule";
import Keyword from "../components/News/PC/Keyword";
import NewsOne from "../components/News/PC/NewsOne";
import NewsTwo from "../components/News/PC/NewsTwo";
import MobileKeyword from "../components/News/Mobile/Keyword"; // Import the mobile version of the Keyword component
import MobileNewsOne from "../components/News/Mobile/NewsOne"; // Import the mobile version of the NewsOne component
import MobileNewsTwo from "../components/News/Mobile/NewsTwo"; // Import the mobile version of the NewsTwo component
import Footer from "../components/Footer";
import FooterMB from "../components/Footermb";
const News = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 768);
    });
  }, []);

  return (
    <div className="overflow-hidden">
      {isMobile ? <MobileKeyword /> : <Keyword />}
      {isMobile ? <MobileNewsOne /> : <NewsOne />}
      <Newsindex />
      {isMobile ? <MobileNewsTwo /> : <NewsTwo />}
      {isMobile ? <FooterMB /> : <Footer />}
    </div>
  );
};

export default News;
