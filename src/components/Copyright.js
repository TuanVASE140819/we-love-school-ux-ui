import React from 'react';

// import copyright data
// import css
import '../../src/index.css';
import { copyrightData } from '../data';

const Copyright = () => {
  // destructure copyright data
  const { text, icon } = copyrightData;
  return (
    <section className="py-3 bg-[#3D92D1] text-white">
      {/* căn giữa */}
      <div className="container mx-auto text-center">
        Bản quyền © Name Đảm bảo, Đã đăng ký Bản quyền
      </div>
    </section>
  );
};

export default Copyright;
