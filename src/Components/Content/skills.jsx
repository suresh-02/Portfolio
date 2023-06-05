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
import { TbBrandNextjs, TbBrandTailwind } from "react-icons/tb";

export default function skills() {
  return (
    <div className="p-[50px] flex flex-col justify-center  mx-auto h-max-content md:h-[100vh]" id="skills">
      <h1 className=" text-6xl font-bold mb-[180px] max-w-max mx-auto text-white">
        Technology Skills.
      </h1>
      <div className="grid md:grid-cols-5 grid-cols-2 gap-[200px] justify-items-center items-center ">
        <div className="">
          <DiHtml5 size="130px" color="#00df9a" />
        </div>
        <div>
          <DiCss3 size="130px" color="#00df9a" />
        </div>
        <div>
          <DiJavascript1 size="130px" color="#00df9a" />
        </div>
        <div>
          <DiReact size="130px" color="#00df9a" />
        </div>
        <div>
          <TbBrandNextjs size="130px" color="#00df9a" />
        </div>
        <div>
          <TbBrandTailwind color="#00df9a" size="130px" />
        </div>
        <div>
          <DiNpm color="#00df9a" size="130px" />
        </div>
        <div>
          <DiJava color="#00df9a" size="130px" />
        </div>
        <div>
          <DiBootstrap color="#00df9a" size="130px" />
        </div>
        <div>
          <DiSass color="#00df9a" size="130px" />
        </div>
      </div>
    </div>
  );
}
