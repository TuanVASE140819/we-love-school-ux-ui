import React from 'react';

// import navigation data
import { useTranslation } from "react-i18next";
const Nav = () => {
  const { t } = useTranslation();
  return (
    <nav>
      <ul className="flex gap-x-8">
        <li>
          <a href="/">Trang Chủ</a>
        </li>
        <li>
          <a href="/">Bạn Bè</a>
        </li>
        <li>
          <a href="/">Hội Nhóm</a>
        </li>
        <li>
          <a href="/">Tìm kiếm</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
