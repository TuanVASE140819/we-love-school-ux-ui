import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import about data
import { aboutData, contentInfoData, productInfoData } from "../../data";

// import css
import "../../page/index.css";
// import  nút
import Next from "../../../src/assets/img/button/next.png";
import Prev from "../../../src/assets/img/button/prev.png";

import Modal from "react-modal";

import { useTranslation } from "react-i18next";
const Product = () => {
  // destructure about
  //   const { image, title, subtitle } = aboutData;
  const [selectedProduct, setSelectedProduct] = useState(null);
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <img
        src={Next}
        alt="next"
        className={className}
        style={{ ...style, display: "block", width: "50px", height: "50px" }}
        onClick={onClick}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <img
        src={Prev}
        alt="prev"
        className={className}
        style={{ ...style, display: "block", width: "50px", height: "50px" }}
        onClick={onClick}
      />
    );
  };
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setSelectedProduct(null);
  };

  const settings = {
    // dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    centerPadding: "1rem", // add padding
    responsive: [
      {
        breakpoint: 480, // breakpoint from where the settings should change
        settings: {
          slidesToShow: 2, // slides to show on mobile
          slidesToScroll: 1, // slides to scroll on mobile
          arrows: false,
          // centerMode: true,
          centerPadding: "1px",
          nextArrow: false,
          prevArrow: false,
        },
      },
    ],
  };

  const { t } = useTranslation();
  return (
    <>
      {/* chi khi ở màn hình pc thì mới hiện p-8 mx-auto container-product còn ở màn hình mobile thì không hiện */}
      <section className="p-8 mx-auto container hidden md:block">
        <h1 className="h3-2 text-center">{t("content_title_1")}</h1>
        <h1 className="h3-2 text-orange-500 text-center">
          {t("content_title_sub_1")}
        </h1>
        <div>
          <Slider {...settings}>
            {productInfoData.map((item, index) => (
              <div
                className="p-3"
                key={index}
                onClick={() => handleProductClick(item)}
              >
                <div className="rounded overflow-hidden shadow-lg zoom">
                  <div className="flex items-center justify-between pb-5 pr-2 pl-2">
                    <img
                      className="w-2/6"
                      src={
                        item.image
                          ? item.image
                          : "https://via.placeholder.com/300"
                      }
                      alt="Sunset in the mountains"
                    />

                    <div className="flex flex-col items-center justify-between pb-5 pr-2 pl-2">
                      <div className="font-bold text-xs mb-2">{item.title}</div>
                      <div className="text-xs">
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section className="p-8 mx-auto container hidden md:block">
        <h1 className="h3-2 text-center">{t("content_title_2")}</h1>
        <h1 className="h3-2 text-orange-500 text-center">
          {t("content_title_sub_2")}
        </h1>
        <div>
          <Slider {...settings}>
            {productInfoData.map((item, index) => (
              // dùng flex chia 2 cột
              <div
                className="p-3"
                key={index}
                onClick={() => handleProductClick(item)}
              >
                <div className="rounded overflow-hidden shadow-lg zoom">
                  <div className="flex items-center justify-between pb-5 pr-2 pl-2">
                    <img
                      className="w-2/6"
                      src={
                        item.image
                          ? item.image
                          : "https://via.placeholder.com/300"
                      }
                      alt="Sunset in the mountains"
                    />

                    <div className="flex flex-col items-center justify-between pb-5 pr-2 pl-2">
                      <div className="font-bold text-xs mb-2">{item.title}</div>
                      <div className="text-xs">
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section className="block md:hidden">
        <h1 className="h3-2 text-center mt-5">Khám Phá Sản Phẩm</h1>
        <h1 className="h3-2 text-orange-500 text-center mb-5">Trị Mụn</h1>
        <div>
          <Slider {...settings}>
            {productInfoData.map((item, index) => (
              <div
                className="pt-5 p-1"
                key={index}
                onClick={() => handleProductClick(item)}
              >
                <div className="rounded overflow-hidden shadow-lg zoom">
                  <div className="flex items-center justify-between pb-5 pr-2 pl-2">
                    <img
                      className="w-2/6"
                      src={
                        item.image
                          ? item.image
                          : "https://via.placeholder.com/300"
                      }
                      alt="Sunset in the mountains"
                    />

                    <div className="flex flex-col items-center justify-between pb-5 pr-2 pl-2">
                      <div className="font-bold text-xs mb-2">{item.title}</div>
                      <div className="text-xs">
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      <section className="block md:hidden">
        <h1 className="h3-2 text-center mt-5">Khám Phá Sản Phẩm Cải Thiện</h1>
        <h1 className="h3-2 text-orange-500 text-center mb-5">
          Làn Da Lão Hóa
        </h1>
        <div>
          <Slider {...settings}>
            {productInfoData.map((item, index) => (
              // dùng flex chia 2 cột
              <div
                className="pt-7 p-1"
                key={index}
                onClick={() => handleProductClick(item)}
              >
                <div className="rounded overflow-hidden shadow-lg zoom">
                  <div className="flex items-center justify-between pb-5 pr-2 pl-2">
                    <img
                      className="w-2/6"
                      src={
                        item.image
                          ? item.image
                          : "https://via.placeholder.com/300"
                      }
                      alt="Sunset in the mountains"
                    />

                    <div className="flex flex-col items-center justify-between pb-5 pr-2 pl-2">
                      <div className="font-bold text-xs mb-2">{item.title}</div>
                      <div className="text-xs">
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {selectedProduct && (
        <Modal
          isOpen={selectedProduct}
          onRequestClose={handleCloseModal}
          style={{
            content: {
              top: "50%",
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
          <div className="bg-blue-50 w-[50rem] h-[30rem] rounded-3xl overflow-hidden border border-orange-500">
            <div className="grid grid-cols-4">
              <div className="col-span-1">
                <img
                  className="w-full"
                  src={
                    selectedProduct.image
                      ? selectedProduct.image
                      : "https://via.placeholder.com/300"
                  }
                  alt="Sunset in the mountains"
                />
              </div>
              <div className="col-span-3 p-8 h-20">
                <img
                  src="https://ckdvietnam.com/assets/images/logo.png"
                  className="w-20 mb-4"
                  alt="logo"
                />
                <h2 className="text-2xl font-bold mb-4">
                  {selectedProduct.title}
                </h2>
                <p className="text-gray-500  text-xl">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.
                </p>
                <button
                  className="bg-orange-500
                 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
                >
                  Tìm cửa hàng
                </button>
                {/* Add the store locator button here */}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Product;
