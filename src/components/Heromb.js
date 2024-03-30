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
      <div>Chưa có nội dung chính cho trang này</div>
    </>
  );
};
export default Hero;
