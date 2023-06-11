import React from "react";
import about from "../../assets/about.jpg";

const About = () => {
  return (
    <div id="about" className="w-[100%]  flex  flex-cols-2  justify-center  h-max-content lg:   ">
      <div className="text-left h-[600px] md:flex justify-center items-center gap-[80px] px-[100px]">
        <img
          className="hidden lg:block h-[600px] rounded-md  mx-auto my-auto w-[500px] object-cover  text-center     "
          src={about}
        />
        <div className="w-[350px] flex justify-center items-center flex-col px-[8px] ">
          <h1 className="text-[#00df9a] font-bold md:text-6xl sm:text-5xl  text-5xl relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-[#00fd9a]
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 ">
            About Myself
          </h1>
          <div className="max-h-[400px] text-[14px]   md:text-xl">
          <p className="font-bold  text-[#B7AB98]  md:text-[10px]  md:mx-0  py-6 leading-10 ">
          I'm a Computer Sceinece Engineering graduand pursuing in Panimalar Engineering College.I am a frontend developer who is currently exploring and developing Fullstack applications using React, JavaScript/ TypeScript, Express, Node.js and MongoDB.I also enjoy problem-solving and have invested quite some time to strengthen my ability in the domain. I've explored techniques to choose the best possible data structures and apply algorithms for solving problems on coding platforms such as LeetCode. I enjoy web designing and would love to learn and gain experience in UI/UX designing too.
          Apart from tech, you will see me watching Anime, Series, or drinking coffee and tea!
          </p>
          <a className="pt-[50px]" href="https://www.linkedin.com/in/suresh-hariharan-89376a21b/" class="bg-transparent hover:bg-[#eb5939] text-[#eb5939] font-semibold hover:text-black py-4 px-4 border border-[#B7AB98] hover:border-transparent rounded ">
          Get in touch..!
          </a>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default About;
