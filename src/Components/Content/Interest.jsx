import React from "react";

const Interest = () => {
  return (
    <div
      id="interest"
      className="w-full h-[100vh] flex flex-coljustify-center bg-black mt-[90px]  px-4"
    >
      <div className=" mx-auto flex md:flex-cols-2 justify-center items-center">
        <img
          className="h-[600px]  hidden sm:block  rounded-lg"
          src="https://angular.io/generated/images/marketing/home/any-size.svg"
          alt="Interest_Img"
        />
        <div className="flex flex-col justify-center  ">
          <h1
            className="text-primary ml-[20px] font-bold text-6xl text-left py-[20px] border-b-[#00df9a] relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-[#00fd9a]
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300"
          >
            My Interests..!
          </h1>
          <p className="font-bold text-[14px] md:text-[20px] md:py-4 px-6 text-[#B7AB98] text-left mt-10">
            As a frontend developer, I am passionate about creating visually
            appealing and user-friendly websites. I find joy in crafting elegant
            user interfaces that seamlessly blend aesthetics with functionality.
            The ever-evolving nature of web technologies fascinates me, and I
            constantly strive to stay up-to-date with the latest trends and
            advancements in frontend development. From responsive design to
            interactive components.
            <br />
            <span className="text-primary py-[10px]">
              "I enjoy exploring the endless possibilities of HTML, CSS, and
              JavaScript to bring ideas to life."
            </span>
            <br />
            Additionally, I am intrigued by the concept of user experience (UX)
            and its impact on how people interact with digital products.
            Understanding the needs and behaviors of users is a challenge that
            motivates me to continuously improve and optimize the frontend
            experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Interest;
