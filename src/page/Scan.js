// tạo trang home chứa các component
// import các component từ thư mục components
import React, { useEffect, useState } from "react";
import Product from "../components/Info/Product";
import News from "../components/Info/News";
import Result from "../components/Result/PC/Result";
import ResultMobile from "../components/Result/Mobile/Result";
import Footer from "../components/Footer";
import FooterMB from "../components/Footermb";
const Scan = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setIsMobile(window.innerWidth <= 768);
    });
  }, []);

  return (
    <div className="overflow-hidden">
      {isMobile ? <ResultMobile /> : <Result />}
      {/* <Statistical /> */}
      <Product />
      <News />
      {isMobile ? <FooterMB /> : <Footer />}
    </div>
  );
};

export default Scan;
