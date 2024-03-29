import React from 'react';

// import footer data
import { footerData } from '../data';

// import components
import Copyright from './Copyright';
import { Input } from "postcss";
import logo3 from "../assets/img/WLS/Logo.png";
const Footer = () => {
  // destructure footer data
  const {
    logo,
    address,
    email,
    content,
    phone,
    list1,
    list2,
    list3,
    socialList,
  } = footerData;
  return (
    <>
      <footer
        className="mt-20 hidden md:block  pt-10 border-t-2 border-[#3D92D1] bg-slate-100
      "
      >
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row text-center xl:text-left gap-y-12">
            {/* info */}
            <div className="w-[40%] mx-auto flex flex-col items-center xl:items-start">
              {/* logo */}
              <img src={logo3} alt="logo" width={200} />
              {/* address */}

              {/* email */}
              <div className="font-light italic mt-5 text-primary1 pr-10">
                {/* số điên thoại và gmail */}
                <span className="text-primary">Phone:</span>
                <span>{phone}</span>
              </div>
              <div className="font-light italic mb-5 text-primary1 pr-10">
                {/* số điên thoại và gmail */}
                <span className="text-primary">Gmail:</span>
                <span>{email}</span>
              </div>
            </div>
            {/* lists */}
            <div className="flex flex-1 flex-col gap-y-14 xl:flex-row justify-between">
              <div>
                <div className="font-extrabold text-primary mb-8">About Us</div>
                <ul className="flex flex-col gap-y-4">
                  {list1.map((item, index) => {
                    return (
                      <li key={index}>
                        <a className="text-primary" href={item.href}>
                          {item.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* list 1 */}
              <div>
                <div className="font-extrabold text-primary mb-8">
                  Chính sách
                </div>
                <ul className="flex flex-col gap-y-4">
                  {list2.map((item, index) => {
                    return (
                      <li key={index}>
                        <a className="text-primary" href={item.href}>
                          {item.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* list 2 */}
              <div>
                <div className="font-extrabold text-primary mb-8">Social</div>
                <ul className="flex flex-col gap-y-4">
                  {/* svg  facebook , instagram, tiktok , shoppee */}

                  {list3.map((item, index) => {
                    return (
                      <li key={index}>
                        <a className="text-primary" href={item.href}>
                          {item.name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
              {/* social list */}
              <div className="w-[10%] "></div>
            </div>
          </div>
        </div>
        <Copyright />
      </footer>
    </>
  );
};

export default Footer;
