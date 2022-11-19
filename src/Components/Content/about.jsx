import React from "react";
import person from "../../assets/about.png";

const About = () => {
  return (
    <div id="aboutsec" className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px]  mx-auto grid md:grid-cols-2">
        <img
          className="h-[500px] mx-auto my-auto  w-[500px] object-cover"
          src={person}
        />
        <div className="flex flex-col justify-center  ">
          <h1 className="text-[#00df9a] font-bold md:text-6xl sm:text-5xl  text-4xl py-[20px]">
            Let me Tell About Myself..!
          </h1>
          <p className="font-bold md:text-[20px] md:mx-0 py-4 mt-10">
            Hi! myself Suresh Hariharan. i'm from Tambaram , Chennai, TN, IN. I
            love to Create Websites , solve problems in programming and l also
            love to explore new technologies. I am looking for a challenging job
            where I can expose my talents and knowledge. Looking forward to
            learn new many things and be reason for the growth of the
            organisation.
          </p>
          <a
            href="https://www.linkedin.com/in/suresh-hariharan-89376a21b/"
            className="w-[100px] h-[50px] bg-black text-[#FF00BF] justify-center rounded-lg font-bold p-3 mx-auto my-4"
          >
            Connect
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
