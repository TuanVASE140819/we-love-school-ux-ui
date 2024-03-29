import React from "react";
import CountUp from "react-countup";
import { statisticalData } from "../data";

const Statistical = () => {
  // destructure hero
  const { title, subtitle, image } = statisticalData;
  return (
    <>
      <section
        className="flex justify-center mb-5 p-1 pr-10 pl-10 bg-gray-100 shadow-lg hidden md:flex"
        style={{
          marginLeft: "10%",
          marginRight: "10%",
          borderTopLeftRadius: "5rem",
          borderBottomLeftRadius: "5rem",
          borderTopRightRadius: "5rem",
          borderBottomRightRadius: "5rem",
        }}
      >
        {statisticalData.map((item, index) => {
          return (
            <div className="flex items-center  " key={index}>
              <img src={item.image} alt="logo" className="w-10 h-10" />
              <div>
                <div className="text-sm font-bold">
                  <CountUp end={item.title} />+
                </div>
                <div>{item.subtitle}</div>
              </div>
            </div>
          );
        })}
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
