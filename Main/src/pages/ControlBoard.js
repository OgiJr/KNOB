import React from "react";
import SEO from "../common/SEO";
import Header from "../common/header/Header";
import Copyright from "../common/footer/Copyright";
import SplitThree from "../elements/split/SplitThree";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import { Card, Text } from "@nextui-org/react";

const ControlBoard = () => {
  const committeeChair = [{ name: "Александър Симеонов Александров" }];
  const committee = [
    { key: 1, name: "Венета Колева Желева" },
    { key: 2, name: "Атанас Неделчев Атанасов" },
    { key: 3, name: "Борис Кирилов Гиздаков" },
    { key: 4, name: "Борислав Петров Стоицев" },
    { key: 5, name: "Красимир Иванов Братанов " },
    { key: 6, name: "Симеон Радев Захариев" },
  ];

  return (
    <>
      <SEO title="За нас" />
      <main className="page-wrapper">
        <Header btnStyle="btn-small round btn-icon" HeaderSTyle="" />
        <BreadcrumbOne title="Контролен съвет" />

        {/* Start Main Area  */}
        <SplitThree />
        {/* End Main Area  */}
        <div style={{ marginLeft: "5%", marginRight: "5%", marginTop: "50px" }}>
          <Card css={{ p: "$6" }} isHoverable>
            <Card.Header style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
              <Text h4 css={{ lineHeight: "$xs", textAlign: "center" }}>
                Членове на Контролен съвет
              </Text>
            </Card.Header>
            <Card.Body css={{ py: "$2" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <b>Председател:</b>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Text style={{ textAlign: "center" }}>
                    {committeeChair.map((item) => item.name)} -{" "}
                    <a href="mailto:office@ciab-bg.com" style={{ color: "#ff6d00" }}>
                      office@ciab-bg.com
                    </a>
                  </Text>
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <b>Членове:</b>
                <div style={{ display: "flex", flexDirection: "row" }}>
                  <Text style={{ textAlign: "center" }}>
                    {committee.map((item) => (
                      <div>
                        {item.name} -{" "}
                        <a href="mailto:office@ciab-bg.com" style={{ color: "#ff6d00" }}>
                          office@ciab-bg.com
                        </a>
                        <br />{" "}
                      </div>
                    ))}
                  </Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </div>
        <div style={{ marginTop: "3%" }}>
          <Copyright style={{ marginTop: "0px" }} />
        </div>
      </main>
    </>
  );
};

export default ControlBoard;
