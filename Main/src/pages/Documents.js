import React from "react";
import SEO from "../common/SEO";
import Header from "../common/header/Header";
import Copyright from "../common/footer/Copyright";
import { Card, Text } from "@nextui-org/react";

const Documents = () => {
  return (
    <>
      <SEO title="Начало" />
      <main className="page-wrapper">
        <Header btnStyle="btn-small round btn-icon" />

        <div style={{ marginLeft: 50, marginRight: 50, marginTop: 50, marginBottom: 300 }}>
          <div className="mt--40 cardsAccent">
            <Card isHoverable isPressable>
              <Card.Header>
                <img alt="nextui logo" src="images/icons/map.png" width="34px" height="34px" />
                <Text style={{ fontWeight: "bold", marginTop: "27px" }}>За членски внос</Text>
              </Card.Header>
              <Card.Body css={{ py: "$2" }} style={{ marginLeft: 30 }}>
                <a href="#" style={{ color: "orange", textDecoration: "underline" }}>
                  Анкетна карта
                </a>
                <br />
                <a href="#" style={{ color: "orange", textDecoration: "underline" }}>
                  Заявление и декларации
                </a>
              </Card.Body>
              <Card.Footer />
            </Card>
          </div>
        </div>
        <Copyright />
      </main>
    </>
  );
};
export default Documents;
