import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import TabOne from "./TabOne";
import Separator from "../separator/Separator";

const Tab = () => {
  return (
    <>
      <div className="main-content">
        <Separator />

        {/* Start Elements Area  */}
        <div className="rwt-tab-area rn-section-gap">
          <div className="container">
            <div className="row mb--40">
              <div className="col-lg-12">
                <SectionTitle textAlign="text-center" radiusRounded="" title="Приоритети" description="" />
              </div>
            </div>
            <TabOne />
          </div>
        </div>
        {/* End Elements Area  */}
      </div>
    </>
  );
};
export default Tab;
