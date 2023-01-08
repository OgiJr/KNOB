import React, { useEffect, useState } from "react";
import SEO from "../common/SEO";
import Header from "../common/header/Header";
import Copyright from "../common/footer/Copyright";
import { Card, Image } from "@nextui-org/react";
import NormativeData from "../data/acts/normativeList.json";
import "../assets/scss/elements/normative.scss";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const ValuationStandards = () => {
  const { data, error, isLoading } = useSWR(
    `${process.env.REACT_APP_API_URL}/api/get-bulgarian-standards`,
    fetcher
  );

  return (
    <>
      <SEO title="Български стандарти за оценяване" />
      <main className="page-wrapper">
        <Header btnStyle="btn-small round btn-icon" HeaderSTyle="" />
        <br />
        <div style={{ display: "flex", flexDirection: "column", alignSelf: "center", justifyContent: "center" }}>
          <h1 style={{ textAlign: "center" }}>Български стандарти за оценяване</h1>
          <div style={{ display: "flex" }} className="colPC">
            <Image src="images/about/standards-1.jpg" width="50%" style={{ borderRadius: 24 }} />
            <div
              className="cards"
              style={{ display: "flex", width: "80%", flexDirection: "column", alignSelf: "center", marginRight: 24 }}
            >
              <Card isHoverable style={{ marginTop: 20, display: "flex", alignSelf: "center" }}>
                <Card.Header>
                  Bulgarian Valuation Standards are mandatory for implementation in the country from 01 June 2018,
                  according to the Independent Valuers Act (IVA). They have been approved by the General Meeting of the
                  Chamber of Independent Appraisers in Bulgaria (CIAB) on 17-18 March in the town of Shumen
                </Card.Header>
                <Card.Body>
                  Files:
                  {
                    data && data.results.map((item) => (
                      <>
                        {item.language === "en" ? (
                          <a
                            href={`${process.env.REACT_APP_API_URL}/${item.title}`}
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <img src="images/icons/file.png" style={{ width: 30, height: 30 }} alt="" /><span style={{ color: "red", textDecoration: "underline" }}> {item.title}</span><span style={{ color: "black", textDecoration: "none" }}>&nbsp;({new Date(item.files[0].timestamp).toLocaleString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })})</span>
                          </a>) : (<></>)}</>
                    ))}
                </Card.Body>
              </Card>
              <Card isHoverable style={{ marginTop: 10, display: "flex", alignSelf: "center" }}>
                <Card.Header>
                  Български стандарти за оценяване /БСО/ са задължителни за прилагане в страната от 01.06.2018 г.,
                  съгласно Закона за независимите оценители /ЗНО/, приети от Общото събрание на Камарата на независимите
                  оценители в България /КНОБ/ на 17-18 март в гр. Шумен
                </Card.Header>
                <Card.Body>
                  Файлове:
                  {
                    data && data.results.map((item) => (
                      <>
                        {item.language === "bg" ? (
                          <a
                            href={`${process.env.REACT_APP_API_URL}/${item.title}`}
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <img src="images/icons/file.png" style={{ width: 30, height: 30 }} alt="" /><span style={{ color: "red", textDecoration: "underline" }}> {item.title}</span><span style={{ color: "black", textDecoration: "none" }}>&nbsp;({new Date(item.files[0].timestamp).toLocaleString("bg-BG", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })})</span>
                          </a>) : (<></>)}</>
                    ))
                  }
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div style={{ marginTop: "3%" }}>
          <Copyright style={{ marginTop: "0px" }} />
        </div>
      </main>
    </>
  );
};

export default ValuationStandards;
