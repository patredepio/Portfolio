import React from "react";
import "./Icon.css";
const Icon = ({ email = false, linkedIn, ...props }) => {
  return (
    <a
      href={
        email
          ? "mailto:patredepio@protonmail.com"
          : linkedIn
          ? "https:www.linkedin.com/in/osamudiamen-egharevba-088aa130a"
          : "tel:+2348083651821"
      }
      target={linkedIn ? "_blank" : "_self"}
      rel='noreferrer'
      className='icon'
    >
      {props.children}
    </a>
  );
};
export default Icon;
