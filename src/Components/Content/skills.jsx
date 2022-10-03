import React from "react";
import { AiOutlineHtml5 } from "react-icons/ai";
import { SiCss3, SiPython, SiTailwindcss, SiBootstrap } from "react-icons/si";
import { TbBrandJavascript } from "react-icons/tb";
import { RiReactjsLine } from "react-icons/ri";
import { DiNpm } from "react-icons/di";
import { FiGithub } from "react-icons/fi";

const Skills = () => {
  return (
    <div id="skill">
      <h1 className="text-[#00df9a] font-bold md:text-5xl sm:text-4xl text-3xl md:py-[50px]">
        Skills
      </h1>
      <div className=" max-w-max mx-auto text-start">
        {/* md:flex-2-cols */}
        <div className=" justify-center gap-2 px-2 py-4 items-center ">
          <div className="grid  grid-rows-5">
            <div className="flex mt-4 items-center  gap-[200px] span-2">
              <h1 className="text-[#00df9a] font-bold text-2xl">Web Tools</h1>
              <AiOutlineHtml5 color="white" size="80px" />
              <SiCss3 color="white" size="67px" />
            </div>
            <div className="flex mt-4 items-center gap-[200px]">
              <h1 className="text-[#00df9a] font-bold text-2xl"> Languages</h1>
              <TbBrandJavascript color="white" size="80px" />
              <SiPython color="white" size="80px" />
            </div>
            <div className="flex mt-4 items-center gap-[200px]">
              <h1 className="text-[#00df9a] font-bold text-2xl">
                {" "}
                CSS
                <br /> Frameworks
              </h1>
              <SiTailwindcss color="white" size="80px" />
              <SiBootstrap color="white" size="80px" />
            </div>

            <div className="flex mt-4 items-center gap-[200px]">
              <h1 className="text-[#00df9a] font-bold text-2xl">
                {" "}
                Web <br /> Frameworks
              </h1>
              <RiReactjsLine color="white" size="80px" />
              <DiNpm color="white" size="80px" />
            </div>
            <div className="flex mt-4 items-center gap-[200px]">
              <h1 className="text-[#00df9a] font-bold text-2xl">
                {" "}
                Version Control <br />
                Tools
              </h1>
              <FiGithub color="white" size="80px" />
            </div>
          </div>
          {/* <div className="text-[#00df9a]   text-xl md:text-2xl">
          <h4 className="p-2">Mobile-First,Responsive Design </h4>
          <h4 className="p-2">Platform Independent</h4>
          <h4 className="p-2">Learn - Develop - Execute</h4>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
