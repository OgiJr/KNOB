import React, { useEffect, useState } from "react";
import SEO from "../common/SEO";
import Header from "../common/header/Header";
import Copyright from "../common/footer/Copyright";
import { Button, Card, Input, Pagination } from "@nextui-org/react";
import RevData from "../data/rev/RevList.json";
import "../assets/scss/elements/rev.scss";

const RevRegistry = () => {
  const alldataRev = RevData;
  const [getAllItems] = useState(alldataRev);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    setVisibleItems(getAllItems.filter((item) => item.id));
  }, [getAllItems, setVisibleItems]);

  return (
    <>
      <SEO title="REV" />
      <main className="page-wrapper">
        <Header btnStyle="btn-small round btn-icon" HeaderSTyle="" />
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 20,
            gap: 20,
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "black", fontWeight: "bold" }}>Филтрирайте по име, град и номер на сертификата</span>
          <Input placeholder="Име" style={{ margin: 0, background: "white" }} width={300} />
          <Input placeholder="Град" style={{ margin: 0, background: "white" }} width={300} />
          <Input placeholder="№ на сертификата" style={{ margin: 0, background: "white" }} width={300} />
          <Button color="warning" size="lg" shadow>
            Филтрирайте
          </Button>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {visibleItems.map((item) =>
            item.id < 2 ? (
              <div key={item.id} className="cardsRev" style={{ marginTop: 20 }}>
                <Card className="card1" isPressable>
                  <Card.Header>{item.c1}</Card.Header>
                  <Card.Body>
                    {item.dates1}
                    <br />
                    <br />
                    {item.name1}
                    <br />
                    {item.bgName1}
                    <br />
                    <br />
                    {item.city1}
                    <br />
                    {item.phone1}
                  </Card.Body>
                </Card>
                <Card className="card2" isPressable>
                  <Card.Header> {item.c2}</Card.Header>
                  <Card.Body>
                    {item.dates2}
                    <br />
                    <br />
                    {item.name2}
                    <br />
                    {item.bgName2}
                    <br />
                    <br />
                    {item.city2}
                    <br />
                    {item.phone2}
                  </Card.Body>
                </Card>
              </div>
            ) : (
              <></>
            )
          )}
          <Card style={{ marginTop: 20, marginLeft: "7%", width: "85%" }} isPressable>
            <Card.Header>Certificate / Сертификат: REV-BG/CIAB/2026/1</Card.Header>
            <Card.Body>
              Issued on / Издаден на: 01/06/2021 Valid until / Валиден до: 31/05/2026
              <br />
              <br />
              Name: Ivanchev, Nikolay
              <br />
              Имена на български език: Николай Иванов Иванчев
              <br />
              <br />
              City / Град: Botevgrad / Ботевград
              <br />
              Phone / Телефон: +359 89 860 09 07
            </Card.Body>
          </Card>
          <Pagination total={20} style={{ marginTop: 20, alignSelf: "center" }} color="warning" size="xl" />
        </div>
        <div style={{ marginTop: "3%" }}>
          <Copyright style={{ marginTop: "0px" }} />
        </div>
      </main>
    </>
  );
};

export default RevRegistry;
