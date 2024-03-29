import React, { useState, useEffect } from "react";
import Modal from "react-modal";

import "../../../../src/page/index.css";
import Webcam from "react-webcam";

const Result = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <section className="container mx-auto flex flex-col items-center justify-center mt-[5rem]">
        <Webcam
          className="rounded-lg p-1 shadow-lg border-2 border-gray-200 h-96 w-96"
          audio={false}
          height={400}
          screenshotFormat="image/jpeg"
          width={400}
          videoConstraints={{
            facingMode: "user",
          }}
        />
        <div className="mt-5 space-x-5 flex justify-center">
          <button className="px-10 py-2 border rounded-full shadow min-w-[10rem]">
            ScreenShot
          </button>
          <button className="px-10 py-2 border rounded-full shadow min-w-[10rem]">
            Upload
          </button>
        </div>

        <div class="grid grid-cols-3 gap-4 justify-items-start">
          <div class="grid grid-rows-2">
            <div class="font-bold text-xl">
              24
              <span className="text-gray-400 text-base"> year old</span>
            </div>
            <div class="font-base text-xl">Skin</div>
          </div>
          <div className="flex items-center justify-center text-xl font-bold">
            7/10
          </div>
          <div className="flex items-center justify-center text-sm font-bold animated-text text-orange-500">
            <button onClick={openModal}>Nguyên nhân & Giải pháp</button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={{
                // overlay: {
                //   backgroundColor: 'rgba(0, 0, 0, 0.5)'
                // },
                content: {
                  top: "50%",
                  left: "50%",
                  right: "auto",
                  bottom: "auto",
                  marginRight: "-50%",
                  transform: "translate(-50%, -50%)",
                  padding: "2rem",
                  borderRadius: "10px",
                  width: "50%",
                  height: "50%",
                },
              }}
            >
              <h2>Nguyên nhân</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                pharetra, elit nec ultrices tincidunt, tortor nisl aliquam nisl,
                nec aliquam justo nunc ac nunc. Nunc pharetra, elit nec ultrices
                tincidunt, tortor nisl aliquam nisl, nec aliquam justo nunc ac
                nunc. Nunc pharetra, elit nec ultrices tincidunt, tortor nisl
                aliquam nisl, nec aliquam justo nunc ac nunc.
              </p>
              <h2>Giải pháp</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                pharetra, elit nec ultrices tincidunt, tortor nisl aliquam nisl,
                nec aliquam justo nunc ac nunc. Nunc pharetra, elit nec ultrices
                tincidunt, tortor nisl aliquam nisl, nec aliquam justo nunc ac
                nunc. Nunc pharetra, elit nec ultrices tincidunt, tortor nisl
                aliquam nisl, nec aliquam justo nunc ac nunc.
              </p>
              <button onClick={closeModal}>Close</button>
            </Modal>
          </div>
        </div>
        <div className=" bg-white mt-5 p-5 rounded-lg shadow-lg ">
          <div class="grid grid-cols-2 gap-4 mt-5">
            <div class="flex items-center">
              <div class="h-5 w-5 bg-pink-500 rounded-full mr-5"></div>
              <span className="font-bold text-sm">Mụn đầu đen</span>
            </div>

            <div className="text-xl font-bold text-center">5/10</div>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-5">
            <div class="flex items-center">
              <div class="h-5 w-5 bg-red-500 rounded-full mr-5"></div>
              <span className="font-bold text-sm">Nếp nhăn</span>
            </div>

            <div className="text-xl font-bold text-center">5/10</div>
          </div>
          <div class="grid grid-cols-2 gap-4 mt-5">
            <div class="flex items-center">
              <div class="h-5 w-5 bg-purple-500 rounded-full mr-5"></div>
              <span className="font-bold text-sm">Màu da</span>
            </div>

            <div className="text-xl font-bold text-center">5/10</div>
          </div>

          <div class="grid grid-cols-2 gap-4 mt-5">
            <div class="flex items-center">
              <div class="h-5 w-5 bg-green-500 rounded-full mr-5"></div>
              <span className="font-bold text-sm">Da dầu</span>
            </div>

            <div className="text-xl font-bold text-center">5/10</div>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold mt-5">Thang đo mức độ mụn</h1>

          <div
            className="relative w-full h-5 rounded-full mt-5"
            style={{
              background: "linear-gradient(to right, yellow, orange)",
            }}
          >
            <div className="absolute top-0 left-1/4 text-center transform -translate-y-full">
              1
            </div>
            <div className="absolute top-0 left-1/2 text-center transform -translate-y-full">
              2
            </div>
            <div className="absolute top-0 left-3/4 text-center transform -translate-y-full">
              3
            </div>
            <div className="absolute h-full w-px bg-white left-1/4"></div>
            <div className="absolute h-full w-px bg-white left-1/2"></div>
            <div className="absolute h-full w-px bg-white left-3/4"></div>
            <div
              className="absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-white rounded-full cursor-pointer"
              style={{ left: "30%" }}
            ></div>
          </div>

          <div className="flex justify-between mt-5 font-bold">
            <span>Your Grade</span>
          </div>
        </div>
        <div class="flex-1 h-[30rem] overflow-x-auto p-5 m-5  bg-white rounded-lg shadow-lg">
          <h1>Phân tích</h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            pharetra, elit nec ultrices tincidunt, tortor nisl aliquam nisl, nec
            aliquam justo nunc ac nunc. Nunc pharetra, elit nec ultrices
            tincidunt, tortor nisl aliquam nisl, nec aliquam justo nunc ac nunc.
            Nunc pharetra, elit nec ultrices tincidunt, tortor nisl aliquam
            nisl, nec aliquam justo nunc ac nunc.
          </p>
          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            pharetra, elit nec ultrices tincidunt, tortor nisl aliquam nisl, nec
            aliquam justo nunc ac nunc. Nunc pharetra, elit nec ultrices
            tincidunt, tortor nisl aliquam nisl, nec aliquam justo nunc ac nunc.
            Nunc pharetra, elit nec ultrices tincidunt, tortor nisl aliquam
            nisl, nec aliquam justo nunc ac nunc.
          </p>
          <h1>Nguyên nhân</h1>
          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            pharetra, elit nec ultrices tincidunt, tortor nisl aliquam nisl, nec
            aliquam justo nunc ac nunc. Nunc pharetra, elit nec ultrices
            tincidunt, tortor nisl aliquam nisl, nec aliquam justo nunc ac nunc.
            Nunc pharetra, elit nec ultrices tincidunt, tortor nisl aliquam
            nisl, nec aliquam justo nunc ac nunc.
          </p>
          <p className="mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            pharetra, elit nec ultrices tincidunt, tortor nisl aliquam nisl, nec
            aliquam justo nunc ac nunc. Nunc pharetra, elit nec ultrices
            tincidunt, tortor nisl aliquam nisl, nec aliquam justo nunc ac nunc.
            Nunc pharetra, elit nec ultrices tincidunt, tortor nisl aliquam
            nisl, nec aliquam justo nunc ac nunc.
          </p>
        </div>
      </section>
    </>
  );
};
export default Result;
