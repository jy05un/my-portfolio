import React from "react";
import { SiNaver } from "react-icons/si";
import { BsGithub, BsInstagram } from "react-icons/bs";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      <a href="https://github.com/jy05un" target="_blank">
        <BsGithub />
      </a>
      <a href="https://blog.naver.com/jys000305" target="_blank">
        <SiNaver />
      </a>
      <a href="https://www.instagram.com/your_sun.0305" target="_blank">
        <BsInstagram />
      </a>
    </div>
  );
};

export default HeaderSocial;
