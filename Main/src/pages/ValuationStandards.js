import React, { useEffect, useState } from "react";
import SEO from "../common/SEO";
import Header from "../common/header/Header";
import Copyright from "../common/footer/Copyright";
import { Card, Image } from "@nextui-org/react";
import NormativeData from "../data/acts/normativeList.json";
import "../assets/scss/elements/normative.scss";

const ValuationStandards = () => {
  const fileNameEnglish = " Bulgarian Valuation Standards are mandatory for implementation in the country from 01 June 2018";
  const fileUrlEnglish = "/uploaded/Normative/ValuationStandards.pdf";
  const dateEnglish = "02.05.2018";

  const fileNameBulgarian = "БЪЛГАРСКИ СТАНДАРТИ ЗА ОЦЕНЯВАНЕ /БСО/ 2018 г. - в сила от 1 юни 2018 г.";
  const fileUrlBulgarian = "/uploaded/Normative/Стандарти.pdf";
  const dateBulgarian = "02.05.2018";

  const alldataRev = NormativeData;
  const [getAllItems] = useState(alldataRev);
  const [visibleItems, setVisibleItems] = useState([]);

  console.log(visibleItems);

  useEffect(() => {
    setVisibleItems(getAllItems.filter((item) => item.id));
  }, []);

  return (
    <>
      <SEO title="Български стандарти за оценяване" />
      <main className="page-wrapper">
        <Header btnStyle="btn-small round btn-icon" HeaderSTyle="" />
        <br />
        <div style={{ display: "flex", flexDirection: "column", alignSelf: "center", justifyContent: "center" }}>
          <h1 style={{ textAlign: "center" }}>Български стандарти за оценяване</h1>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Image src="images/about/standards-1.jpg" width="50%" style={{ borderRadius: 24 }} />
            <div className="cards" style={{ display: "flex", width: "50%", flexDirection: "column", alignSelf: "center", marginRight: 24 }}>
              <Card isHoverable style={{ marginTop: 20, display: "flex", alignSelf: "center" }}>
                <Card.Header>Bulgarian Valuation Standards are mandatory for implementation in the country from 01 June 2018, according to the Independent Valuers Act (IVA). They have been approved by the General Meeting of the Chamber of Independent Appraisers in Bulgaria (CIAB) on 17-18 March in the town of Shumen</Card.Header>
                <Card.Body>
                  Published: {dateEnglish}
                  <br />
                  <br />
                  Files:
                  <a href={fileUrlEnglish} style={{ textDecoration: "underline", color: "red", display: "flex", flexDirection: "row" }}>
                    <img src="images/icons/file.png" style={{ width: 30, height: 30 }} /> {fileNameEnglish}
                  </a>
                </Card.Body>
              </Card>
              <Card isHoverable style={{ marginTop: 10, display: "flex", alignSelf: "center" }}>
                <Card.Header>Български стандарти за оценяване /БСО/ са задължителни за прилагане в страната от 01.06.2018 г., съгласно Закона за независимите оценители /ЗНО/, приети от Общото събрание на Камарата на независимите оценители в България /КНОБ/ на 17-18 март в гр. Шумен</Card.Header>
                <Card.Body>
                  Публикувано: {dateBulgarian}
                  <br />
                  <br />
                  Файлове:
                  <a href={fileUrlBulgarian} style={{ textDecoration: "underline", color: "red", display: "flex", flexDirection: "row" }}>
                    <img src="images/icons/file.png" style={{ width: 30, height: 30 }} /> {fileNameBulgarian}
                  </a>
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
