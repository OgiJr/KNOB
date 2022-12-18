import React from "react";
import SEO from "../common/SEO";
import TabOne from "../elements/tab/Tab";
import Copyright from "../common/footer/Copyright";
import Header from "../common/header/Header";
import SplitOne from "../elements/split/SplitOne";

const AboutUs = () => {
  return (
    <>
      <Header btnStyle="btn-small round btn-icon" HeaderSTyle="" />
      <SEO title="За нас" />
      <main className="page-wrapper">
        {/* Start Slider Area  */}
        <div
          className="slider-area slider-style-1 height-850 bg_image"
          data-black-overlay="2"
          style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/about/about-6.jpg)` }}
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
                  <h1 className="title display-one mt-10">За нас</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Slider Area  */}

        {/* Start Information Area  */}
        <SplitOne />
        {/* End Main Area  */}

        {/* Start Priorities Area  */}
        <TabOne />
        {/* End Main Area  */}

        {/* Start Goals  */}
        <div className="row" style={{ marginLeft: 5, marginRight: 5 }}>
          <div className="col-lg-6 hide-mobile">
            <div className="content-right">
              <h4 className="title" style={{ textAlign: "center" }}>
                Цели
              </h4>
              <img src="images/about/about-5.jpg" style={{ borderRadius: 100 }} alt="" />
            </div>
          </div>
          <div className="col-lg-6 mt_md--30 mt_sm--30">
            <div className="content-left">
              <h5 className="subtitle">Целите на Камарата на независимите оценители в България са:</h5>
              <div className="description">
                <ul>
                  <li style={{ fontSize: "16px" }}>
                    Организира и ръководи своята дейността съгласно чл.22, ал.3 от Закона за независимите оценители;
                  </li>
                  <li style={{ fontSize: "16px" }}>
                    Организира процеса на обучение и придобиване на правоспособност на независим оценител;
                  </li>
                  <li style={{ fontSize: "16px" }}>
                    Издава документ за оценителска правоспособност на физическите лица и личен печат;
                  </li>
                  <li style={{ fontSize: "16px" }}>
                    Създава, поддържа и актуализира единния Регистър към Камарата, който включва: физическите лицата с
                    оценителска правоспособност по видовете оценки, регламентирани в чл.6 на Закона за независимите
                    оценители и дружествата на независимите оценители с оценителите – физическите лица, които работят за
                    тях;
                  </li>
                  <li style={{ fontSize: "16px" }}>
                    Методически ръководи, контролира при необходимост изпълнението на задълженията на независимите
                    оценители и налага наказанията, предвидени в чл. 36 на ЗНО;
                  </li>
                  <li style={{ fontSize: "16px" }}>
                    Спомага за разрешаването на спорове между своите членове, както и между членовете на Камарата и
                    трети лица;
                  </li>
                  <li style={{ fontSize: "16px" }}>
                    Създава правила за упражняване на професията като разработва и издава указания, правилници,
                    методики, оценителски стандарти и други документи, касаещи професионалната дейност на оценителите;
                  </li>
                  <li style={{ fontSize: "16px" }}>Приема методика за остойностяване на оценителските услуги.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End  Goals  */}

        {/* Start Problems  */}
        <div className="row" style={{ marginLeft: 5, marginRight: 5, marginTop: 50 }}>
          <div className="col-lg-6">
            <div className="content-left">
              <h4 className="title" style={{ textAlign: "center" }}>
                Задачи
              </h4>
              <img src="images/about/about-2.jpg" style={{ borderRadius: 100, marginTop: 20 }} alt="" />
            </div>
          </div>
          <div className="col-lg-6 mt_md--30 mt_sm--30">
            <div className="content-right">
              <h5 className="subtitle">В изпълнение на своите цели КНОБ има следните задачи:</h5>
              <div className="description">
                <ul>
                  <li style={{ fontSize: "16px" }}>
                    Организира и ръководи своята дейността съгласно чл.22, ал.3 от Закона за независимите оценители;
                  </li>
                  <li style={{ fontSize: "16px" }}>
                    Организира процеса на обучение и придобиване на правоспособност на независим оценител;
                  </li>
                  <li style={{ fontSize: "16px" }}>
                    Издава документ за оценителска правоспособност на физическите лица и личен печат;
                  </li>
                  <li style={{ fontSize: "16px" }}>
                    Създава, поддържа и актуализира единния Регистър към Камарата, който включва: физическите лицата с
                    оценителска правоспособност по видовете оценки, регламентирани в чл.6 на Закона за независимите
                    оценители и дружествата на независимите оценители с оценителите – физическите лица, които работят за
                    тях;
                  </li>
                  <li style={{ fontSize: "16px" }}>
                    Методически ръководи, контролира при необходимост изпълнението на задълженията на независимите
                    оценители и налага наказанията, предвидени в чл. 36 на ЗНО;
                  </li>
                  <li style={{ fontSize: "16px" }}>
                    Спомага за разрешаването на спорове между своите членове, както и между членовете на Камарата и
                    трети лица;
                  </li>
                  <li style={{ fontSize: "16px" }}>
                    Създава правила за упражняване на професията като разработва и издава указания, правилници,
                    методики, оценителски стандарти и други документи, касаещи професионалната дейност на оценителите;
                  </li>
                  <li style={{ fontSize: "16px" }}>Приема методика за остойностяване на оценителските услуги.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* End  Problems */}

        <div style={{ marginTop: "3%" }}>
          <Copyright style={{ marginTop: "0px" }} />
        </div>
      </main>
    </>
  );
};

export default AboutUs;
