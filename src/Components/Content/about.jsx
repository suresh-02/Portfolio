import React from "react";
import person from "../../assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-full flex justify-center  py-16 h-max-content md: h-[100vh] ">
      <div className="sm:  justify-between  grid md:grid-cols-2 gap-[80px] px-[100px]">
        <img
          className="  lg:block h-[600px] rounded-md  mx-auto my-auto w-[500px] object-cover  text-center   md:hidden    "
          src={person}
        />
        <div className="flex flex-col justify-center  ">
          <h1 className="text-[#00df9a] font-bold md:text-6xl sm:text-5xl  text-5xl ">
            Let me Tell About Myself..
          </h1>
          <p className="font-bold text-left text-[#B7AB98] md:text-[20px] md:mx-0 py-4 leading-10 mt-10">
          I'm a Computer Sceinece Engineering graduand pursuing in Panimalar Engineering College.I am a frontend developer who is currently exploring and developing Fullstack applications using React, JavaScript/ TypeScript, Express, Node.js and MongoDB.I also enjoy problem-solving and have invested quite some time to strengthen my ability in the domain. I've explored techniques to choose the best possible data structures and apply algorithms for solving problems on coding platforms such as LeetCode. I enjoy web designing and would love to learn and gain experience in UI/UX designing too.
          Apart from tech, you will see me watching Anime, Series, or drinking coffee and tea!
          </p>
          <a
            href="https://www.linkedin.com/in/suresh-hariharan-89376a21b/"
            className="w-max-content h-[50px] bg-black text-[#00df9a] justify-center rounded-lg font-bold p-3 mx-auto my-4"
          >
            Get in touch..!
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
