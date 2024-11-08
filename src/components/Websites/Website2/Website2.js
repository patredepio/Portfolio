import React, { Fragment } from "react";
import classes from "./Website2.module.css";
import ArrowDown from "../../icons/ArrowDown";
import Menu from "../../icons/Menu";
const Website2 = () => {
  return (
    <Fragment>
      <nav className={classes.navbar}>
        <h2 className={classes.logo}>BurgKing</h2>
        <ul className={classes.navbarLinks}>
          <li className={classes.navbarLink}>Order</li>
          <li className={classes.navbarLink}>Products</li>
          <li className={classes.navbarLink}>Contact Us</li>
          <li className={classes.navbarLink}>Hiring</li>
        </ul>
        <div className={classes.otherLinks}>
          <div className={classes.menuLink}>
            <Menu className={classes.menu} />
          </div>
          <ul className={classes.navLinks}>
            <li className={classes.navLink}>Order</li>
            <li className={classes.navLink}>Products</li>
            <li className={classes.navLink}>Contact</li>
            <li className={classes.navLink}>Hiring</li>
          </ul>
        </div>
      </nav>
      <main className={classes.main}>
        <div style={{ width: "100%" }}>
          <h1 className={classes.orderWeekly}>BurgKing Weekly Special</h1>
        </div>
        <div className={classes.iconLink}>
          <ArrowDown className={classes.icon} />
          <button className={classes.button}>Order Now</button>
        </div>
      </main>
    </Fragment>
  );
};

export default Website2;
