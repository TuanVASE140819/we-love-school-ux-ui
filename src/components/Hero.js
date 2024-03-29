import React, { useState } from 'react';
import Modal from 'react-modal';

import { heroData } from "../data";

import "../page/index.css";

import { useTranslation } from "react-i18next";

import image from "../../src/assets/img/WLS/tanca.png";
const Hero = () => {
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
      <section className="lg:h-[300px] pt-[20rem] hidden md:block">
        {/* <Header /> */}
        <div className="container mx-auto h-full relative">
          <div className="flex flex-col xl:flex-row items-center h-full md:py-24">
            {/* text */}
            <div
              className="text-center xl:text-left xl:absolute"
              style={{
                transform: "translate(0%, -50%)",
              }}
              data-aos="fade-down"
              data-aos-delay="400"
            >
              {/* title */}
              <h1 className="text-4xl xl:max-w-[700px] font-bold">
                Khoảnh Khắc Tìm Lại Trường Xưa
              </h1>
              <h1
                className="text-4xl xl:max-w-[700px] text-[#C48B1A] font-bold"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                Kết Nối Bạn Bè
              </h1>
              {/* subtitle */}
              <p
                className="text-sm lead xl:max-w-[500px] mb-6 mt-4"
                data-aos="fade-down"
                data-aos-delay="500"
              >
                WeLoveSchool giúp bạn kết nối và tìm kiếm ở trường cũ. Song song
                đó giúp bạn khôi phục lại những kỷ niệm quý giá thời học sinh.
                <br />
                <br />
                WeLoveSchool giúp bạn kết nối và tìm kiến bạn bè cũ. Song song
                đó giúp bạn khôi phục lại những kỹ niệm quý giá thời học sinh.
              </p>
              <button
                className="p-2 mb-8 xl:mb-0 text-sm border border-[#3D92D1]
                 text-[#3D92D1] font-bold hover:bg-[#3D92D1] hover:text-white"
                style={{ display: "flex", alignItems: "center" }}
                onClick={openModal}
                data-aos="fade-down"
                data-aos-delay="400"
              >
                {/* icon tìm kiếm */}
                <i className="fas fa-search"></i>

                <div className="pl-2">Khoảnh Khắc Tìm Lại Trường Xưa</div>
              </button>
              {/* image */}
            </div>
            {/* image */}
            <div
              className=" ml-28 xl:absolute xl:-right-20"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <img
                src={image}
                alt=""
                className=" ml-30 ml-5 xl:ml-0"
                style={{ width: "87%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
