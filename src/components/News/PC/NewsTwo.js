import React from "react";
import { NewsTwoData } from "../../../data";

import Model4 from "../../../assets/img/model/model4.png";
import Model5 from "../../../assets/img/model/model5.png";
import Model6 from "../../../assets/img/model/model6.png";
// Bannernew
import Bannernew from "../../../assets/img/News/Bannernew.png";
const NewsTwo = () => {
  return (
    <section className="container mx-auto grid grid-cols-10">
      <div className="col-span-7 mr-5">
        {NewsTwoData.map((item, index) => (
          <div
            key={index}
            className="flex shadow mb-3 bg-slate-100 "
            style={{
              borderRadius: "2rem",
              overflow: "hidden",
            }}
          >
            <div style={{ flex: 0.25 }}>
              <img
                className="w-full h-[13rem] object-cover"
                src={item.image}
                alt=""
              />
            </div>
            <div className="pt-4 pr-1 pl-1" style={{ flex: 0.75 }}>
              <h1 className="text-sm font-bold text-black">{item.title}</h1>
              <p className="text-sm text-gray-500">{item.content}</p>
              <div className="flex items-center gap-x-4 p-4">
                <div>
                  <img
                    className="w-10 h-10 rounded-full object-cover"
                    src={item.avatar}
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="text-black">{item.name}</h1>
                  <p className="text-gray-500">{item.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="col-span-3">
        <img
          className="w-full object-cover cursor-pointer rounded-lg"
          src={Bannernew}
          alt=""
        />
      </div>
    </section>
  );
};

export default NewsTwo;
