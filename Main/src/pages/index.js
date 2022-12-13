import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import SEO from "../common/SEO";
import Header from "../common/header/Header";
import Copyright from "../common/footer/Copyright";
import Separator from "../elements/separator/Separator";
import Accents from "../elements/about/Accents";
import { HashLink } from "react-router-hash-link";
import BlogHomePage from "../components/blog/BlogHomePage";

const HomeDefault = () => {
  return (
    <>
      <SEO title="Начало" />
      <main className="page-wrapper">
        <Header btnStyle="btn-small round btn-icon" />
        {/* Start Slider Area  */}
        <div className="slider-area slider-style-1 variation-default height-850 bg_image" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg/main-banner-2.jpg)`, height: "auto" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner text-center">
                  <div className="button-group" style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", marginTop: 40 }}>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <a className="btn-default btn-medium round btn-icon" href="https://public.ciab-bg.com/" style={{ width: 210 }}>
                        Към стария сайт
                      </a>
                      <a className="btn-default btn-medium round btn-icon" href="public-registry" style={{ width: 210 }}>
                        Публичен регистър
                      </a>
                    </div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <a className="btn-default btn-medium round btn-icon" href="/rev-registry" style={{ width: 210 }}>
                        Регистър на REV
                      </a>
                      <a className="btn-default btn-medium round btn-icon" href="#" style={{ width: 210 }}>
                        Годишен отчет
                      </a>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <a className="btn-default btn-medium round btn-icon" href="/documents" style={{ width: 210 }}>
                        Документи за вписване
                      </a>
                    </div>
                    <div style={{ display: "flex", flexDirection: "row" }}>
                      <a className="btn-default btn-medium round btn-icon" href="/login" style={{ width: 210, marginTop: 20, marginBottom: 40 }}>
                        Вход
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Slider Area  */}

        {/* Start About Area  */}
        {/* <Accents /> */}
        {/* End About Area  */}

        {/* Start About Area  */}
        <BlogHomePage />
        {/* End About Area  */}

        <Copyright />
      </main>
    </>
  );
};
export default HomeDefault;
