import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

const TabOne = () => {
  return (
    <div>
      <div className="row">
        <div className="col-lg-12">
          <Tabs>
            <div className="row row--30 align-items-center">
              <div className="col-lg-5">
                <img className="radius-small" src="./images/about/about-3.jpg" alt="about" />
              </div>
              <div className="col-lg-7 mt_md--40 mt_sm--40">
                <div className="rn-default-tab">
                  <div className="tab-button-panel">
                    <TabList className="tab-button">
                      <Tab>
                        <div className="rn-tab-button">
                          <button>Ролята на КНОБ</button>
                        </div>
                      </Tab>
                      <Tab>
                        <div className="rn-tab-button">
                          <button>Какво допринася КНОБ</button>
                        </div>
                      </Tab>
                    </TabList>
                  </div>

                  <div className="tab-content-panel">
                    <TabPanel>
                      <div className="rn-tab-content">
                        <div className="inner">
                          Камарата на независимите оценители в България осигурява и регулира упражняването на професията
                          на независим оценител в интерес на обществото. Камарата е орган по признаване на професионална
                          квалификация за професията независим оценител по смисъла на чл. 4, т. 5 от Закона за
                          признаване на професионални квалификации.
                        </div>
                      </div>
                    </TabPanel>

                    <TabPanel>
                      <div className="rn-tab-content">
                        <div className="inner">
                          По смисъла на Закона за признаване на професионални квалификации и Закона за независимите
                          оценители, Камарата на независимите оценители в България е органът в Република България по
                          организиране процеса на обучение, придобиване и признаване на правоспособност на независим
                          оценител, водене на публичен Регистър на незвисимите оценители, утвърждаване стандартите за
                          оценяване, спазване на Кодекса за професионална етика на независимите оценители, провеждане на
                          дисциплинарни производства и оспорване на оценки по Закона за независимите оценители.
                        </div>
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
  );
};

export default TabOne;
