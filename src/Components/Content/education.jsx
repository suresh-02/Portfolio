import React from "react";
import educa from "../../assets/educa.jpg";
const Education = () => {
  return (
    <div id="education" className="w-full py-16 px-2 h-[100vh] flex justfify-center items-center">
      <div className="max-w-content px-[30px]  mx-auto grid md:grid-cols-2 justify-between gap-[200px]">
        <img
          className="h-[500px] mx-auto mr-[30px]  w-[600px] hidden sm:block object-cover  rounded-lg"
          src={educa}
        />
        <div className="flex flex-col justify-center px-[50px] md:px-2 ">
          <p className="text-[#eb5939] text-[50px] font-bold md:text-6xl sm:text-6xl md:mb-[20px] text-4xl py-[20px]">
             Academics 
          </p>
          <p className="font-bold text-white md:text-[20px] md:mx-0 my-[20px]">
            Bachelor of Engineering, Computer Science 2020 — 2024 Panimalar
            Engineering College current    <span className="text-[#eb5939]">GPA : 8.75</span> 
          </p>
          <p className="font-bold text-white md:text-[20px] md:mx-0 my-[30px]">
            SSLC 2019 — 2020 Zion Matriculation Higher Secondary School 
            < span className="text-[#eb5939] px-[10px]"> 420/500  (84%)</span>
          </p>
          <p className="font-bold text-white md:text-[20px] md:mx-0 my-[20px]">
            HSC 2019 — 2020 Zion Matriculation Higher Secondary School 
            < span className="text-[#eb5939] px-[10px]"> 455/600  (76%)</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
