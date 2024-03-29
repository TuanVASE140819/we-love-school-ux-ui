import React from "react";
import { KeywordData } from "../../../data";

const Keyword = () => {
  return (
    <section className="container mx-auto mt-20 pt-8">
      <div className="">
        <h1 className="h3-2 text-center">Từ khóa</h1>
      </div>
      {/*  danh sách sẽ nằm trên 1 hàng */}

      <div className="flex flex-wrap justify-start">
        {KeywordData.map((item, index) => (
          <div key={index}>
            <button className="p-2 bg-gray-100 m-3 hover:bg-gray-200 rounded-lg">
              #{item.title}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Keyword;
