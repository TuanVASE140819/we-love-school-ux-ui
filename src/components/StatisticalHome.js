import React from "react";
import CountUp from "react-countup";
import { statisticalData } from "../data";
import { useTranslation } from "react-i18next";

import user from "../../src/assets/img/human.png";
import bacsi from "../../src/assets/img/human2.png";
import light from "../../src/assets/img/den.png";
import image from "../../src/assets/img/hinh.png";
import product from "../../src/assets/img/giay.png";

const Statistical = () => {
  const { t } = useTranslation();
  const { title, subtitle, image } = statisticalData;
  return (
    <>
      <section
        className="flex justify-center mb-5 p-1 mt-12 pr-10 pl-10 bg-gray-100 shadow-lg hidden md:flex"
        style={{
          marginLeft: "10%",
          marginRight: "10%",
          borderTopLeftRadius: "5rem",
          borderBottomLeftRadius: "5rem",
          borderTopRightRadius: "5rem",
          borderBottomRightRadius: "5rem",
        }}
      >
        {/* 2000,500,2000,45000000, 20 */}

        <div className="flex items-center py-2 pr-6">
          <img src={user} alt="logo" className="w-10 h-10" />
          <div>
            <div className="text-[0.8rem] font-bold">
              <CountUp end="2000" />+
            </div>
            <div className="text-[0.6rem]">{t("user")}</div>
          </div>
        </div>
        <div className="flex items-center py-2 pr-6">
          <img src={bacsi} alt="logo" className="w-10 h-10" />
          <div>
            <div className="text-[0.8rem] font-bold">
              <CountUp end="500" />+
            </div>
            <div className="text-[0.6rem]">{t("doctor")}</div>
          </div>
        </div>
        <div className="flex items-center py-2 pr-6">
          <img src={light} alt="logo" className="w-10 h-10" />
          <div>
            <div className="text-[0.8rem] font-bold">
              <CountUp end="2000" />+
            </div>
            <div className="text-[0.6rem]">{t("analyzed_image")}</div>
          </div>
        </div>
        <div className="flex items-center py-2 pr-6">
          <img src={user} alt="logo" className="w-10 h-10" />
          <div>
            <div className="text-[0.8rem] font-bold">
              <CountUp end="45000000" />+
            </div>
            <div className="text-[0.6rem]">{t("application")}</div>
          </div>
        </div>
        <div className="flex items-center py-2 pr-6">
          <img src={user} alt="logo" className="w-10 h-10" />
          <div>
            <div className="text-[0.8rem] font-bold">
              <CountUp end="20" />+
            </div>
            <div className="text-[0.6rem]">{t("patented_product")}</div>
          </div>
        </div>
      </section>
      <section className="flex flex-wrap justify-center bg-gray-200 border block md:hidden">
        {/* đừng line màu trắng */}
        <div className="w-full h-[1px] bg-white"></div>
        {statisticalData.map((item, index) => (
          <div className="flex items-center w-1/3" key={index}>
            <img src={item.image} alt="logo" className="w-10 h-10" />
            <div>
              <div className="text-xs font-bold text-gray-500">
                <CountUp end={item.title} />+
              </div>
              <div className=" text-xs text-gray-500">{item.subtitle}</div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};
export default Statistical;
