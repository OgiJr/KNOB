import React from "react";
import SEO from "../common/SEO";
import Header from "../common/header/Header";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Copyright from "../common/footer/Copyright";
import "../assets/scss/elements/bar.scss";
import { Card, Text } from "@nextui-org/react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Sofia = () => {
  const { data } = useSWR(`${process.env.REACT_APP_API_URL}/api/get-regional-committee?city=Sofia`, fetcher);

  return (
    <>
      <SEO title="За нас" />
      <main className="page-wrapper">
        <Header btnStyle="btn-small round btn-icon" HeaderSTyle="" />

        {/* Start Slider Area  */}
        <div
          className="slider-area slider-style-1 height-850 bg_image"
          data-black-overlay="2"
          style={{ backgroundImage: `url(/images/about/banner.jpg)`, height: 300 }}
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner pt--80 text-center">
                  <div>
                    <h3 className="rn-sub-badge">
                      <span className="theme-gradient hidden md:flex">Камара на независимите оценители в България</span>
                    </h3>
                  </div>
                  <h1 className="title display-one mt-10">София</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Slider Area  */}

        {/* Start Info Area  */}
        <div className="col-lg-12 margin-responsive">
          <div className="row">
            <div>
              <Tabs>
                <div className="row row--30 align-items-center">
                  <div className="col-lg-5 hidden-phone">
                    <img className="radius-small" src="./images/bar/sofia.jpg" alt="about" />
                  </div>
                  <div className="col-lg-7 mt_md--40 mt_sm--40">
                    <div className="rn-default-tab">
                      <div className="tab-button-panel">
                        <TabList className="tab-button">
                          <Tab>
                            <div className="rn-tab-button">
                              <button>Информация</button>
                            </div>
                          </Tab>
                        </TabList>
                      </div>

                      <div className="tab-content-panel">
                        <TabPanel>
                          <div className="rn-tab-content">
                            <div className="inner">
                              Банка: ЮРОБАНК И ЕФ ДЖИ БЪЛГАРИЯ
                              <br />
                              IBAN: BG72BPBI79421079501605
                              <br />
                              BIC: BPBIBGSF
                            </div>
                          </div>
                        </TabPanel>
                        <Card css={{ p: "$6" }} isHoverable style={{ marginTop: 10 }}>
                          <Card.Header style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                            <Text h4 css={{ lineHeight: "$xs", textAlign: "center" }}>
                              Членове на управителния съвет
                            </Text>
                          </Card.Header>
                          <Card.Body css={{ py: "$2" }}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                              <b>Председател:</b>
                              <div style={{ display: "flex", flexDirection: "column" }}>
                                {data &&
                                  data.members &&
                                  data.members.map((item) => (
                                    <>
                                      {item.is_representative ? (
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
                    </div>
                  </div>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
        {/* End Info Area  */}
        <div style={{ marginTop: "3%" }}>
          <Copyright style={{ marginTop: "0px" }} />
        </div>
      </main>
    </>
  );
};

export default Sofia;
