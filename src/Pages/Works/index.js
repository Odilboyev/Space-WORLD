import React from "react";
import WorksWr from "./WorksWr";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
const Works = () => {
  const works = [
    {
      title: "Dashboard (React + Redux + Axios)",
      img: "screenshots/dashboard.jpg",
      link: "https://react-redux-dashboard.vercel.app/dashboard/users",
      codes: "https://github.com/Odilboyev/React-redux-Dashboard",
    },
    {
      title: "Duolingo (React hooks)",
      img: "screenshots/duolingo.jpg",
      link: "https://duolingo-react.vercel.app/",
      codes: "https://github.com/Odilboyev/duolingo-react",
    },
    {
      title: "Text to speech app (JavaScript)",
      img: "screenshots/tts.jpg",
      link: "https://text-to-speech-app.vercel.app/",
      codes: "https://github.com/Odilboyev/Text-to-Speech",
    },
    {
      title: "Covid tracker with JS (api)",
      img: "screenshots/covid.jpg",
      link: "https://get-covid-data.vercel.app/",
      codes: "https://github.com/Odilboyev/covid19",
    },
    {
      title: "Tic Tac Toe game (JavaScript)",
      img: "screenshots/xo.jpg",
      link: "https://x-o-game.vercel.app/",
      codes: "https://github.com/Odilboyev/TicTacToe-XO-game",
    },
    {
      title: "Todo App (React + Redux)",
      img: "screenshots/todo.jpg",
      link: "https://redux-todo-list-mu.vercel.app/",
      codes: "https://github.com/Odilboyev/Redux-todo-list",
    },
  ];
  return (
    <WorksWr>
      <h3 className="my-5">You can see my works here</h3>
      <div className="d-flex justify-content-between flex-wrap h-100 ">
        {works.map((v, i) => (
          <div className="mycard my-3">
            <div className="visible">
              <div className="imgwrap">
                <img src={v.img} alt="" />
              </div>

              <div className="invisible-part">
                <div className="content">
                  <div className="go">
                    <a href={v.link} target="_blank">
                      <BsBoxArrowUpRight />
                    </a>
                  </div>
                  <div className="codes">
                    <a href={v.codes} target="_blank">
                      <FaGithub />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <h5>
              <a href={v.link} target="_blank">
                {v.title}
              </a>
            </h5>
          </div>
        ))}
      </div>
    </WorksWr>
  );
};

export default Works;
