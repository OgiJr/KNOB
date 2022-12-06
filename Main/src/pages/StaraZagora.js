import React from "react";
import SEO from "../common/SEO";
import Header from "../common/header/Header";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Copyright from "../common/footer/Copyright";
import "../assets/scss/elements/bar.css";
import BarTable from "../components/table/barTable";

const StaraZagora = () => {
  return (
    <>
      <SEO title="За нас" />
      <main className="page-wrapper">
        <Header btnStyle="btn-small round btn-icon" HeaderSTyle="" />

        {/* Start Slider Area  */}
        <div className="slider-area slider-style-1 height-850 bg_image" data-black-overlay="7" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/banner/stara-zagora.jpg)` }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner pt--80 text-center">
                  <div>
                    <h3 className="rn-sub-badge">
                      <span className="theme-gradient hidden md:flex">Камара на независимите оценители в България</span>
                    </h3>
                  </div>
                  <h1 className="title display-one mt-10">Стара Загора</h1>
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
                    <img className="radius-small" src="./images/bar/stara-zagora.jpg" alt="about" />
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
                            <div className="inner">IBAN BG61 BPBI 7942 1079 5016 09</div>
                          </div>
                        </TabPanel>
                      </div>
                    </div>
                  </div>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
        {/* End Info Area  */}

        {/* Start  Search Area*/}
        <BarTable />
        {/* End Search Area */}
        <div style={{ marginTop: "3%" }}>
          <Copyright style={{ marginTop: "0px" }} />
        </div>
      </main>
    </>
  );
};

export default StaraZagora;
