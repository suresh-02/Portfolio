import React, { useEffect } from "react";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [nav, setNav] = useState(false);
  const HandleNav = () => {
    setNav(!nav);
  };

  const [selected, setSelected] = useState(window.location.hash.substr(1));
  useEffect(() => {
    const handleHashChange = () => {
      const newId = window.location.hash.substr(1);
      setSelected(newId);
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  });
  return (
    <div className="header">
      <h1 className="logo">SH</h1>
      <ul>
        <a href="#home" className={selected === "home" ? "active" : ""}>
          Home
        </a>
        <a href="#about" className={selected === "about" ? "active" : ""}>
          About
        </a>
        <a href="#skills" className={selected === "skills" ? "active" : ""}>
          Skills
        </a>
        <a href="#interest" className={selected === "interest" ? "active" : ""}>
          Interests
        </a>
        <a href="#works" className={selected === "works" ? "active" : ""}>
          Works
        </a>
        <a
          href="#education"
          className={selected === "education" ? "active" : ""}
        >
          Academics
        </a>
      </ul>
      <div onClick={HandleNav} className=" flex justify-center  md:hidden">
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
          <h1 className="logo">SH</h1>
          <div onClick={HandleNav} className="block md:hidden">
            {!nav ? (
              <AiOutlineMenuUnfold color="white" size={30} />
            ) : (
              <AiOutlineClose color="white" size={30} />
            )}
          </div>
        </div>

        <div className="slide-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#interest">Interests</a>
          <a href="#works">Works</a>
          <a href="#education">Academics</a>
        </div>
      </div>
    </div>
  );
};

export default Header;
