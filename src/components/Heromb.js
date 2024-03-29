import React, { useState } from "react";
import Modal from "react-modal";

// import hero data
import { heroData } from "../data";

// import components
// import  css
import "../page/index.css";

import Model3 from "../../src/assets/img/model/model3.png";
const Hero = () => {
  // destructure hero
  const { title, title2, subtitle, btnText, image, image2 } = heroData;
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <section className="lg:h-[830px] pt-[7rem] block md:hidden pt-20 bg-gray-100">
        <div
          className="flex justify-center pt-5"
          data-aos="fade-down"
          data-aos-delay="600"
        >
          <div className="flex flex-col mr-5 px-3 rounded-lg glass shadow-lg">
            <div className="text-[0.6rem]">Bước 1</div>
            <div className="text-[0.6rem] font-bold">Quét da</div>
          </div>
          <div className="flex flex-col mr-5 bg-gray-100 px-3 rounded-lg glass shadow-lg">
            <div className="text-[0.6rem]">Bước 2:</div>
            <div className="text-[0.6rem] font-bold">Khảo sát chuyên sâu</div>
          </div>
          <div className="flex flex-col mr-5 bg-gray-100 px-3 rounded-lg glass shadow-lg">
            <div className="text-[0.6rem]">Bước 3:</div>
            <div className="text-[0.6rem] font-bold">Nhận kết quả</div>
          </div>
        </div>
        <div className="container mx-auto h-full relative">
          <div className="flex flex-col xl:flex-row items-center h-full md:py-24">
            <div
              className=" pt-5 xl:absolute xl:-right-12"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <img src={image} alt="" />
            </div>

            <div className="text-center xl:text-left xl:absolute">
              {/* title */}
              <h1
                className="h2 xl:max-w-[700px]"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                {title}
              </h1>

              {/* <h1
                className="h2 xl:max-w-[700px] text-orange-500"
                data-aos="fade-down"
                data-aos-delay="400"
              >
                {title2}
              </h1> */}
              {/* subtitle */}
              <p
                className="lead xl:max-w-[380px] mb-6 lg:mb-12"
                data-aos="fade-down"
                data-aos-delay="500"
              >
                {subtitle}
              </p>
              <div className="flex justify-center">
                <button
                  className="btn btn-primary mb-8 xl:mb-0"
                  style={{ display: "flex", alignItems: "center" }}
                  data-aos="fade-down"
                  data-aos-delay="600"
                  onClick={openModal}
                >
                  <img src={image2} alt="" className="w-5 h-5  ripple" />
                  <div className="pl-2">{btnText}</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={{
          content: {
            top: "370px",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
            padding: "0",
            border: "none",
            background: "none",
          },
        }}
      >
        {/* 30rem có viền màu cam */}
        <div className="bg-white m-4 rounded-3xl overflow-hidden border border-orange-500 relative">
          <button
            onClick={closeModal}
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "transparent",
              border: "none",
            }}
          >
            X
          </button>
          <div className="grid grid-cols-2">
            <div className="col-span-2 p-10 ">
              <h3 className="text-3xl font-bold text-start">
                Hướng Dẫn Sử Dụng
              </h3>
              <h5 className="text-2xl font-bold text-start ">
                Chụp 4 góc mặt:
              </h5>
              {/*  tạo 4 hình ảnh nằm ngang */}
              <div className="grid grid-cols-4">
                <div className="col-span-1 min-w-[60px] flex flex-col items-center justify-center">
                  <img
                    src="https://via.placeholder.com/60"
                    className="rounded-full"
                    alt=""
                  />
                  {/* <p className="text-center text-sm">Nhìn sang trái</p> */}
                </div>
                <div className="col-span-1 min-w-[60px] flex flex-col items-center justify-center">
                  <img
                    src="https://via.placeholder.com/60"
                    className="rounded-full"
                    alt=""
                  />
                  {/* <p className="text-center text-sm"> Nhìn sang phải</p> */}
                </div>
                <div className="col-span-1 min-w-[60px] flex flex-col items-center justify-center">
                  <img
                    src="https://via.placeholder.com/60"
                    className="rounded-full"
                    alt=""
                  />
                  {/* <p className="text-center text-sm">Nhìn vao cam</p> */}
                </div>
                <div className="col-span-1 min-w-[60px] flex flex-col items-center justify-center">
                  <img
                    src="https://via.placeholder.com/60"
                    className="rounded-full"
                    alt=""
                  />
                  {/* <p className="text-center text-sm">Đưa xuống cố</p> */}
                </div>
              </div>
              <h5 className="text-2xl font-bold text-start py-5">
                Để có kết quả tốt nhất:
              </h5>
              {/*  dùng gird chia 2x2 */}
              <div className="grid grid-cols-2">
                <div className="col-span-2">
                  {/*  tôi muốn tạo một nút bên phải là hình ảnh  bên trái là text */}
                  <button className=" flex items-center px-4 py-2 rounded-full shadow-lg min-w-[17rem]">
                    <img src="https://via.placeholder.com/30" alt="" />
                    <span className="pl-2">Hạn chế trang điểm</span>
                  </button>
                </div>
                <div className="col-span-2">
                  {/*  tôi muốn tạo một nút bên phải là hình ảnh  bên trái là text */}
                  <button className=" flex items-center px-4 py-2 rounded-full shadow-lg min-w-[17rem]">
                    <img src="https://via.placeholder.com/30" alt="" />
                    <span className="pl-2">Cố định máy ảnh cận mắt</span>
                  </button>
                </div>
                <div className="col-span-2">
                  {/*  tôi muốn tạo một nút bên phải là hình ảnh  bên trái là text */}
                  <button className=" flex items-center px-4 py-2 rounded-full shadow-lg min-w-[17rem]">
                    <img src="https://via.placeholder.com/30" alt="" />
                    <span className="pl-2">Không để tóc che mắt</span>
                  </button>
                </div>
                <div className="col-span-2">
                  {/*  tôi muốn tạo một nút bên phải là hình ảnh  bên trái là text */}
                  <button className=" flex items-center px-4 py-2 rounded-full shadow-lg min-w-[17rem]">
                    <img src="https://via.placeholder.com/30" alt="" />
                    <span className="pl-2">Đạm bảo ánh sáng tốt</span>
                  </button>
                </div>
              </div>

              <button className="btn-primary flex items-center px-4 py-2 rounded-full shadow-lg mt-5">
                <a href="/skin_care_scan">
                  <span className="pl-7 pr-7 text-white font-bold">
                    Tôi đã hiểu
                  </span>
                </a>
              </button>
            </div>
            {/* <div className="col-span-1 p-10 w-5/6">
              <img src={image} alt="" />
            </div> */}
          </div>
        </div>
      </Modal>
    </>
  );
};
export default Hero;
