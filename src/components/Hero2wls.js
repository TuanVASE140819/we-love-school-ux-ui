import React, { useState } from "react";
import Modal from "react-modal";

import { heroData } from "../data";

import "../page/index.css";

import { useTranslation } from "react-i18next";

import aodai from "../../src/assets/img/WLS/aodai.png";
const Hero2 = () => {
  // destructure hero
  const { title, title2, subtitle, btnText, image2 } = heroData;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const { t } = useTranslation();
  return (
    <>
      <section className="lg:h-[650px] pt-[20rem] hidden md:block mb-10">
        {/* <Header /> */}
        <div className="container mx-auto h-full relative">
          <div className="flex flex-col xl:flex-row items-center h-full ">
            {/* text */}
            <div data-aos="fade-up" data-aos-delay="700">
              <img
                src={aodai}
                alt=""
                className=" xl:ml-0"
                style={{ width: "80%", height: "auto" }}
              />
            </div>
            <div
              className="text-black font-bold "
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-23%, 150%)",
                width: "100%",
              }}
              data-aos="fade-up"
              data-aos-delay="700"
            >
              Ngược thời gian, xem nào!
              <br />
              Bạn có bỏ lỡ khoảnh khắc nào không?
            </div>
            {/* image */}
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero2;
