import React, { useEffect, useState } from "react";
import SEO from "../common/SEO";
import Header from "../common/header/Header";
import Copyright from "../common/footer/Copyright";
import "../assets/scss/elements/rev.scss";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import { Card } from "@nextui-org/react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Us = () => {
  const { data, error, isLoading } = useSWR(`${process.env.REACT_APP_API_URL}/api/get-us-protocols`, fetcher);

  const protocols = [
    {
      key: 1,
      title: "Примерен протокол",
      description: "Описание на примерен протокол. Описание на примерен протокол. Описание на примерен протокол.",
      fileName: "Примерен файл",
      fileUrl: "#",
      imageUrl: "/images/blog/blog-11.jpg",
      date: "12.12.2022г.",
    },
    {
      key: 2,
      title: "Примерен протокол",
      description: "Описание на примерен протокол. Описание на примерен протокол. Описание на примерен протокол.",
      fileName: "Примерен файл",
      fileUrl: "#",
      imageUrl: "/images/blog/blog-02.jpg",
      date: "12.12.2022г.",
    },
  ];


  return (
    <>
      <SEO title="Управителен съвет" />
      <main className="page-wrapper">
        <Header btnStyle="btn-small round btn-icon" HeaderSTyle="" />
        <BreadcrumbOne title="Протоколи Управителен съвет" rootUrl="/" />
        <br />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            className="cardsRev"
            style={{ justifyContent: "center", justifyItems: "center", alignSelf: "center", gap: 20 }}
          >
            {data && data.results.map((item) => (
              <Card style={{}}>
                <Card.Header style={{ fontWeight: "bold" }}>{item.title}</Card.Header>
                <Card.Body>
                  <img
                    src={item.imageUrl}
                    style={{ width: "100%", height: 250, objectFit: "cover", borderRadius: 16 }}
                    alt=""
                  />
                  <p style={{ marginTop: 12, color: "black" }}>
                    {item.date} | <img src="/images/icons/file.png" width={20} height={20} alt="" />
                    <a href={item.fileUrl} style={{ color: "orange", marginLeft: 5 }}>
                      {item.fileName}
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

export default Us;
