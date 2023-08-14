import React from "react";
import {
  DiCss3,
  DiHtml5,
  DiJavascript1,
  DiReact,
  DiNpm,
  DiJava,
  DiBootstrap,
  DiSass,
} from "react-icons/di";
import {
  TbBrandNextjs,
  TbBrandTailwind,
  TbBrandAngular,
  TbBrandTypescript,
} from "react-icons/tb";
import { SiMysql, SiMongodb, SiChakraui } from "react-icons/si";

export default function Skills() {
  return (
    <div
      className="pt-[250px] flex flex-col justify-center  mx-auto h-max-content md:h-[100vh]"
      id="skills"
    >
      <h1
        className=" text-6xl font-bold mb-[80px] max-w-max mx-auto text-primary relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-[#00fd9a]
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
      >
        Skills
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[70px] justify-items-center items-center  ">
        <div className="after:transition duration-500 ease-in-out bg-black  transform hover:-translate-y-1 hover:scale-110">
          <DiHtml5 size="130px" color="#00df9a" />
        </div>
        <div className="after:transition duration-500 ease-in-out bg-black  transform hover:-translate-y-1 hover:scale-110">
          <DiCss3 size="130px" color="#00df9a" />
        </div>
        <div className="after:transition duration-500 ease-in-out bg-black  transform hover:-translate-y-1 hover:scale-110">
          <DiJavascript1 size="130px" color="#00df9a" />
        </div>
        <div className="after:transition duration-500 ease-in-out bg-black  transform hover:-translate-y-1 hover:scale-110">
          <DiReact size="130px" color="#00df9a" />
        </div>
        <div className="after:transition duration-500 ease-in-out bg-black  transform hover:-translate-y-1 hover:scale-110">
          <TbBrandNextjs size="130px" color="#00df9a" />
        </div>
        <div className="after:transition duration-500 ease-in-out bg-black  transform hover:-translate-y-1 hover:scale-110">
          <TbBrandTailwind color="#00df9a" size="130px" />
        </div>
        <div className="after:transition duration-500 ease-in-out bg-black  transform hover:-translate-y-1 hover:scale-110">
          <DiNpm color="#00df9a" size="130px" />
        </div>
        <div className="after:transition duration-500 ease-in-out bg-black  transform hover:-translate-y-1 hover:scale-110">
          <DiJava color="#00df9a" size="130px" />
        </div>
        <div className="after:transition duration-500 ease-in-out bg-black  transform hover:-translate-y-1 hover:scale-110">
          <DiBootstrap color="#00df9a" size="130px" />
        </div>
        <div className="after:transition duration-500 ease-in-out bg-black  transform hover:-translate-y-1 hover:scale-110">
          <DiSass color="#00df9a" size="130px" />
        </div>
        <div className="after:transition duration-500 ease-in-out bg-black  transform hover:-translate-y-1 hover:scale-110">
          <TbBrandAngular color="#00df9a" size="130px" />
        </div>
        <div className="after:transition duration-500 ease-in-out bg-black  transform hover:-translate-y-1 hover:scale-110">
          <TbBrandTypescript color="#00df9a" size="130px" />
        </div>
        <div className="after:transition duration-500 ease-in-out bg-black  transform hover:-translate-y-1 hover:scale-110">
          <SiMysql color="#00df9a" size="130px" />
        </div>
        <div className="after:transition duration-500 ease-in-out bg-black  transform hover:-translate-y-1 hover:scale-110">
          <SiMongodb color="#00df9a" size="130px" />
        </div>
        <div className=" hidden md:after:transition duration-500 ease-in-out bg-black  transform hover:-translate-y-1 hover:scale-110">
          <SiChakraui color="#00df9a" size="130px" />
        </div>
      </div>
    </div>
  );
}
