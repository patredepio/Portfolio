import React from "react";
import "./Container.css";
const Container = ({ type = 1, clicked, ...props }) => {
  return (
    <div
      onClick={clicked}
      {...props}
      className={[`container-${type}`, "container"].join(" ")}
    >
      {props.children}
    </div>
  );
};

export default Container;
