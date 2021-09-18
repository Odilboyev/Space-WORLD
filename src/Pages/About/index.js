import React from "react";
import AboutWr from "./wrapper";

const About = () => {
  const skills = [
    "Html",
    "Css",
    "bootstrap",
    "material-ui",
    "Javascript (es6+)",
    "Axios",
    "React",
    "Redux",
    "Nextjs",
  ];
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

      <div className="skills">
        {skills.map((v) => (
          <div className="skill">{v}</div>
        ))}
      </div>
    </AboutWr>
  );
};

export default About;
