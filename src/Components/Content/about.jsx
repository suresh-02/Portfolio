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
            Hi! This is Suresh. i'm from Tambaram , Chennai, TN, IN. I love to
            Create Websites , to hear music.And i am An hardworking Indiviual
            proficiency in HTML, JavaScript ,CSS, REACTJS as well as ability to
            communicate``
          </p>
          <a
            href="https://mail.google.com/mail/u/0/#inbox?compose=new"
            className="w-[100px] h-[50px] bg-black text-[#00df9a] justify-center rounded-lg font-bold p-3 mx-auto my-4"
          >
            Connect
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
