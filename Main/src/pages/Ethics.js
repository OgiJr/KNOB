import React from "react";
import SEO from "../common/SEO";
import Header from "../common/header/Header";
import Copyright from "../common/footer/Copyright";
import SplitFour from "../elements/split/SplitFour";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import { Card, Text } from "@nextui-org/react";

const Ethics = () => {
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
                    Георги Владимиров Георгиев, Представляващ КНОБ -{" "}
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
                    Сузана Савева Недева -{" "}
                    <a href="mailto:office@ciab-bg.com" style={{ color: "#ff6d00" }}>
                      office@ciab-bg.com
                    </a>
                    <br />
                    Красимира Димитрова Арабаджиева -
                    <a href="mailto:office@ciab-bg.com" style={{ color: "#ff6d00" }}>
                      office@ciab-bg.com
                    </a>
                    <br />
                    Живка Недева Бонева -
                    <a href="mailto:office@ciab-bg.com" style={{ color: "#ff6d00" }}>
                      office@ciab-bg.com
                    </a>
                    <br />
                    <br />
                    Силвия Христова Михова -
                    <a href="mailto:office@ciab-bg.com" style={{ color: "#ff6d00" }}>
                      office@ciab-bg.com
                    </a>
                    <br />
                    Галина Димитрова Йорданова-Иванова -
                    <a href="mailto:office@ciab-bg.com" style={{ color: "#ff6d00" }}>
                      office@ciab-bg.com
                    </a>
                    <br />
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
