import React from "react";
import Logo from "../Logo/Logo";
import Email from "../icons/Email";
import Telephone from "../icons/Telephone";
import LinkedIn from "../icons/Linkedin";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <Logo />
      <div className='copyright'>
        © All Rights Reserved {new Date().getFullYear()}
      </div>
      <div className='contact-container'>
        <Email />
        <Telephone />
        <LinkedIn />
      </div>
    </footer>
  );
};

export default React.memo(Footer);
