import React, { useEffect, useState } from "react";
import SEO from "../common/SEO";
import Header from "../common/header/Header";
import Copyright from "../common/footer/Copyright";
import { Card } from "@nextui-org/react";
import NormativeData from "../data/acts/normativeList.json";
import { Link } from "react-router-dom";
import "../assets/scss/elements/normative.css";

const ValuationStandards = () => {
  const alldataRev = NormativeData;
  const [getAllItems] = useState(alldataRev);
  const [visibleItems, setVisibleItems] = useState([]);

  console.log(visibleItems);

  useEffect(() => {
    setVisibleItems(getAllItems.filter((item) => item.id));
  }, []);

  return (
    <>
      <SEO title="Стандарти за оценяване" />
      <main className="page-wrapper">
        <Header btnStyle="btn-small round btn-icon" HeaderSTyle="" />
        <br />
        <div style={{ display: "flex", flexDirection: "column", alignSelf: "center", justifyContent: "center" }}>
          <h1 style={{ textAlign: "center" }}>Стандарти за оценяване</h1>
          <div className="cards" style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
            <Card isHoverable style={{ marginTop: 20, display: "flex", alignSelf: "center" }}>
              <Card.Header>Bulgarian Valuation Standards are mandatory for implementation in the country from 01 June 2018, according to the Independent Valuers Act (IVA). They have been approved by the General Meeting of the Chamber of Independent Appraisers in Bulgaria (CIAB) on 17-18 March in the town of Shumen</Card.Header>
              <Card.Body>
                Published: 02.05.2018
                <br />
                <br />
                Файлове:
                <a href="/uploaded/Normative/ValuationStandards.pdf" style={{ textDecoration: "underline", color: "red", display: "flex", flexDirection: "row" }}>
                  <img src="images/icons/file.png" style={{ width: 30, height: 30 }} /> Bulgarian Valuation Standards are mandatory for implementation in the country from 01 June 2018
                </a>
              </Card.Body>
            </Card>
            <Card isHoverable style={{ marginTop: 10, display: "flex", alignSelf: "center" }}>
              <Card.Header>Български стандарти за оценяване /БСО/ са задължителни за прилагане в страната от 01.06.2018 г., съгласно Закона за независимите оценители /ЗНО/, приети от Общото събрание на Камарата на независимите оценители в България /КНОБ/ на 17-18 март в гр. Шумен</Card.Header>
              <Card.Body>
                Публикувано: 02.05.2018г.
                <br />
                <br />
                Файлове:
                <a href="/uploaded/Normative/Стандарти.pdf" style={{ textDecoration: "underline", color: "red", display: "flex", flexDirection: "row" }}>
                  <img src="images/icons/file.png" style={{ width: 30, height: 30 }} /> БЪЛГАРСКИ СТАНДАРТИ ЗА ОЦЕНЯВАНЕ /БСО/ 2018 г. - в сила от 1 юни 2018 г.
                </a>
              </Card.Body>
            </Card>
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
