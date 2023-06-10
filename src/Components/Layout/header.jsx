import React from "react";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [nav, setNav] = useState(false);

  const HandleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex items-center fixed p-4 bg-black justify-between mx-auto  px-4  w-full top-0  z-20">
      <h1 className=" bg-[#00df9a] text-4xl font-bold p-[3px] text-black">
        SH
      </h1>

      <ul className="text-white   hidden md:flex ">
        <a href="#home" className="p-4 text-[#eb5939] border-b-[#00df9a] ">
          Home
        </a>
        <a href="#about" className="p-4 text-[#eb5939]  border-b-[#00df9a]">
          About
        </a>
        <a href="#skills" className="p-4 text-[#eb5939] border-b-[#00df9a]">
          Skills
        </a>
        <a href="#intrest" className="p-4  text-[#eb5939] border-b-[#00df9a] ">
          Intrests
        </a>
        <a href="#works" className="p-4 text-[#eb5939] border-b-[#00df9a]">works</a>
        <a href="#education" className="p-4 text-[#eb5939] border-b-[#00df9a]">
          Education
        </a>
      </ul>
      <div onClick={HandleNav} className="block md:hidden">
        {!nav ? <AiOutlineMenuUnfold color="white" size={20} /> : ""}``
      </div>
      <div
        className={
          nav
            ? "fixed left-0 text-white md:hidden top-0 border-r border-b border-b-gray-900 border-r-gray-900 w-[100%] text-left  ml-0 p-2 h-max-content bg-[#000300] ease-in-out duration-500"
            : " fixed left-[-100%]"
        }
      >
        <div className="flex items-center justify-between">
        <h1 className=" bg-[#00df9a] w-max-content px-auto text-4xl font-bold py-[18px] text-black">
        SH
      </h1>
          <div onClick={HandleNav} className="block md:hidden">
            {!nav ? (
              <AiOutlineMenuUnfold color="#eb5939" size={40} />
            ) : (
              <AiOutlineClose color="#eb5939" size={40} />
            )}
          </div>
        </div>

        <div className="uppercase font-bold flex flex-col   ">
          <a href="#home" className="p-4 text-[#eb5939] border-b border-b-gray-700 ">
            Home
          </a>
          <a href="#about" className="p-4 text-[#eb5939] border-b border-b-gray-700 ">
            About
          </a>
          <a href="#skills" className="p-4 text-[#eb5939] border-b border-b-gray-700">
            Skills
          </a>
          <a href="#intrest" className="p-4 text-[#eb5939] border-b  border-b-gray-700">
            Intrests
          </a>
          <a href="#intrest" className="p-4 text-[#eb5939] border-b  border-b-gray-700">
            Works
          </a>
          <a href="#education" className="p-4 text-[#eb5939] border-b-gray-700">
            Education
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
