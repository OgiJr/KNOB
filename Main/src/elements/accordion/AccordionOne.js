import React from "react";
import { Accordion, Card, Button } from "react-bootstrap";

const AccordionOne = ({ customStyle }) => {
  return (
    <Accordion className={`rn-accordion-style ${customStyle}`} defaultActiveKey="0">
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
            Институции
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>
            <ul>
              <li style={{ color: "#ff6d00" }}>
                <a
                  style={{
                    color: "black",
                  }}
                  href="https://www.ivsc.org/"
                >
                  Комитет по международните оценителски стандарти
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                {" "}
                <a style={{ color: "black" }} href="https://www.appraisers.org/">
                  Aмериканско общество на оценителите
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="http://www.nprba.com/">
                  Руска оценителска колегия
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="https://www.propertymark.co.uk/">
                  Национална асоциация на оценителите - Великобритания
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="https://www.isa-appraisers.org/">
                  Международно общество на оценителите
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="https://tegova.org/">
                  TEGoVA - Европейска група на оценителските асоциации
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="https://www.appraisalinstitute.org/">
                  Оценителският институт (Appraisal Institute)
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="registryagency.bg/bg/">
                  Агенция по вписванията
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="https://www.cadastre.bg/">
                  Кадастър
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="https://www.ccbank.bg/">
                  Централна кооперативна банка
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="https://www.unionbank.bg/">
                  Юнионбанк
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="http://www.eibank.bg/cgi-sys/suspendedpage.cgi">
                  Стопанска и инвестиционна банка
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="https://www.worldbank.org/en/country/bulgaria">
                  Световна банка, офис София
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="https://www.fibank.bg/bg">
                  Първа инвестиционна банка
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="https://www.ubb.bg/">
                  Обединена българска банка
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="http://www.nasbank.bg/">
                  Насърчителна банка
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="https://www.postbank.bg/">
                  Евробанк
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="http://www.ebrd.com/">
                  Европейска банка за възстановяване и развитие
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="http://www.baefinvest.com/">
                  Българо - американски инвестиционен фонд
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="https://www.postbank.bg/">
                  Българска пощенска банка
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="https://dskbank.bg/">
                  Банка ДСК
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="https://www.bnb.bg/">
                  Българска народна банка
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="https://www.bia-bg.com/">
                  Бизнес оферти от цял свят
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="http://www.gli.government.bg/bg/page/394">
                  Нормативна уредба по инспекция на труда
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="http://www.bdata.bg/">
                  Агенция Бизнесдата - финансова информация
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="https://www.daxy.com/cgi-bin/page.py?ind=news">
                  Държавен вестник
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="http://im.nat.bg/">
                  Икономически справочник
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="http://bulstat.registryagency.bg/">
                  БУЛСТАТ
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="http://finance.news.bg/">
                  Ежедневни финансови анализи и прогнози, котировки в реално време, фондова борса, валутна информация
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="https://www.investor.bg/">
                  Финансов сайт за новини, анализи и дискусии
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="http://www.econ.bg/">
                  Икономически портал - информация в областта на икономиката, финансите, приватизацията, валутните и
                  капиталови пазари; малки и средни предприятия, икономическа статистика и др.
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="https://www.hugedomains.com/domain_profile.cfm?d=hotmonitor.com">
                  Виртуален бизнес център - портал с ръководства и софтуер за изготвяне на бизнес и маркетингови
                  планове, безплатни ръководства за бизнес планиране и др.
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="http://www.im.nat.bg/">
                  Икономически справочник - закони, нормативни актове, инструкции, стандарти и др. в икономическата и
                  финансовата сфера
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="https://ime.bg/">
                  Институт по пазарна икономика - политика, бизнес - среда, финанси и икономика, конкурентноспособност,
                  регионално развитие
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="https://www.bpo.bg/">
                  Патентно ведомство
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="https://www.nsi.bg/bg">
                  Национален статистически институт - статистика, БУЛСТАТ /справки/
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="https://www.cdad.bg/">
                  Централен депозитар
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="http://ced.bg/bg/">
                  Център за икономическо развитие - макроикономически и секторни изследвания и проучвания
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="http://alaric.bg/">
                  Държавна комисия по ценните книжа - закони и наредби, документи на ДКЦК, информация за инвеститорите
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="http://www.bepc.government.bg/">
                  Агенция за насърчаване на търговията - икономическа и фирмена информация, предстоящи панаири и
                  изложения, консултански, информационни и аналитично - проучвателни услуги
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="http://www.priv.government.bg/">
                  Агенция за приватизация - обяви, крайни срокове, прессъобщения, решения, статистика, приватизирани
                  предприятия, информационни карти, централизирани публични търгове, публично предлагане, целева
                  приватизация, сделки, одобряване от МС
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="https://www.nsi.bg/bg">
                  Национален статистически институт - статистически данни за основни икономически показатели на РБ
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="https://www.minfin.bg/">
                  Агенция за държавни вземания - търгове, оценители, нормативни документи
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="https://www.bulnao.government.bg/bg/">
                  Сметна палата на Република българия
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="http://www.constcourt.bg/">
                  Конституционен съд на Република България
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="https://www.minfin.bg/">
                  Министерство на финансите
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="https://www.mi.government.bg/">
                  Министерство на икономиката
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="http://www.minedu.government.bg/news-home/">
                  Министерство на образованието
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="https://www.mlsp.government.bg/">
                  Министерство на труда и социалната политика
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="https://www.justice.government.bg/">
                  Министерство на правосъдието
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="https://www.mod.bg/bg/">
                  Министерство на отбраната
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="http://www.government.bg/">
                  Правителство на РБ
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="https://www.president.bg/">
                  Президент на Република България
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="https://www.parliament.bg/bg">
                  Народно събрание
                </a>{" "}
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="1">
            Партньори
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="1">
          <Card.Body>
            <ul>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="https://www.appraisersassociation.org/">
                  Асоциация на американските оценители
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="https://www.mfa.government.bg/">
                  Министерство на външните работи
                </a>{" "}
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>

      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="2">
            Други
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="2">
          <Card.Body>
            <ul>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="http://bpbulgarianproperties.ru/">
                  Недвижимость в Болгарии
                </a>{" "}
              </li>
              <li style={{ color: "#ff6d00" }}>
                <a style={{ color: "black" }} href="http://valuer.ru/">
                  Valuer.RU - Портал на руските оценители
                </a>{" "}
              </li>
            </ul>
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
};
export default AccordionOne;
