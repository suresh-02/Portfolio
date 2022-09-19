import React from "react";
import educa from "../../assets/educa.jpg";
const Education = () => {
  return (
    <div id="edu" className="w-full py-16 px-4 ">
      <div className="max-w-[1240px]  mx-auto grid md:grid-cols-2 ">
        <img
          className="h-[500px] mx-auto mr-[30px]  w-[600px] hidden sm:block object-cover  rounded-lg"
          src={educa}
        />
        <div className="flex flex-col justify-center px-[50px] md:px-2">
          <h1 className="text-[#00df9a] font-bold md:text-6xl sm:text-5xl md:py-[0] text-4xl py-[20px]">
            My Education
          </h1>
          <p className="font-bold text-white md:text-[20px] md:mx-0 my-[20px]">
            Bachelor of Engineering, Computer Science 2020 — 2024 Panimalar
            Engineering College current GPA : 9.083
          </p>
          <p className="font-bold text-white md:text-[20px] md:mx-0 my-[30px]">
            SSLC 2019 — 2020 Zion Matriculation Higher Secondary School 420/500
            (84%)
          </p>
          <p className="font-bold text-white md:text-[20px] md:mx-0 my-[20px]">
            HSC 2019 — 2020 Zion Matriculation Higher Secondary School 455/600
            (75.83%)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
