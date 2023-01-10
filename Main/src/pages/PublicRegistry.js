import React from "react";
import SEO from "../common/SEO";
import Header from "../common/header/Header";
import Copyright from "../common/footer/Copyright";
import "../assets/scss/elements/bar.scss";
import BarTable from "../components/table/barTable";

const PublicRegistry = () => {
  return (
    <>
      <SEO title="Публичен регистър" />
      <main className="page-wrapper">
        <Header btnStyle="btn-small round btn-icon" HeaderStyle="" />
        <BarTable />
        {/* End Search Area */}
        <div style={{ marginTop: "3%" }}>
          <Copyright style={{ marginTop: "0px" }} />
        </div>
      </main>
    </>
  );
};

export default PublicRegistry;
