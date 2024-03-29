import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import about data
import { aboutData, contentInfoData } from "../../data";
import { useTranslation } from "react-i18next";
const Content = () => {
  // destructure about
  //   const { image, title, subtitle } = aboutData;

  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 2000,
  };
  const { t } = useTranslation();
  return (
    <section>
      <div className="p-8 mt-9 container mx-auto hidden md:block">
        {/* title */}
        <h1 className="h3-2 text-center">{t("content_title")}</h1>

        <h1 className="h3-2 text-orange-500 text-center">
          {t("content_title_sub")}
        </h1>

        <Slider {...settings}>
          {contentInfoData.map((item, index) => (
            <div className="p-8  " key={index}>
              <div className="rounded overflow-hidden shadow-lg zoom rounded-2xl">
                <img
                  className="w-96 h-96 object-cover"
                  src={
                    item.image ? item.image : "https://via.placeholder.com/300"
                  }
                  alt={item.title}
                />
                <div className="flex items-center justify-between pb-5 pr-2 pl-2 pt-5">
                  <div className="font-bold text-xl mb-2">{item.title}</div>
                  <button className=" btn-primary flex items-center px-4 py-2 rounded-full">
                    <div className="font-bold text-sm text-white">
                      {t("discover")}
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6 ml-2 text-white"
                      s
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="pt-8 pb-8 mx-auto block md:hidden">
        {/* title */}
        <h1 className="h3-2 text-center">{t("content_title")}</h1>

        <h1 className="h3-2 text-orange-500 text-center">
          {t("content_title_sub")}
        </h1>

        <Slider {...settings}>
          {contentInfoData.map((item, index) => (
            <div className="p-1 relative" key={index}>
              <div className="rounded overflow-hidden shadow-lg zoom">
                <img
                  className="w-50 h-50 object-cover rounded-lg"
                  src={
                    item.image ? item.image : "https://via.placeholder.com/300"
                  }
                  alt={item.title}
                />
                <div className="absolute bottom-0 left-0 w-full flex items-end justify-start text-white p-4">
                  <div className="mr-7 text-[8px]">{item.title}</div>
                  <button className="btn-primary  text-[8px] px-1 rounded-full">
                    Khám phá
                  </button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Content;
