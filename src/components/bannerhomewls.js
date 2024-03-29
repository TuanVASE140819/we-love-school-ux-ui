import React, { useState } from "react";
import Modal from "react-modal";

import { heroData } from "../data";

import "../page/index.css";

import { useTranslation } from "react-i18next";

import banner from "../../src/assets/img/WLS/banner.png";
import page from "../../src/assets/img/WLS/page.png";
import CountUp from "react-countup";
import tamgiac from "../../src/assets/img/WLS/tamgiac.png";
import cay from "../../src/assets/img/WLS/cay.png";
import kyyeu from "../../src/assets/img/WLS/kyyeu.png";
import rachoi from "../../src/assets/img/WLS/rachoi.png";
import bacthang from "../../src/assets/img/WLS/bacthang.png";
const BannerHome = () => {
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
      <section className="lg:h-[800px] mt-24 hidden md:block">
        {/* <Header /> */}
        <div className="container mx-auto h-full relative">
          <div className="">
            {/* text */}
            <div>
              <img
                src={banner}
                alt=""
                className=" xl:ml-0"
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <div className="container mx-auto pt flex">
              {/* Phần trái */}
              <div
                className="flex-1"
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    position: "relative",
                    marginTop: "10%",
                  }}
                >
                  <img
                    src={cay}
                    alt=""
                    style={{
                      width: "50%",
                      height: "auto",
                      position: "absolute",
                      transform: "translateY(5%) translateX(10%) ",
                    }}
                  />
                  <img
                    src={kyyeu}
                    alt=""
                    style={{
                      width: "30%",
                      height: "auto",
                      position: "absolute",
                      transform: "translateY(50%) translateX(88%) ",
                    }}
                  />
                  <img
                    src={rachoi}
                    alt=""
                    style={{
                      width: "40%",
                      height: "auto",
                      position: "absolute",
                      transform: "translateY(10%) translateX(120%) ",
                    }}
                  />
                  <img
                    src={bacthang}
                    alt=""
                    style={{
                      width: "20%",
                      height: "auto",
                      position: "absolute",
                      transform: "translateY(80%) translateX(280%) ",
                    }}
                  />
                </div>
              </div>
              {/* Phần phải */}
              <div
                className="flex-1"
                style={{ transform: "translateY(-15%) translateX(3%)" }}
              >
                <img
                  src={page}
                  alt=""
                  style={{ width: "100%", height: "auto" }}
                />
                <div
                  style={{
                    zIndex: 30,
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-90%,-320%)",
                    color: "black",
                    fontSize: "2rem",
                    fontWeight: "bold",
                  }}
                >
                  <h1>
                    <span style={{ color: "#FFA500" }}>WeLoveSchool</span>
                    <br />
                  </h1>
                  <h5 className="text-xl">Nơi tìm lại kí ức xưa</h5>

                  {/*  */}
                </div>
                <div
                  style={{
                    transform: "translate(-0%,-120%)",
                    marginLeft: "10%",
                    marginRight: "10%",
                    zIndex: 30,
                  }}
                >
                  <div class="flex flex-row gap-x-2 mt-2 bg-gray-100 ">
                    <div class="w-32 py-3 px-2 pl-8 bg-[#3D92D1] text-white text-xl flex items-center justify-center">
                      +<CountUp end={5000} duration={5} />
                    </div>
                    <div class="basis-4/7 py-3 px-2 text-xs">
                      Trường học trên toàn quốc đã được cập nhật
                    </div>
                    <img
                      style={{
                        zIndex: 34,
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-1174%,-150%)",
                        color: "black",
                        fontSize: "2rem",
                        fontWeight: "bold",
                        // backgroundColor: "red",
                      }}
                      src={tamgiac}
                      alt=""
                      width={20}
                    />
                  </div>
                  <div class="flex flex-row gap-x-2 mt-2 bg-gray-100 ">
                    <div class="w-32 py-3 px-2 pl-8 bg-[#3D92D1] text-white text-xl flex items-center justify-center">
                      +<CountUp end={5000} duration={5} />
                    </div>
                    <div class="basis-4/7 py-3 px-2 text-xs">
                      Bạn bè cũ, tài khoản đã tạo <br />
                      Ban có thể tìm kiếm bạn bè cũ từ những năm 1985
                    </div>
                  </div>
                  <img
                    style={{
                      zIndex: 34,
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-1174%,-54%)",
                      color: "black",
                      fontSize: "2rem",
                      fontWeight: "bold",
                      // backgroundColor: "red",
                    }}
                    src={tamgiac}
                    alt=""
                    width={20}
                  />
                  <div class="flex flex-row gap-x-2 mt-2 bg-gray-100 ">
                    <div class="w-32 py-3 px-2 pl-8 bg-[#3D92D1] text-white text-xl flex items-center justify-center">
                      + <CountUp end={5000} duration={5} />
                    </div>
                    <div class="basis-4/7 py-3 px-2  text-xs">
                      Bài viết chia sẽ
                      <br /> Nơi thỏa sức viết lách cảm xúc của bạn
                    </div>
                  </div>
                  <img
                    style={{
                      zIndex: 34,
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-1174%,45%)",
                      color: "black",
                      fontSize: "2rem",
                      fontWeight: "bold",
                      // backgroundColor: "red",
                    }}
                    src={tamgiac}
                    alt=""
                    width={20}
                  />
                </div>
              </div>
            </div>

            {/* image */}
          </div>
        </div>
      </section>
    </>
  );
};
export default BannerHome;
