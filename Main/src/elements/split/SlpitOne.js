import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const SlpitOne = () => {
  return (
    <div className="rn-splite-style" style={{ marginTop: "100px" }}>
      <div className="split-wrapper">
        <div className="row no-gutters radius-10 align-items-center">
          <div className="col-lg-12 col-xl-6 col-12">
            <div className="thumbnail image-left-content">
              <img src="./images/about/about-1.jpg" alt="about" />
            </div>
          </div>
          <div className="col-lg-12 col-xl-6 col-12">
            <div className="split-inner">
              <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={true}>
                <h4 className="title">Информация за КНОБ</h4>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={true}>
                <p className="description">Камарата на независимите оценители в България е юридическо лице, създадено със Закона за независимите оценители (обнародван в ДВ бр. 98 от 14 ноември 2008 год., в сила от 15 декември 2008 год.)</p>
              </ScrollAnimation>

              <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={true}>
                <p className="description">Камарата на независимите оценители в България е професионална организация на физическите лица, които извършват оценителска дейност на територията на Република България.</p>
              </ScrollAnimation>

              <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={true}>
                <p className="description">Камарата на независимите оценители в България е учредена на Учредително събрание, състояло се в гр. София на 10, 11 и 21 март 2009 год. На Учредителното събрание е приет Устав на Камарата, Кодекс за професионална етика на независимите оценители и са избрани членове и председатели на Управителния съвет, Контролния съвет и Комисията по професионална етика на Камарата.</p>
              </ScrollAnimation>

              <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={true}>
                <p className="description">Камарата на независимите оценители в България е регистрирана по Закона за независимите оценители на 13 май 2009 год. в Регистър БУЛСТАТ.</p>
              </ScrollAnimation>

              <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={true}>
                <div className="view-more-button mt--35">
                  <a className="btn-default" href="/contact">
                    Свържете се с нас
                  </a>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlpitOne;
