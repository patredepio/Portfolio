import React, { Fragment } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import "./Layout.css";
const Layout = (props) => {
  return (
    <div className='layout'>
      <Navbar />
      <main className={"main"}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
