import React from "react";
import Header from "../Layout/header";
import Intro from "./intro";
import About from "./about";
import Intrest from "./Intrest";
import Works from "./works";
import Education from "./education";
import Skills from "./skills";

export const Home = () => {
  return (
    <>
      <Header />
      <Intro />
      <About />
      <Skills />
      <Intrest />
      <Works />
      <Education />
    </>
  );
};
