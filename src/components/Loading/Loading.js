import React from "react";
import classes from "./Loading.module.css";
const Loading = React.memo(() => {
  return <div className={classes.skeleton}></div>;
});
export default Loading;
