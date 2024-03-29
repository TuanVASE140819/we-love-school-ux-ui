import React from "react";

// import about data
import { CommitBanner2 } from "../../../data";

const AboutCommit = () => {
  // destructure about
  const { image, title1, title2, title3, subtitle } = CommitBanner2;
  return (
    <section
      className="my-[50pt] xl:mt-[100px]"
      data-aos="fade-up"
      data-aos-offset="350"
    >
      <div className="container mx-auto">
        <div className="rounded-[50px] min-h-[560px] px-12 pb-12 flex flex-col text-center xl:flex-row xl:items-center xl:text-left  xl:gap-x-[60px] xl:pb-0">
          <div className="flex-1" data-aos="zoom-in-right">
            <img src={image} alt="" />
          </div>
          <div className="flex-1 xl:pr-12">
            <h2
              className="h2 text-4xl text-orange-500 font-bold"
              // data-aos="fade-up"
              // data-aos-delay="300"
            >
              Hiểu Quả
              <span
                className="text-4xl  font-bold
                          text-black"
              >
                {" "}
                Chứng Minh
              </span>
            </h2>
            <h2
              // cỡ chữ 2xl
              className="text-2xl mb-5"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Sức khỏe làn da bắt đầu với thành phần và công nghệ đã được kiển
              chứng
            </h2>
            <p
              className="max-w-[474px] mx-auto xl:mx-0"
              // data-aos="fade-up"
              // data-aos-delay="400"
            >
              Spotcan chứng minh rằng việc lựa chọn name sẽ là giải pháp tốt
              nhất dành cho làn da thông qua trí tuệ nhân tạo và sản phẩn cung
              cấp đã được kiểm duyệt, và thử nghiệm an toàn trên cơ thể
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCommit;
