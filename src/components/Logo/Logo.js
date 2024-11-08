import React from "react";
import "./Logo.css";
import Coding from "../icons/Coding";
const Logo = () => {
  return (
    <a
      href='https://github.com/patredepio'
      target='_blank'
      className='logo'
    >
      <span>Padres Studio</span>

      <Coding className={"coding"} />
    </a>
  );
};

export default Logo;
