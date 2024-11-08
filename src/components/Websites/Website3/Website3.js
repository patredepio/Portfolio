import React, { Fragment } from "react";
import classes from "./Website3.module.css";
import Menu from "../../icons/Menu";
const Website3 = () => {
  return (
    <Fragment>
      <nav className={classes.navbar}>
        <h2 className={classes.logo}>Sosa Events</h2>
        <ul className={classes.navbarLinks}>
          <li className={classes.link}>Memories</li>
          <li className={classes.link}>Events</li>
          <li className={classes.link}>Bookings</li>
        </ul>
        <Menu className={classes.icon} />
      </nav>
      <main className={classes.main}>
        <div>
          <h1 className={classes.title}>We Make Your Dream Event A Reality</h1>
        </div>
        <button className={classes.button}>Get Started</button>

        <div className={classes.dots}>
          <div className={classes.dot}></div>
          <div className={classes.dot}></div>
          <div className={classes.dot}></div>
        </div>
      </main>
    </Fragment>
  );
};

export default Website3;
