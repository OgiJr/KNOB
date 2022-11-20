import React from "react";
import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import SEO from "../common/SEO";
import HeaderOne from "../common/header/HeaderOne";
import FooterOne from "../common/footer/FooterOne";
import Copyright from "../common/footer/Copyright";
import Separator from "../elements/separator/Separator";
import Accents from "../elements/about/Accents";
import { HashLink } from "react-router-hash-link";
import BlogHomePage from "../components/blog/BlogHomePage";

const HomeDefault = () => {
  return (
    <>
      <SEO title="Business Consulting" />
      <main className="page-wrapper">
        <HeaderOne btnStyle="btn-small round btn-icon" />

        {/* Start Slider Area  */}
        <div className="slider-area slider-style-1 variation-default height-850 bg_image" data-black-overlay="7" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/main-banner-2.jpg)` }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner text-center">
                  <span className="subtitle">
                    <span style={{ color: "orange" }}>К</span>омпетентност <span style={{ color: "orange" }}>Н</span>езависимост <span style={{ color: "orange" }}>О</span>бективност <span style={{ color: "orange" }}>Б</span>езпристрасност
                  </span>
                  <p className="description">КНОБ осигурява и регулира упражняването на професията на независим оценител в интерес на обществото.</p>
                  <div className="button-group">
                    <a className="btn-default btn-medium round btn-icon" href="https://themeforest.net/checkout/from_item/33571911?license=regular">
                      Публичен регистър
                      <i className="icon">
                        <FiArrowRight />
                      </i>
                    </a>
                    <Link className="btn-default btn-medium btn-border round btn-icon" to="#">
                      Членове на КНОБ
                      <i className="icon">
                        <FiArrowRight />
                      </i>
                    </Link>
                    <br /> <br />
                    <HashLink className="btn-default btn-medium btn-border round btn-icon" smooth to="#banks">
                      Банкови сметки{" "}
                      <i className="icon">
                        <FiArrowRight />
                      </i>
                    </HashLink>
                    <a className="btn-default btn-medium round btn-icon" href="#banks">
                      Документи
                      <i className="icon">
                        <FiArrowRight />
                      </i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Slider Area  */}

        {/* Start About Area  */}
        <Accents id="banks" />
        {/* End About Area  */}

        <Separator />

        {/* Start About Area  */}
        <BlogHomePage />
        {/* End About Area  */}

        <Copyright />
      </main>
    </>
  );
};
export default HomeDefault;
