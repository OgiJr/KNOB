import React from "react";
import SEO from "../common/SEO";
import Header from "../common/header/Header";
import Copyright from "../common/footer/Copyright";
import "../assets/scss/elements/bar.scss";
import BarTable from "../components/table/barTable";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const PublicRegistry = () => {

  const {data:users} = useSWR(`${process.env.REACT_APP_API_URL}/api/get-users`, fetcher);
  const {data:companies} = useSWR(`${process.env.REACT_APP_API_URL}/api/get-companies`, fetcher);

  return (
    <>
      <SEO title="Публичен регистър" />
      <main className="page-wrapper">
        <Header btnStyle="btn-small round btn-icon" HeaderSTyle="" />
        {users && companies && (<BarTable users={users.results} companies={companies} />)}
        {/* End Search Area */}
        <div style={{ marginTop: "3%" }}>
          <Copyright style={{ marginTop: "0px" }} />
        </div>
      </main>
    </>
  );
};

export default PublicRegistry;
