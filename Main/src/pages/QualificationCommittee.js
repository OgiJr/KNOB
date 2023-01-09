import React from "react";
import SEO from "../common/SEO";
import Header from "../common/header/Header";
import Copyright from "../common/footer/Copyright";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";
import { Card, Text } from "@nextui-org/react";
import SplitFive from "../elements/split/SplitFive";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const QualificationCommittee = () => {
  const { data } = useSWR(`${process.env.REACT_APP_API_URL}/api/get-methodology-committee`, fetcher);

  return (
    <>
      <SEO title="За нас" />
      <main className="page-wrapper">
        <Header btnStyle="btn-small round btn-icon" HeaderSTyle="" />
        <BreadcrumbOne title="Съвет по методология и квалификации" />

        {/* Start Main Area  */}
        <SplitFive />
        {/* End Main Area  */}
        <div style={{ marginLeft: "5%", marginRight: "5%", marginTop: "50px" }}>
          <Card css={{ p: "$6" }} isHoverable>
            <Card.Header style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
              <Text h4 css={{ lineHeight: "$xs", textAlign: "center" }}>
                Членове на съвета по методология и квалификации
              </Text>
            </Card.Header>
            <Card.Body css={{ py: "$2" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <b>Председател:</b>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {data &&
                    data.results.map((item) => (
                      <>
                        {item.is_representative ? (
                          <Text style={{ textAlign: "center", marginBottom: 5, marginTop: 5 }}>
                            {item.full_name}, Представляващ КНОБ -{" "}
                            <a href={"mailto:" + item.email} style={{ color: "#ff6d00" }}>
                              {item.email}
                            </a>
                          </Text>
                        ) : (
                          <></>
                        )}
                      </>
                    ))}
                </div>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <b>Членове:</b>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {data &&
                    data.results.map((item) => (
                      <>
                        {!item.is_representative ? (
                          <Text style={{ textAlign: "center", marginBottom: 5, marginTop: 5 }}>
                            {item.full_name} -{" "}
                            <a href={"mailto:" + item.email} style={{ color: "#ff6d00" }}>
                              {item.email}
                            </a>
                          </Text>
                        ) : (
                          <></>
                        )}
                      </>
                    ))}
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

export default QualificationCommittee;
