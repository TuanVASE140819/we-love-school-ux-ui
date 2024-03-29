import React from "react";

// import about data
import { aboutData, InforBanner } from "../data";
import CountUp from "react-countup";
const About1 = () => {
  // destructure about
  const { image, title1, title2, title3, subtitle } = InforBanner;
  return (
    <section
      className="my-[30px] xl:mt-[100px]"
      // data-aos="fade-up"
      // data-aos-offset="350"
    >
      <div className="container mx-auto">
        <div className="bg-gray-200 rounded-[50px] min-h-[560px] px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0">
          <div className="flex-1 xl:pr-12">
            <h2
              className="text-2xl"
              // data-aos="fade-up"
              // data-aos-delay="300"
            >
              {title1}
            </h2>
            <h2
              className="h2 text-6xl text-orange-500 font-bold"
              // data-aos="fade-up"
              // data-aos-delay="300"
            >
              <CountUp end="65" /> Triệu
            </h2>
            <h2
              // cỡ chữ 2xl
              className="text-2xl mb-5"
              // data-aos="fade-up"
              // data-aos-delay="300"
            >
              {title3}
            </h2>
            <p
              className="max-w-[474px] mx-auto xl:mx-0"
              // data-aos="fade-up"
              // data-aos-delay="400"
            >
              {subtitle}
            </p>
          </div>
          <div
            className="flex-1"
            // data-aos="zoom-in-right"
          >
            <img src={image} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About1;
