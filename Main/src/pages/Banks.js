import React from "react";
import SEO from "../common/SEO";
import Header from "../common/header/Header";
import Copyright from "../common/footer/Copyright";
import { Card, Text } from "@nextui-org/react";

const Banks = () => {
  return (
    <>
      <SEO title="Начало" />
      <main className="page-wrapper">
        <Header btnStyle="btn-small round btn-icon" />

        <div style={{ marginLeft: 15, marginRight: 15 }}>
          <div className="mt--40 cardsAccent">
            <Card isHoverable isPressable>
              <Card.Header>
                <img alt="nextui logo" src="images/icons/map.png" width="34px" height="34px" />
                <Text style={{ fontWeight: "bold", marginTop: "27px" }}>За членски внос</Text>
              </Card.Header>
              <Card.Body css={{ py: "$2" }}>
                <Text>
                  <b>Адрес:</b> <br /> гр. София 1000, ул. "Г.С.Раковски" № 122, вх. Б
                  <br />
                  <b>ЕИК: </b>
                  175681478
                  <br />
                  <b>IBAN: </b>
                  BG56 BPBI 7942 1079 5016 02
                  <br />
                  <b>BIC: </b>
                  BPBIBGSF
                  <br />
                  <b>Банка: </b>
                  "Юробанк България" АД
                </Text>
              </Card.Body>
            </Card>
            <Card isHoverable isPressable>
              <Card.Header>
                <img alt="nextui logo" src="images/icons/map.png" width="34px" height="34px" />
                <Text style={{ fontWeight: "bold", marginTop: "27px" }}>Такса за вписване в регистъра на КНОБ</Text>
              </Card.Header>
              <Card.Body css={{ py: "$2" }}>
                <Text>
                  <b>Адрес:</b> <br /> гр. София 1000, ул. "Г.С.Раковски" № 122, вх. Б
                  <br />
                  <b>ЕИК: </b>
                  175681478
                  <br />
                  <b>IBAN: </b>
                  BG29 BPBI 7942 1079 5016 03
                  <br />
                  <b>BIC: </b>
                  BPBIBGSF
                  <br />
                  <b>Банка: </b>
                  "Юробанк България" АД
                </Text>
              </Card.Body>
            </Card>
          </div>
          <div className="cardsAccent" style={{ marginTop: 20 }}>
            <Card css={{ p: "$6" }} isHoverable isPressable>
              <Card.Header>
                <img alt="nextui logo" src="images/icons/map.png" width="34px" height="34px" />
                <Text style={{ fontWeight: "bold", marginTop: "27px" }}>За курсове и изпити </Text>
              </Card.Header>
              <Card.Body css={{ py: "$2" }}>
                <Text>
                  <b>Адрес:</b> <br /> гр. София 1000, ул. "Г.С.Раковски" № 122, вх. Б
                  <br />
                  <b>ЕИК: </b>
                  175681478
                  <br />
                  <b>IBAN: </b>
                  BG07 BPBI 7942 1079 5016 11
                  <br />
                  <b>BIC: </b>
                  BPBIBGSF
                  <br />
                  <b>Банка: </b>
                  "Юробанк България" АД
                </Text>
              </Card.Body>
            </Card>
            <Card css={{ p: "$6" }} isHoverable isPressable>
              <Card.Header>
                <img alt="nextui logo" src="images/icons/map.png" width="34px" height="34px" />
                <Text style={{ fontWeight: "bold", marginTop: "27px" }}>
                  Годишна вноска на основание чл.10, ал. 8 от Кодекс за професионална етика
                </Text>
              </Card.Header>
              <Card.Body css={{ py: "$2" }}>
                <Text>
                  <b>Адрес:</b> <br /> гр. София 1000, ул. "Г.С.Раковски" № 122, вх. Б
                  <br />
                  <b>ЕИК: </b>
                  175681478
                  <br />
                  <b>IBAN: </b>
                  BG 23 BPBI 7942 1079 5016 14
                  <br />
                  <b>BIC: </b>
                  BPBIBGSF
                  <br />
                  <b>Банка: </b>
                  "Юробанк България" АД
                </Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <Copyright />
      </main>
    </>
  );
};
export default Banks;
