// tạo trang home chứa các component
// import các component từ thư mục components
import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import HeroMB from "../components/Heromb";
import Hero2 from "../components/Hero2wls";
import StatisticalHome from "../components/StatisticalHome";
import Footer from "../components/Footer";
import BannerHome from "../components/bannerhomewls";

const Home = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 768);
    });
  }, []);
  return (
    <div className="overflow-hidden">
      {isMobile ? <HeroMB /> : <Hero />}
      <Hero2 />
      <BannerHome />
      <Footer />
    </div>
  );
};

export default Home;
