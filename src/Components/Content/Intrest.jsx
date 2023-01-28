import React from "react";
import intrestimg from "../../assets/intrtestbg.jpg";

const Intrest = () => {
  return (
    <div id="intr" className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px]  mx-auto grid md:grid-cols-2 ">
        <img
          className="h-[500px] mx-auto mr-[30px]  w-[600px] hidden sm:block  rounded-lg"
          src="https://angular.io/generated/images/marketing/home/any-size.svg"
        />
        <div className="flex flex-col justify-center  ">
          <h1 className="text-[#00df9a] font-bold md:text-6xl sm:text-5xl md:py-[0] text-4xl py-[20px]">
            My Intrests..!
          </h1>
          <p className="font-bold md:text-[20px] md:mx-0 py-4 mt-10">
            Being Web-Devoloper is my Passion, Apart from that I love to Hear
            Music, even all day and i love to play badminton. I enjoy most of my
            time being outdoors. I Love to travel to new places. When forced
            indoors, I follow a number of sci-fi and fantasy genre movies and
            television shows and mostly i Love to watch Anime, I Myself a pretty
            good chef, and I spend a large amount of my free time exploring the
            latest technology advancements in the front-end web development
            world.
          </p>
          {/* <button className="w-[100px] h-[50px] bg-black text-[#00df9a] justify-center rounded-lg font-bold mx-auto my-4">
            Connect.
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Intrest;
