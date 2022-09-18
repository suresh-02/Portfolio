import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { SiCss3, SiPython, SiTailwindcss, SiBootstrap } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { DiNpm } from "react-icons/di";
import { FiGithub } from "react-icons/fi";

const Skills = () => {
  return (
    <div id="skill">
      <div className=" w-full mx-auto py-[40px] ">
        <h1 className="text-[#00df9a] font-bold md:text-5xl sm:text-4xl text-3xl md:py-[50px]">
          My Skills
        </h1>
        <div className=" justify-evenly gap-2 px-2 py-4 flex md:flex-2-rows">
          <AiFillHtml5 color="white" size="80px" />
          <SiCss3 color="white" size="80px" />
          <TbBrandJavascript color="white" size="80px" />
          <RiReactjsLine color="white" size="80px" />
          <SiPython color="white" size="80px" />
          <SiTailwindcss color="white" size="80px" />
          <SiBootstrap color="white" size="80px" />
          <DiNpm color="white" size="80px" />
          <FiGithub color="white" size="80px" />
        </div>
        <div className="text-[#00df9a]   text-xl md:text-2xl">
          <h4 className="p-2">Mobile-First,Responsive Design </h4>
          <h4 className="p-2">Platform Independent</h4>
          <h4 className="p-2">Learn - Develop - Execute</h4>
        </div>
      </div>
    </div>
  );
};

export default Skills;
