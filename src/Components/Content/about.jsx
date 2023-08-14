import React from "react";
import about from "../../assets/about.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="w-full h-[100vh] flex flex-coljustify-center bg-black mt-[90px]  px-8"
    >
      <div className=" mx-auto flex md:flex-cols-2  gap-[40px]z justify-center items-center">
        <img
          className="h-[500px]  hidden sm:block  rounded-lg"
          src={about}
          alt="About_Img"
        />
        <div className="flex flex-col justify-center  ">
          <h1
            className="text-[60px] text-primary md:text-primary ml-[20px] font-bold text-6xl text-left py-[20px] border-b-[#00df9a] relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-[#00fd9a]
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
          >
            About myself
          </h1>
          <p className="font-bold text-[14px] md:text-[20px] md:py-4 px-6 text-[#B7AB98]  leading-8 text-left mt-10">
            I'm a Computer Sceinece Engineering graduand pursuing in Panimalar
            Engineering College.I am a frontend developer who is currently
            exploring and developing Fullstack applications using React,
            JavaScript/ TypeScript, Express, Node.js and MongoDB.I also enjoy
            problem-solving and have invested quite some time to strengthen my
            ability in the domain. I've explored techniques to choose the best
            possible data structures and apply algorithms for solving problems
            on coding platforms such as LeetCode. I enjoy web designing and
            would love to learn and gain experience in UI/UX designing too.
            Apart from tech, you will see me watching Anime, Series, or drinking
            coffee and tea!
          </p>
          {/* <button className="w-[100px] h-[50px] bg-black text-[#00df9a] justify-center rounded-lg font-bold mx-auto my-4">
            Connect.
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
