import { useState } from "react";
import { Link } from "react-router-dom";
import ReactTextTransition, { presets } from "react-text-transition";
import "./App.css";
import Home from "./Pages/Home";
import { Fade, Slide } from "react-awesome-reveal";

import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { findAllInRenderedTree } from "react-dom/test-utils";
import Works from "./Pages/Works";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
const customAnimation = keyframes`
from {
  opacity: 0;
  transform: translate(-200px, 0);
}

to {
  opacity: 1;
  transform: translate(0, 0, 0);
}
`;
const customAnimation2 = keyframes`
from {
  opacity: 0;
  transform: translate(200px, 0);
}

to {
  opacity: 1;
  transform: translate(0, 0, 0);
}
`;
const customAnimation3 = keyframes`
from {
  opacity: 0;
  transform: translate(0, 100px);
}

to {
  opacity: 1;
  transform: translate(0, 0);
}
`;
const menus = ["welcome", "select", "menu"];
const tabs = ["work", "about", "contact"];
function App() {
  const [index, setIndex] = useState(0);
  const [index2, setIndex2] = useState(0);
  //
  const nextIndex = (i) => {
    setIndex(i);
  };
  const nextTab = (i) => {
    setIndex2(i);
  };

  const openTab = (i) => {
    setIndex(2);
    setIndex2(i);
  };
  return (
    <div>
      <Home>
        {menus[index] == "welcome" ? (
          <Reveal keyframes={customAnimation} cascade>
            <h2 className="welcome">welcome</h2>
            <p className="subtitle">to my world</p>
            <button className="home-btn m-0" onClick={() => nextIndex(1)}>
              press enter
            </button>
          </Reveal>
        ) : (
          ""
        )}

        {menus[index] == "select" ? (
          <Reveal keyframes={customAnimation2} cascade>
            <h2 className="welcome select text-uppercase">
              Select destination
            </h2>

            <div className="d-flex justify-content-between mt-3">
              <buttton className="home-btn m-5" onClick={() => openTab(0)}>
                work
              </buttton>
              <buttton className="home-btn m-5" onClick={() => openTab(1)}>
                about
              </buttton>
              <buttton className="home-btn m-5" onClick={() => openTab(2)}>
                contact
              </buttton>
            </div>
          </Reveal>
        ) : (
          ""
        )}
        {menus[index] == "menu" ? (
          <Fade className="tabs pt-5 h-100">
            <div className="container h-100">
              <Reveal keyframes={customAnimation3}>
                <div className="row h-100">
                  {tabs.map((v, i) => (
                    <div className="col-md-4 col-sm-12 text-center">
                      <buttton
                        className={`select-btn m-5 ${
                          v == tabs[index2] ? "active" : ""
                        }`}
                        onClick={() => nextTab(i)}
                      >
                        {v}
                      </buttton>
                    </div>
                  ))}
                </div>
                <hr className="bg-white" />
                <div>
                  {tabs[index2] == "work" ? (
                    <Reveal keyframes={customAnimation} cascade>
                      <div className="workwr">
                        <Works />
                      </div>
                    </Reveal>
                  ) : (
                    ""
                  )}
                  {tabs[index2] == "about" ? (
                    <Reveal
                      className="container"
                      keyframes={customAnimation}
                      cascade
                    >
                      <div>
                        <About />
                      </div>
                    </Reveal>
                  ) : (
                    ""
                  )}
                  {tabs[index2] == "contact" ? (
                    <Reveal
                      className="container"
                      keyframes={customAnimation}
                      cascade
                    >
                      <div>
                        <Contact />
                      </div>
                    </Reveal>
                  ) : (
                    ""
                  )}
                </div>
              </Reveal>
            </div>
          </Fade>
        ) : (
          ""
        )}
      </Home>
    </div>
  );
}

export default App;
