import React from "react";
import { KeywordData } from "../../../data";

import News4 from "../../../assets/img/News/New4.png";
import News5 from "../../../assets/img/News/New5.png";
import News6 from "../../../assets/img/News/New6.png";

const NewsOne = () => {
  return (
    <section className="container mx-auto">
      <div className="">
        <h1 className="h3-2 text-center my-5">Mới Nhất</h1>
      </div>
      <div className="grid grid-cols-5 gap-4">
        <div className="col-span-3">
          <div className="flex flex-col gap-y-4">
            <div
              className="shadow border rounded-2xl bg-gray-100"
              style={{
                borderRadius: "rem",
                overflow: "hidden",
              }}
            >
              <div>
                <img
                  className="w-full h-[23.4rem] object-cover cursor-pointer "
                  src={News4}
                  alt=""
                />
              </div>
              <div className="p-4">
                <span className="text-orange-500 text-sm font-bold p-2">
                  #Lorem, #ipsum, #dolor
                </span>
                <div className="pr-4 pl-4">
                  <h1 className="h3-2 text-black">
                    Collagen Hàn quốc có tốt không?
                  </h1>
                  <p className="text-gray-500 text-sm">
                    Collogen Hàn Quốc là chìa khóa cho làn da khỏe mạnh và trẻ
                    trung,Sản phẩm của chúng tôi, nhập khẩu trực tiếp tù Hàn
                    Quốc, Đem lại những lợi ích độc đáo với khả năng tái tạo làn
                    da, cải thiện đàn hồi và làm giảm...
                  </p>
                </div>
                {/* avatar */}
                <div className="flex items-center gap-x-4 p-4">
                  <div>
                    <img
                      className="w-10 h-10 rounded-full object-cover"
                      src="https://via.placeholder.com/300"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-sm text-black font-bold">Diễm Kiều</h1>
                    <p className="text-sm text-gray-500">20/01/2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="flex flex-col gap-y-4">
            <div
              className="flex shadow bg-slate-100"
              style={{
                borderRadius: "2rem",
                overflow: "hidden",
              }}
            >
              <div style={{ flex: 1 }}>
                <img
                  className="w-full h-[18rem] object-cover"
                  src={News5}
                  alt=""
                />
              </div>
              <div className="pt-4 pr-1 pl-1" style={{ flex: 1 }}>
                <span className="text-orange-500 text-sm font-bold p-2">
                  #Lorem, #ipsum, #dolor
                </span>
                <h1 className="text-sm font-bold text-black">
                  {" "}
                  Serum collagen - chìa khóa làn da khỏe mạnh và trẻ trung
                </h1>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nemo, quas. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Nemo, quas.
                </p>
                <div className="flex items-center gap-x-4 p-4">
                  <div>
                    <img
                      className="w-10 h-10 rounded-full object-cover"
                      src="https://via.placeholder.com/300"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-black">Nguyễn Văn A</h1>
                    <p className="text-gray-500">20/10/2021</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex shadow bg-slate-100"
              style={{
                borderRadius: "2rem",
                overflow: "hidden",
              }}
            >
              <div style={{ flex: 1 }}>
                <img
                  className="w-full h-[18rem] object-cover"
                  src={News5}
                  alt=""
                />
              </div>
              <div className="pt-4 pr-1 pl-1" style={{ flex: 1 }}>
                <span className="text-orange-500 text-sm font-bold p-2">
                  #Lorem, #ipsum, #dolor
                </span>
                <h1 className="text-sm font-bold text-black">
                  {" "}
                  Serum collagen - chìa khóa làn da khỏe mạnh và trẻ trung
                </h1>
                <p className="text-sm text-gray-500">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Nemo, quas. Lorem ipsum dolor sit amet, consectetur
                  adipisicing elit. Nemo, quas.
                </p>
                <div className="flex items-center gap-x-4 p-4">
                  <div>
                    <img
                      className="w-10 h-10 rounded-full object-cover"
                      src="https://via.placeholder.com/300"
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="text-black">Nguyễn Văn A</h1>
                    <p className="text-gray-500">20/10/2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsOne;
