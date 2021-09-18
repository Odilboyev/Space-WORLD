import React from "react";
import ContactWr from "./wrapper";

const Contact = () => {
  const links = [
    {
      title: "Telegram",
      link: "https://t.me/webius_dev",
    },
    {
      title: "Email",
      link: "mailto:webiusdev@gmail.com",
    },
    {
      title: "Github",
      link: "https://github.com/Odilboyev",
    },
    {
      title: "Telegram channel",
      link: "https://t.me/webius_portfolio",
    },
    {
      title: "Phone number",
      link: "tel: +998917760298",
    },
  ];
  return (
    <ContactWr>
      <h1>Some links</h1>

      <div className="links">
        {links.map((v, i) => (
          <a href={v.link} target="_blank">
            <div className="skill">{v.title}</div>
          </a>
        ))}
      </div>
    </ContactWr>
  );
};

export default Contact;
