import React from "react";
import SEO from "../common/SEO";
import Header from "../common/header/Header";
import SplitOne from "../elements/split/SplitOne";
import TabOne from "../elements/tab/Tab";
import Copyright from "../common/footer/Copyright";

const Burgas = () => {
  return (
    <>
      <SEO title="За нас" />
      <main className="page-wrapper">
        <Header btnStyle="btn-small round btn-icon" HeaderSTyle="" />

        {/* Start Slider Area  */}
        <div className="slider-area slider-style-1 height-850 bg_image" data-black-overlay="7" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/banner/burgas.webp)` }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="inner pt--80 text-center">
                  <div>
                    <h3 className="rn-sub-badge">
                      <span className="theme-gradient hidden md:flex">Камара на независимите оценители в България</span>
                    </h3>
                  </div>
                  <h1 className="title display-one mt-10">Бургас, Сливен и Ямбол</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Slider Area  */}

        {/* Start Main Area  */}
        <SplitOne />
        {/* End Main Area  */}

        {/* Start Main Area  */}
        <TabOne />
        {/* End Main Area  */}

        {/* Start Goals  */}
        <div className="row mt--40 row--30" style={{ marginLeft: "5%", marginRight: "5%" }}>
          <div className="col-lg-6 mt_md--30 mt_sm--30">
            <div className="content-left">
              <h5 className="subtitle">Целите на Камарата на независимите оценители в България са:</h5>
              <div className="description">
                <ul>
                  <li style={{ fontSize: "16px" }}>Организира и ръководи своята дейността съгласно чл.22, ал.3 от Закона за независимите оценители;</li>
                  <li style={{ fontSize: "16px" }}>Организира процеса на обучение и придобиване на правоспособност на независим оценител;</li>
                  <li style={{ fontSize: "16px" }}>Издава документ за оценителска правоспособност на физическите лица и личен печат;</li>
                  <li style={{ fontSize: "16px" }}>Създава, поддържа и актуализира единния Регистър към Камарата, който включва: физическите лицата с оценителска правоспособност по видовете оценки, регламентирани в чл.6 на Закона за независимите оценители и дружествата на независимите оценители с оценителите – физическите лица, които работят за тях;</li>
                  <li style={{ fontSize: "16px" }}>Методически ръководи, контролира при необходимост изпълнението на задълженията на независимите оценители и налага наказанията, предвидени в чл. 36 на ЗНО;</li>
                  <li style={{ fontSize: "16px" }}>Спомага за разрешаването на спорове между своите членове, както и между членовете на Камарата и трети лица;</li>
                  <li style={{ fontSize: "16px" }}>Създава правила за упражняване на професията като разработва и издава указания, правилници, методики, оценителски стандарти и други документи, касаещи професионалната дейност на оценителите;</li>
                  <li style={{ fontSize: "16px" }}>Приема методика за остойностяване на оценителските услуги.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-6" style={{ marginTop: "100px" }}>
            <div className="content-right">
              <h4 className="title" style={{ textAlign: "center" }}>
                Цели
              </h4>
              <img src="images/about/about-5.jpg" style={{ borderRadius: 100 }} />
            </div>
          </div>
        </div>
        {/* End  Goals  */}

        {/* Start Problems  */}
        <div className="row mt--40 row--30" style={{ marginLeft: "5%", marginRight: "5%" }}>
          <div className="col-lg-6">
            <div className="content-left">
              <h4 className="title">Задачи</h4>
              <img src="images/about/about-2.jpg" style={{ borderRadius: 100, marginTop: 20 }} />
            </div>
          </div>
          <div className="col-lg-6 mt_md--30 mt_sm--30">
            <div className="content-right">
              <h5 className="subtitle">В изпълнение на своите цели КНОБ има следните задачи:</h5>
              <div className="description">
                <ul>
                  <li style={{ fontSize: "16px" }}>Организира и ръководи своята дейността съгласно чл.22, ал.3 от Закона за независимите оценители;</li>
                  <li style={{ fontSize: "16px" }}>Организира процеса на обучение и придобиване на правоспособност на независим оценител;</li>
                  <li style={{ fontSize: "16px" }}>Издава документ за оценителска правоспособност на физическите лица и личен печат;</li>
                  <li style={{ fontSize: "16px" }}>Създава, поддържа и актуализира единния Регистър към Камарата, който включва: физическите лицата с оценителска правоспособност по видовете оценки, регламентирани в чл.6 на Закона за независимите оценители и дружествата на независимите оценители с оценителите – физическите лица, които работят за тях;</li>
                  <li style={{ fontSize: "16px" }}>Методически ръководи, контролира при необходимост изпълнението на задълженията на независимите оценители и налага наказанията, предвидени в чл. 36 на ЗНО;</li>
                  <li style={{ fontSize: "16px" }}>Спомага за разрешаването на спорове между своите членове, както и между членовете на Камарата и трети лица;</li>
                  <li style={{ fontSize: "16px" }}>Създава правила за упражняване на професията като разработва и издава указания, правилници, методики, оценителски стандарти и други документи, касаещи професионалната дейност на оценителите;</li>
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

export default Burgas;
