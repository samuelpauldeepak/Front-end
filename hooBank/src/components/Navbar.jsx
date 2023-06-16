import React, { useState } from "react";
import { logo, close, menu } from "../assets";
import { navLinks } from "../constants";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="navbar flex justify-between items-center py-6 w-full">
      <img src={logo} alt="logo" className=" w-[124px] h-[32px]" />
      <ul className=" list-none sm:flex hidden   justify-end items-center">
        {navLinks.map((item, index) => (
          <li
            key={item.id}
            className={`font-poppins cursor-pointer flex-1 text-white font-normal text-[16px] 
           ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
          >
            <a href={`#${item.id}`}>{item.title}</a>
          </li>
        ))}
      </ul>
      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt="toggle button"
          className="object-contain cursor-pointer w-[26px] h-[26px]"
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } p-6 bg-black-gradient min-w-[140px] rounded-xl absolute top-20 right-0 mx-4 my-2 sidebar`}
        >
          <ul className=" list-none  flex flex-col justify-center items-start">
            {navLinks.map((item, index) => (
              <li
                key={item.id}
                className={`font-poppins cursor-pointer flex-1 text-white font-normal text-[16px] 
           ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
              >
                <a href={`#${item.id}`}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
