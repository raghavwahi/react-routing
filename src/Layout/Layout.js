import React from "react";
import { Link } from "react-router-dom";

const Layout = (props) => {
  return (
    <>
      <header>
        <Link to="/">Courses</Link>
        <Link to="/enquries">Enquries</Link>
        <hr />
      </header>
      <section>{props.children}</section>
      <footer>
        <hr />
        <h3>REACT ASSIGNMENT</h3>
      </footer>
    </>
  );
};

export default Layout;
