import React from "react";
import Typed from "react-typed";
import { Card, Grid, Text, Link } from "@nextui-org/react";

const Accents = () => {
  return (
    <div className="rwt-about-area rn-section-gap">
      <div className="container">
        <div className="row row--30 align-items-center">
          <div className=" mt_md--40 mt_sm--40">
            <div className="content">
              <div className="section-title">
                <h2 className="title">Акценти </h2>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <img className="icon" style={{ width: 50, height: 50, marginTop: -10 }} src="images/icons/pin.png" alt="Pinned" />
                  <p>
                    <b>Съобщение:</b>
                    <br />
                    Приемното време на Централен офис на КНОБ с клиенти на място е от понеделник до петък от 09:30 до 16:30 часа с половин час обедна почивка от 13:00 до 13:30 часа.
                  </p>
                </div>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <img className="icon" style={{ width: 50, height: 50, marginTop: -10 }} src="images/icons/doc.png" alt="Docs" />
                  <p>
                    <b>Оформяне на оценителски доклад от дружества на независим оценител:</b>
                    <br />В изпълнение на правомощията си по чл. 22, ал. 3, т. 7, КНОБ указва на дружествата на независим оценител, че съгласно чл. 17, ал. 1, в оценките подписани от дружеството на независим оценител задължително трябва да се съдържа и подпис на независимия оценител - физическо лице, отговорно за изготвянето на оценката. Не подписването на оценката, която не е подписана съгласно чл. 17, ал. 1 да се счита за невалидна поради нарушаване на императивното изискване на чл. 6, ал. 3 от ЗНО.
                  </p>
                </div>
                <div className="read-more-btn mt--40" style={{ display: "flex", flexDirection: "row" }}>
                  <Card css={{ p: "$6" }} isHoverable isPressable>
                    <Card.Header>
                      <img alt="nextui logo" src="images/icons/map.png" width="34px" height="34px" />
                      <Text style={{ fontWeight: "bold", marginTop: "27px" }}>За членски внос</Text>
                    </Card.Header>
                    <Card.Body css={{ py: "$2" }}>
                      <Text>
                        <b>Адрес:</b> <br /> гр. София 1000, ул. "Г.С.Раковски" № 122, вх. Б
                      </Text>
                      <Text>
                        <b>ЕИК: </b>
                        175681478
                      </Text>
                      <Text>
                        <b>IBAN: </b>
                        BG56 BPBI 7942 1079 5016 02
                      </Text>
                      <Text>
                        <b>BIC: </b>
                        BPBIBGSF
                      </Text>
                      <Text>
                        <b>Банка: </b>
                        "Юробанк България" АД
                      </Text>
                    </Card.Body>
                  </Card>
                  <Card css={{ p: "$6", marginLeft: "50px" }} isHoverable isPressable>
                    <Card.Header>
                      <img alt="nextui logo" src="images/icons/map.png" width="34px" height="34px" />
                      <Text style={{ fontWeight: "bold", marginTop: "27px" }}>Такса за вписване в регистъра на КНОБ</Text>
                    </Card.Header>
                    <Card.Body css={{ py: "$2" }}>
                      <Text>
                        <b>Адрес:</b> <br /> гр. София 1000, ул. "Г.С.Раковски" № 122, вх. Б
                      </Text>
                      <Text>
                        <b>ЕИК: </b>
                        175681478
                      </Text>
                      <Text>
                        <b>IBAN: </b>
                        BG29 BPBI 7942 1079 5016 03
                      </Text>
                      <Text>
                        <b>BIC: </b>
                        BPBIBGSF
                      </Text>
                      <Text>
                        <b>Банка: </b>
                        "Юробанк България" АД
                      </Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="read-more-btn mt--40" style={{ display: "flex", flexDirection: "row" }}>
                  <Card css={{ p: "$6" }} isHoverable isPressable>
                    <Card.Header>
                      <img alt="nextui logo" src="images/icons/map.png" width="34px" height="34px" />
                      <Text style={{ fontWeight: "bold", marginTop: "27px" }}>За курсове и изпити </Text>
                    </Card.Header>
                    <Card.Body css={{ py: "$2" }}>
                      <Text>
                        <b>Адрес:</b> <br /> гр. София 1000, ул. "Г.С.Раковски" № 122, вх. Б
                      </Text>
                      <Text>
                        <b>ЕИК: </b>
                        175681478
                      </Text>
                      <Text>
                        <b>IBAN: </b>
                        BG07 BPBI 7942 1079 5016 11
                      </Text>
                      <Text>
                        <b>BIC: </b>
                        BPBIBGSF
                      </Text>
                      <Text>
                        <b>Банка: </b>
                        "Юробанк България" АД
                      </Text>
                    </Card.Body>
                  </Card>
                  <Card css={{ p: "$6", marginLeft: "50px" }} isHoverable isPressable>
                    <Card.Header>
                      <img alt="nextui logo" src="images/icons/map.png" width="34px" height="34px" />
                      <Text style={{ fontWeight: "bold", marginTop: "27px" }}>Годишна вноска на основание чл.10, ал. 8 от Кодекс за професионална етика</Text>
                    </Card.Header>
                    <Card.Body css={{ py: "$2" }}>
                      <Text>
                        <b>Адрес:</b> <br /> гр. София 1000, ул. "Г.С.Раковски" № 122, вх. Б
                      </Text>
                      <Text>
                        <b>ЕИК: </b>
                        175681478
                      </Text>
                      <Text>
                        <b>IBAN: </b>
                        BG 23 BPBI 7942 1079 5016 14
                      </Text>
                      <Text>
                        <b>BIC: </b>
                        BPBIBGSF
                      </Text>
                      <Text>
                        <b>Банка: </b>
                        "Юробанк България" АД
                      </Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accents;
