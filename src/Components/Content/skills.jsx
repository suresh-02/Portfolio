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
    <div className="p-[50px] mx-auto">
      <h1 className=" text-6xl font-bold py-[50px] max-w-max mx-auto text-white">
        Skills
      </h1>
      <div className="grid md:grid-cols-5 grid-cols-2 gap-[50px] justify-items-center items-center ">
        <div className="">
          <DiHtml5 size="100px" color="#00df9a" />
        </div>
        <div>
          <DiCss3 size="100px" color="#00df9a" />
        </div>
        <div>
          <DiJavascript1 size="100px" color="#00df9a" />
        </div>
        <div>
          <DiReact size="100px" color="#00df9a" />
        </div>
        <div>
          <TbBrandNextjs size="100px" color="#00df9a" />
        </div>
        <div>
          <TbBrandTailwind color="#00df9a" size="100px" />
        </div>
        <div>
          <DiNpm color="#00df9a" size="100px" />
        </div>
        <div>
          <DiJava color="#00df9a" size="100px" />
        </div>
        <div>
          <DiBootstrap color="#00df9a" size="100px" />
        </div>
        <div>
          <DiSass color="#00df9a" size="100px" />
        </div>
      </div>
    </div>
  );
}
