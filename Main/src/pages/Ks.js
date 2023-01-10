import React from "react";
import SEO from "../common/SEO";
import Header from "../common/header/Header";
import Copyright from "../common/footer/Copyright";
import { Card } from "@nextui-org/react";
import "../assets/scss/elements/rev.scss";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import useSWR from "swr";

const Ks = () => {

  const fetcher = (url) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
      },
    }).then((res) => res.json());

  const { data } = useSWR(`${process.env.REACT_APP_API_URL}/api/get-ks-protocols`, fetcher);

  return (
    <>
      <SEO title="Контролен съвет" />
      <main className="page-wrapper">
        <Header btnStyle="btn-small round btn-icon" HeaderSTyle="" />
        <BreadcrumbOne title="Протоколи Контролен съвет" rootUrl="/" />
        <br />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            className="cardsRev"
            style={{ justifyContent: "center", justifyItems: "center", alignSelf: "center", gap: 20 }}
          >
            {data &&
              data.results &&
              data.results.map((item) => (
                <Card style={{}}>
                  <Card.Header style={{ fontWeight: "bold" }}>{item.title}</Card.Header>
                  <Card.Body>
                    <img
                      src={`${process.env.REACT_APP_API_URL}/${item.picture.path}`}
                      style={{ width: "100%", height: 250, objectFit: "cover", borderRadius: 16 }}
                      alt=""
                    />
                    <p style={{ marginTop: 12, color: "black" }}>
                      {new Date(item.timestamp).toLocaleString("bg-BG", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}{" "}
                      | <img src="/images/icons/file.png" width={20} height={20} alt="" />
                      <a
                        href={`${process.env.REACT_APP_API_URL}/${item.file.path}`}
                        style={{ color: "orange", marginLeft: 5 }}
                      >
                        {item.file.name}
                      </a>
                    </p>
                    <p>{item.description}</p>
                  </Card.Body>
                </Card>
              ))}
          </div>
        </div>
        <div style={{ marginTop: "3%" }}>
          <Copyright style={{ marginTop: "0px" }} />
        </div>
      </main>
    </>
  );
};

export default Ks;
