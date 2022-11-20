import React from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import BreadcrumbOne from "../breadcrumb/BreadcrumbOne";
import SectionTitle from "../sectionTitle/SectionTitle";
import AccordionOne from "../accordion/AccordionOne";
import Separator from "../separator/Separator";

const HelpfulLinks = () => {
  return (
    <>
      <SEO title="Accordion || Doob - React Business  Template" />
      <Layout>
        <BreadcrumbOne
          title="The Easiest Way To Create Website <br /> Quick Copy & Make site."
          rootUrl="/"
          parentUrl="Home"
          currentUrl="Accordion"
        />
        <div className="main-content">
          {/* Start Accordion Area  */}
          <div className="rn-accordion-area rn-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="Полезни "
                    title="Връзки"
                    description=""
                  />
                </div>
              </div>
              <div className="row mt--35 row--20">
                <div className="col-lg-10 offset-lg-1">
                  <AccordionOne customStyle="" />
                </div>
              </div>
            </div>
          </div>
          {/* End Accordion Area  */}
          <Separator />

          <Separator />

          <Separator />

          <Separator />
        </div>
      </Layout>
    </>
  );
};
export default HelpfulLinks;
