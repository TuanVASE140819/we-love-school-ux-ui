import React, { useState } from "react";

// import components
import Logo from "../assets/img/logo.png";
import Nav from "./Nav";
import NavMobile from "./NavMobile";

// import icons
import { FaBars } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import LanguageSwitch from "./LanguageSwitch";

import logo3 from "../../src/assets/img/WLS/Logo.png";

const Header = () => {
  const [navMobile, setNavMobile] = useState(false);
  return (
    <header
      className="mb-12 lg:mb-0 z-20 fixed w-full top-0 px-4 lg:px-0 py-4 lg:py-5 bg-gray-100 shadow-md"
      style={{
        // #F6FAFD
        backgroundColor: "#F6FAFD",
      }}
      // style={{ backgroundColor: "white" }}
      // data-aos="fade-down"
      // data-aos-delay="1200"
      // data-aos-duration="1000"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-between gap-x-[120px]">
            {/* logo */}
            <div className="flex items-center">
              <img src={logo3} alt="logo" width={200} />
            </div>

            {/* nav / initially hidden / show on large screens  */}
            <div
              className="hidden lg:flex gap-x-8 items-center justify-between"
              style={{ marginRight: "auto" }}
            >
              <Nav />
            </div>
            <div
              className="hidden lg:flex gap-x-8 items-center justify-between"
              // style={{ marginRight: "auto" }}
            >
              {/*  Button đăng kí và đăng nhập */}
              <button
                className="px-6 py-2  bg-[#3D92D1] text-white font-bold"
                style={{ marginRight: "auto" }}
              >
                Đăng nhập
              </button>
              <button
                className="px-6 py-2 bg-white
           text-[#3D92D1] font-bold border border-radius-2xl border-[#3D92D1] "
                style={{ marginRight: "auto" }}
              >
                Đăng kí
              </button>
            </div>
          </div>

          {/* mobile nav / initially is showing / hide on large screens */}
        </div>
      </div>
    </header>
  );
};

export default Header;
