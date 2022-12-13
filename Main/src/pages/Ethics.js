import React from "react";
import SEO from "../common/SEO";
import Header from "../common/header/Header";
import Copyright from "../common/footer/Copyright";
import SplitFour from "../elements/split/SplitFour";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import { Card, Text } from "@nextui-org/react";

const Ethics = () => {
  const committeeChair = [{ name: "Сузана Савева Недева	" }];
  const committee = [
    { key: 1, name: "Красимира Димитрова Арабаджиева" },
    { key: 2, name: "Живка Недева Бонева" },
    { key: 3, name: "Силвия Христова Михова" },
    { key: 4, name: "Галина Димитрова Йорданова-Иванова" },
  ];

  return (
    <>
      <SEO title="За нас" />
      <main className="page-wrapper">
        <Header btnStyle="btn-small round btn-icon" HeaderSTyle="" />
        <BreadcrumbOne title="Комисия по професионална етика" />

        {/* Start Main Area  */}
        <SplitFour />
        {/* End Main Area  */}
        <div style={{ marginLeft: "5%", marginRight: "5%", marginTop: "50px" }}>
          <Card css={{ p: "$6" }} isHoverable>
            <Card.Header style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
              <Text h4 css={{ lineHeight: "$xs", textAlign: "center" }}>
                Членове на управителния съвет
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

export default Ethics;
