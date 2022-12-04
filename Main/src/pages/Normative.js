import React, { useEffect, useState } from "react";
import SEO from "../common/SEO";
import Header from "../common/header/Header";
import Copyright from "../common/footer/Copyright";
import { Card } from "@nextui-org/react";
import NormativeData from "../data/acts/normativeList.json";
import { Link } from "react-router-dom";

const Normative = () => {
  const alldataRev = NormativeData;
  const [getAllItems] = useState(alldataRev);
  const [visibleItems, setVisibleItems] = useState([]);

  console.log(visibleItems);

  useEffect(() => {
    setVisibleItems(getAllItems.filter((item) => item.id));
  }, []);

  return (
    <>
      <SEO title="Нормативни актове" />
      <main className="page-wrapper">
        <Header btnStyle="btn-small round btn-icon" HeaderSTyle="" />
        <br />
        <div style={{ display: "flex", flexDirection: "column", alignSelf: "center", justifyContent: "center" }}>
          <h1 style={{ textAlign: "center" }}>Нормативни актове</h1>
          {visibleItems.map((item) => (
            <Card isHoverable key={item.id} style={{ width: "60%", marginLeft: 100, marginTop: 10, display: "flex", alignSelf: "center" }}>
              <Card.Header>{item.title}.</Card.Header>
              <Card.Body>
                Публикувано: {item.date}
                <br />
                <br />
                Файлове:
                <Link to={"#"} style={{ textDecoration: "underline", color: "red", display: "flex", flexDirection: "row" }}>
                  <img src="images/icons/file.png" style={{ width: 30, height: 30 }} /> {item.file}
                </Link>
              </Card.Body>
            </Card>
          ))}
        </div>
        <div style={{ marginTop: "3%" }}>
          <Copyright style={{ marginTop: "0px" }} />
        </div>
      </main>
    </>
  );
};

export default Normative;
