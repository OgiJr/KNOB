import React from "react";
import SEO from "../../common/SEO";
import Header from "../../common/header/Header";
import Copyright from "../../common/footer/Copyright";

const Admin = () => {
  return (
    <>
      <SEO title="Начало" />
      <main className="page-wrapper">
        <Header btnStyle="btn-small round btn-icon" />

        <Copyright />
      </main>
    </>
  );
};
export default Admin;
