import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import about data
import { contentNewsData } from "../../data";

import Next from "../../../src/assets/img/button/next.png";
import Prev from "../../../src/assets/img/button/prev.png";

// import css
import "../../page/index.css";

const News = () => {
  // destructure about
  //   const { image, title, subtitle } = aboutData;
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
const settings = {
  // dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 768, // this means below 768px viewport width
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

return (
  <section className="container-new mx-auto my-5">
    <div className="">
      {/* title */}
      <h1 className="h3-2 text-center">Hiểu Làn Da Của Bạn Hơn</h1>

      <Slider {...settings}>
        {contentNewsData.map((item, index) => (
          <div className="p-3 " key={index}>
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow ">
              <img
                className="w-full border-b border-r rounded-lg"
                src={
                  item.image ? item.image : "https://via.placeholder.com/300"
                }
                alt={item.title}
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <div className="mb-2 text-sm text-primary1">{item.tag}</div>
                <h5 className="mb-2 text-sm md:text-sm font-bold tracking-tight text-gray-900">
                  {item.title.length > 40
                    ? item.title.substring(0, 40) + "..."
                    : item.title}
                </h5>
                <p className="mb-3 text-sm md:text-base font-normal text-gray-700">
                  {item.content.length > 100
                    ? item.content.substring(0, 100) + "..."
                    : item.content}
                </p>
                {/* avatar và date */}
                <div className="flex items first-letter:capitalize">
                  <img
                    className="w-5 h-5 md:w-10 md:h-10 rounded-full"
                    src={item.avatar}
                    alt="Avatar of Jonathan Reinink"
                  />
                  <div className="flex flex-col ml-2">
                    <p className="text-xs font-semibold text-gray-900">
                      {item.customerName}
                    </p>
                    <p className="text-xs font-normal text-gray-700">
                      {item.date}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  </section>
);
};

export default News;

