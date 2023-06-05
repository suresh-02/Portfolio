import React from "react";
import Typed from "react-typed";
const Intro = () => {
  return (
    <div id="home" className="text-white pb-[100px] h-[100vh] ">
      <div className="  lg:max-w-[1200px] w-full   h-[100%] mx-auto text-center flex flex-col items-center justify-center ">
        <p className="text-[#00df9a] font-bold text-4xl p-2">
          Hi Welcome to my portfolio
        </p>
        <h1 className="md:text-6xl sm:text-4xl text-2xl font-bold md:py-6">
          Myself I'm Suresh Hariharan
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:  text-4xl sm:text-2xl  text-[25px] py-4">I am a </p>

          <Typed
            className="md:text-4xl z-[-10] sm:text-2xl pl-2 md:pl-4  text-[25px]  text-[#00df9a]"
            strings={["FrontEnd Devloper", "Graduand", "Software Engineer"]}
            typeSpeed={60}
            backSpeed={60}
            loop
          />
        </div>
        <p className="text-white  text-2xl mt-[50px] px-4 md:text-4xl">An aspiring Frontend developer, with a passion in making user interactive websites.</p>
      </div>
    </div>
  );
};

export default Intro;
