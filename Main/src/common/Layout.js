import React from "react";
import Header from "./header/Header";
import Copyright from "./footer/Copyright";

const Layout = ({ children }) => {
  return (
    <>
      <main className="page-wrapper">
        <Header btnStyle="btn-small round btn-icon" HeaderSTyle="header-not-transparent" />
        {children}
        <Copyright />
      </main>
    </>
  );
};
export default Layout;
