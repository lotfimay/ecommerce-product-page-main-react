import React from "react";

import logo from "../../assets/logo.svg";
import avatar from "../../assets/image-avatar.png";
import cart from "../../assets/icon-cart.svg";

export const Header = () => {
  return (
    <div className="flex justify-between items-center w-4/5 my-10 mx-auto border-b-2 pb-6 border-gray-200">
      <div className="flex justify-between items-center gap-12">
        <div>
          <img src={logo} alt="" />
        </div>
        <nav>
          <ul className="flex items-center gap-8">
            <li>
              <a href="" className="text-gray-500 pb-11 hover:text-black hover:border-b-4 hover:border-orange-500">Collections</a>
            </li>
            <li>
              <a href="" className="text-gray-500 pb-11 hover:text-black hover:border-b-4 hover:border-orange-500">Men</a>
            </li>
            <li>
              <a href="" className="text-gray-500 pb-11 hover:text-black hover:border-b-4 hover:border-orange-500">Women</a>
            </li>
            <li>
              <a href="" className="text-gray-500 pb-11 hover:text-black hover:border-b-4 hover:border-orange-500">About</a>
            </li>
            <li>
              <a href="" className="text-gray-500 pb-11 hover:text-black hover:border-b-4 hover:border-orange-500">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="flex items-center justify-end ">
        <div className="w-16 h-16 flex justify-center items-center cursor-pointer">
          <img src={cart} alt="cart logo" className="inline-block " />
        </div>
        <div className="w-16 h-16 flex justify-center items-center cursor-pointer">
          <img src={avatar} alt="" />
        </div>
      </div>
    </div>
  );
};
