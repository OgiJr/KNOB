import React from "react";

const SplitFour = () => {
  return (
    <div className="rn-splite-style" style={{ marginTop: "20px", marginLeft: "20px", marginRight: "20px" }}>
      <div className="split-wrapper">
        <div className="row no-gutters radius-10 align-items-center">
          <div className="col-lg-12 col-xl-6 col-12">
            <div className="thumbnail image-left-content">
              <img src="./images/team/team-03.jpg" alt="about" style={{ borderRadius: 50 }} />
            </div>
          </div>
          <div className="col-lg-12 col-xl-6 col-12">
            <div className="split-inner">
              <h4 className="title">Информация за комисията</h4>
              <p className="description">
                Органи на Камарата са Общо събрание, Управителен съвет, Контролен съвет и Комисия по професионална етика. <br /> Управителният съвет се състои от седем членове, от които един е Председател.{" "}
              </p>
              <p className="description">
                Контролният съвет се състои от пет членове, от които един е Председател. <br />
                Комисията по професионална етика се състои от пет членове, от които един е Председател.
              </p>
              <p className="description">
                Членовете и Председателите на Управителния съвет, Контролния съвет и Комисията по професионална етика се избират от Общото събрание, съгласно ЗНО. Управителният съвет и Контролният съвет се избират с мандат 4 години, а Комисията по професионална етика - 3 години, съгласно ЗНО. <br /> Камарата се представлява от Председателя на Управителния съвет.
              </p>{" "}
              <p className="description">Камарата на независимите оценители в България е регистрирана по Закона за независимите оценители на 13 май 2009 год. в Регистър БУЛСТАТ.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplitFour;
