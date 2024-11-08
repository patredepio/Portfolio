import React from "react";
import "./Navbar.css";
import Logo from "../Logo/Logo";
import Mail from "../icons/Mail";
import Phone from "../icons/Phone";
const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo-container'>
        <Logo />
      </div>

      <div className='contact-content'>
        <div>
          <a
            className='contact'
            href='mailto:patredepio@protonmail.com'
          >
            patredepio@protonmail.com
          </a>
        </div>
        <div>
          <a
            className='contact'
            href='tel:+2348111474746'
          >
            +234 811 474 746
          </a>
        </div>
      </div>
      <div className='information'>
        <Mail />
        <Phone />
      </div>
    </nav>
  );
};

export default React.memo(Navbar);
