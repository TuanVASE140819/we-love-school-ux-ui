import React from "react";
import { aboutData, contentInfoData, ruleData } from "../../data";
import { useTranslation } from "react-i18next";
const Rule = () => {
  const { t } = useTranslation();
  return (
    <section className="container mx-auto">
      <div className="p-8 ">
        <h1 className="h3-2 text-orange-500 text-center">
          {t("content_title_3")}
          <span className="text-black">{t("content_title_sub_3")}</span>
        </h1>
      </div>
      {/*  danh sách sẽ nằm trên 1 hàng */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {ruleData.map((item, index) => (
          <div
            className="p-10 sm:p-6 md:p-10 min-w-[5rem] sm:min-w-[7rem] md:min-w-[10rem] zoom border border-orange-500 border-solid rounded-lg"
            key={index}
          >
            <div className="justify-center items-center">
              <div className="flex justify-center items-center">
                <img
                  className="w-20 h-20 sm:w-25 sm:h-25 md:w-30 md:h-30 object-cover"
                  src={
                    item.image ? item.image : "https://via.placeholder.com/300"
                  }
                  alt={item.title}
                />
              </div>
              <div className="flex min-w-[5rem] sm:min-w-[7rem] md:min-w-[10rem] justify-center items-center">
                <div className="font-bold text-xs sm:text-sm md:text-sm lg:text-base text-black text-center">
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

export default Rule;
