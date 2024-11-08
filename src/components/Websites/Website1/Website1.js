import React, { Fragment } from "react";
import SearchIcon from "../../icons/Search";
import Menu from "../../icons/Menu";
import classes from "./Website1.module.css";
import ArrowDown from "../../icons/ArrowDown";
const Website1 = () => {
  return (
    <Fragment>
      <nav className={classes.navbar}>
        <h2 className={classes.title}>Ponan`s Arc </h2>
        <div className={classes.iconContainer}>
          <div className={classes.desktopOnly}>
            <SearchIcon className={classes.icon} />
          </div>
          <div className={classes.otherLinks}>
            <div className={classes.toggleNavLinks}>
              <Menu className={classes.icon} />
            </div>

            <ul className={classes.navLinks}>
              <li className={classes.link}>Website 1</li>
              <li className={classes.link}>Website 2</li>
              <li className={classes.link}>Website 3</li>
            </ul>
          </div>
        </div>
      </nav>
      <main className={classes.webMain}>
        <ArrowDown className={[classes.icon, classes.arrowDown].join(" ")} />
        <div className={classes.contentContainer}>
          <button className={classes.button}>
            Get Started, it doesn't work
          </button>
        </div>
      </main>
    </Fragment>
  );
};

export default React.memo(Website1);
