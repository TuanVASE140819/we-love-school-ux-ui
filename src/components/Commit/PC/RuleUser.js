import React from "react";
import { ruleDataUser } from "../../../data";

const RuleUser = () => {
  return (
    <section className="container mx-auto hidden md:block">
      <div className="p-8 "></div>
      {/*  danh sách sẽ nằm trên 1 hàng */}
      <div className="flex flex-wrap justify-center">
        {ruleDataUser.map((item, index) => (
          <div
            className="p-4 w-1/6 min-w-[8rem] zoom shadow-2xl
             border-solid mr-2 rounded-lg box-border"
            key={index}
          >
            <div className="justify-center items-center">
              <div className="flex justify-center items-center">
                <img
                  className="w-30 h-30 object-cover"
                  src={
                    item.image ? item.image : "https://via.placeholder.com/300"
                  }
                  alt={item.title}
                />
              </div>
              <div className="flex min-w-[10rem] max-w-[10rem] justify-center items-center">
                <div className="font-bold text-sm text-black text-center">
                  {item.title}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RuleUser;
