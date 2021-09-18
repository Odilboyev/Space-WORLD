import React from "react";
import AboutWr from "./wrapper";

const About = () => {
  return (
    <AboutWr>
      <h1>About me</h1>
      <p className="text py-2">
        <h2>
          My name is <span> Samandar. </span> <br /> I'm <span> 16</span> years
          old and I'm a <span>Frontend developer</span>
        </h2>
        My responsibilities are to design, develop, and implement this front-end
        technology for businesses.
      </p>
    </AboutWr>
  );
};

export default About;
