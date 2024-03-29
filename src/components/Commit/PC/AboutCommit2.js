import React from "react";

// import about data
import { InforBanner2, InforBanner, InforBanner3 } from "../../../data";

const AboutCommit2 = () => {
  // destructure about
  const { image, title1, title2, title3, subtitle } = InforBanner2;
  const { image1, title11, title21, title31, subtitle1 } = InforBanner3;
  return (
    <section
      className="my-[30px] xl:mt-[100px]"
      data-aos="fade-up"
      data-aos-offset="350"
    >
      <div className="container mx-auto">
        <div className="rounded-[50px] min-h-[560px] px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0">
          <div className="flex-1 xl:pr-12">
            <h2
              className="text-2xl text-orange-500"
              // data-aos="fade-up"
              // data-aos-delay="300"
            >
              {title11}
            </h2>
            <h2
              className="h2 text-4xl font-bold"
              // data-aos="fade-up"
              // data-aos-delay="300"
            >
              {title21}
              <span className="text-4xl text-orange-500 font-bold">
                {title31}
              </span>
            </h2>
            {/* <h2
              // cỡ chữ 2xl
              className="text-2xl mb-5"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {title3}
            </h2> */}
            <p
              className="max-w-[474px] mx-auto xl:mx-0"
              // data-aos="fade-up"
              // data-aos-delay="400"
            >
              {subtitle1}
            </p>
          </div>
          <div className="flex-1" data-aos="zoom-in-right">
            <img src={image1} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCommit2;
