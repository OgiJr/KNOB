import React, { useEffect, useState } from "react";
import SEO from "../common/SEO";
import Header from "../common/header/Header";
import Copyright from "../common/footer/Copyright";
import { Card } from "@nextui-org/react";
import RevData from "../data/rev/RevList.json";
import "../assets/scss/elements/rev.scss";
const Rev = () => {
  const alldataRev = RevData;
  const [getAllItems] = useState(alldataRev);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    setVisibleItems(getAllItems.filter((item) => item.id));
  }, []);

  return (
    <>
      <SEO title="REV" />
      <main className="page-wrapper">
        <Header btnStyle="btn-small round btn-icon" HeaderSTyle="" />

        {/* Start Problems  */}
        <div className="row mt--40 row--30" style={{ marginLeft: "5%", marginRight: "5%" }}>
          <div className="col-lg-6">
            <div className="content-left">
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src="images/team/rev.png" style={{ borderRadius: 100, marginTop: 20, alignSelf: "center", height: 150, width: 150 }} />
              </div>
              <br />
              <a href="/uploaded/Rev/кодекс.pdf" className="hidden-mobile" style={{ textDecoration: "underline", color: "red" }}>
                <img src="images/icons/file.png" style={{ width: 30, height: 30 }} /> Кодекс за професионална етика, правила и норми на поведение на независими оценители, сертифицирани и придобили статут REV
              </a>
              <br />
              <a href="/uploaded/Rev/критерии.pdf" className="hidden-mobile" style={{ textDecoration: "underline", color: "red" }}>
                <img src="images/icons/file.png" style={{ width: 30, height: 30 }} /> Критерии за проверка и оценка на представените оценителски доклади
              </a>
              <br />
              <a href="/uploaded/Rev/отчет.pdf" className="hidden-mobile" style={{ textDecoration: "underline", color: "red" }}>
                <img src="images/icons/file.png" style={{ width: 30, height: 30 }} /> Годишен отчет на независимите оценители със статут REV
              </a>
              <br />
              <a href="/uploaded/Rev/тарифа.pdf" className="hidden-mobile" style={{ textDecoration: "underline", color: "red" }}>
                <img src="images/icons/file.png" style={{ width: 30, height: 30 }} /> Тарифа – Финансови отношения, приложими към независими оценители, относно придобиване/придобили статут на сертифициран REV
              </a>
              <br />
              <a href="/uploaded/Rev/ng4kc798yhjf1s5r.doc" className="hidden-mobile" style={{ textDecoration: "underline", color: "blue" }}>
                <img src="images/icons/file.png" style={{ width: 30, height: 30 }} /> Указания за подаване на Заявление и изискуеми документи и декларации за кандидатстване за придобиване на статут REV
              </a>
            </div>
          </div>
          <div className="col-lg-6 mt_md--30 mt_sm--30">
            <div className="content-right" style={{ marginLeft: 10, marginRight: 10 }}>
              <h5 className="subtitle" style={{ textAlign: "center" }}>
                КАМАРА НА НЕЗАВИСИМИТЕ ОЦЕНИТЕЛИ В БЪЛГАРИЯ СЕРТИФИЦИРА СЪС СТАТУТ REV - ПРИЗНАТ ЕВРОПЕЙСКИ ОЦЕНИТЕЛ
              </h5>
              <div className="description">
                <p style={{ fontSize: 14 }}>
                  Председателят на Управителния Съвет на Камарата на независимите оценители в България, през м. май 2018 г. подписа договор с международната организация TEGoVA даващ право на КНОБ да сертифицира независими оценители със статут REV – признат европейски оценител по правоспособност „Недвижими имоти”.
                  <br />
                  <br />
                  REV статутът е знак за високи постижения в оценките на недвижими имоти, който показва на международните и местни Възложители и Потребители, че конкретния независим оценител е с високо признато европейско и международно ниво.
                  <br />
                  <br />
                  Независимите оценители притежаващи сертификат за придобит статут REV се вписват в специален Регистър на оценители на TEGoVA и са ценени и предпочитани от местните и международните Възложители и Потребители. Независимите оценители притежаващи статут REV полагат специален печат на своите оценителски доклади. Местните и международни Възложители/Потребители, могат да правят справки и възлагания, като директно взимат информация от този Регистър. В изпълнение на договора КНОБ надлежно ще обяви на сайта си сертифицираните независими оценители със статут REV.
                  <br />
                  <br />
                  Прилагането на Българските стандарти за оценяване /БСО/ в областта на Недвижимите имоти в комбинация с притежаването на сертификат за придобит статут REV е израз на високо професионално ниво.
                  <br />
                  <br />
                  Камарата на независимите оценители, като единствена Камара на независимите оценители в България съгласно ЗНО и в изпълнение подписания договор с TEGoVA, гарантира на независимите оценители коректност при сертифицирането със статут REV, защита професионалните интереси и продължаваща квалификация и възможност за развитие на независимите оценители.
                  <br />
                  <br />
                  Единствено КНОБ може да гарантира равни условия, демократично отношение и прозрачност, без наличие на частни интереси с оглед своите регулативни функции, съгласно ЗНО.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* End  Problems */}
        <br />
        <div style={{ display: "flex", flexDirection: "column" }}>
          {visibleItems.map((item) => (
            <div key={item.id} className="cardsRev" style={{ marginTop: 20 }}>
              <Card className="card1" isPressable>
                <Card.Header>{item.c1}</Card.Header>
                <Card.Body>
                  {item.dates1}
                  <br />
                  <br />
                  {item.name1}
                  <br />
                  {item.bgName1}
                  <br />
                  <br />
                  {item.city1}
                  <br />
                  {item.phone1}
                </Card.Body>
              </Card>
              <Card className="card2" isPressable>
                <Card.Header> {item.c2}</Card.Header>
                <Card.Body>
                  {item.dates2}
                  <br />
                  <br />
                  {item.name2}
                  <br />
                  {item.bgName2}
                  <br />
                  <br />
                  {item.city2}
                  <br />
                  {item.phone2}
                </Card.Body>
              </Card>
            </div>
          ))}
          <Card style={{ marginTop: 20, marginLeft: "7%", width: "85%" }} isPressable>
            <Card.Header>Certificate / Сертификат: REV-BG/CIAB/2026/1</Card.Header>
            <Card.Body>
              Issued on / Издаден на: 01/06/2021 Valid until / Валиден до: 31/05/2026
              <br />
              <br />
              Name: Ivanchev, Nikolay
              <br />
              Имена на български език: Николай Иванов Иванчев
              <br />
              <br />
              City / Град: Botevgrad / Ботевград
              <br />
              Phone / Телефон: +359 89 860 09 07
            </Card.Body>
          </Card>
        </div>
        <div style={{ marginTop: "3%" }}>
          <Copyright style={{ marginTop: "0px" }} />
        </div>
      </main>
    </>
  );
};

export default Rev;
