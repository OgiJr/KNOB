import React from "react";
import SEO from "../../common/SEO";
import Layout from "../../common/Layout";
import SectionTitle from "../sectionTitle/SectionTitle";
import { Card, Text } from "@nextui-org/react";
import { FiHeadphones, FiMail, FiMapPin } from "react-icons/fi";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <>
      <SEO title="Контакт" />
      <Layout>
        <div className="main-content">
          {/* Start Contact Area  */}
          <div className="rwt-contact-area rn-section-gap">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 mb--40">
                  <SectionTitle
                    textAlign="text-center"
                    radiusRounded=""
                    subtitle="Контактна Форма"
                    title="Контакти"
                    description="Ние ценим Вашите комплименти, оплаквания и предложения. Надяваме се да получим обратна връзка от Вас."
                  />
                </div>
              </div>
              <div className="row row--15">
                <div className="col-lg-12">
                  <div className="rn-contact-address mt_dec--30">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 col-12">
                        <div className="rn-address">
                          <div className="icon">
                            <FiHeadphones />
                          </div>
                          <div className="inner">
                            <h4 className="title">Тел.:</h4>
                            <p>
                              <a href="tel:	+359 2 4833863"> +359 2 4833863</a>
                            </p>
                            <p>
                              <a href="tel:+359 884 113900">+359 884 113900</a>
                            </p>
                            <p>
                              <a href="tel:+359 882 433826">+359 882 433826</a>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6 col-12">
                        <div className="rn-address">
                          <div className="icon">
                            <FiMail />
                          </div>
                          <div className="inner">
                            <h4 className="title">Имейл:</h4>
                            <p>
                              <a href="mailto:admin@gmail.com">office@ciab-bg.com</a>
                            </p>
                            <br></br>
                            <br></br>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6 col-12 ">
                        <div className="rn-address">
                          <div className="icon">
                            <FiMapPin />
                          </div>
                          <div className="inner">
                            <h4 className="title">Адрес:</h4>
                            <p>гр. София 1000, ул. "Г.С.Раковски" № 122, вх. Б</p>
                          </div>
                          <br></br>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt--40 row--16">
                <div style={{ display: "flex", flex: 4, flexDirection: "column" }}>
                  <ContactForm formStyle="contact-form-1" />
                </div>

                <div
                  style={{
                    display: "flex",
                    flex: 4,
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src="/images/about/map.png" alt="" />
                </div>
              </div>
              <div style={{ marginTop: 20, marginBottom: 20 }}>
                <div className="mt--40 cardsAccent">
                  <Card isHoverable isPressable>
                    <Card.Header>
                      <img
                        alt="nextui logo"
                        src="images/icons/map.png"
                        style={{ borderRadius: "40px important!" }}
                        width="34px"
                        height="34px"
                      />
                      <Text style={{ fontWeight: "bold", marginTop: "27px" }}>За членски внос</Text>
                    </Card.Header>
                    <Card.Body css={{ py: "$2" }}>
                      <Text>
                        <b>Адрес:</b> <br /> гр. София 1000, ул. "Г.С.Раковски" № 122, вх. Б
                        <br />
                        <b>ЕИК: </b>
                        175681478
                        <br />
                        <b>IBAN: </b>
                        BG56 BPBI 7942 1079 5016 02
                        <br />
                        <b>BIC: </b>
                        BPBIBGSF
                        <br />
                        <b>Банка: </b>
                        "Юробанк България" АД
                      </Text>
                    </Card.Body>
                  </Card>
                  <Card isHoverable isPressable>
                    <Card.Header>
                      <img alt="nextui logo" src="images/icons/map.png" width="34px" height="34px" />
                      <Text style={{ fontWeight: "bold", marginTop: "27px" }}>
                        Такса за вписване в регистъра на КНОБ
                      </Text>
                    </Card.Header>
                    <Card.Body css={{ py: "$2" }}>
                      <Text>
                        <b>Адрес:</b> <br /> гр. София 1000, ул. "Г.С.Раковски" № 122, вх. Б
                        <br />
                        <b>ЕИК: </b>
                        175681478
                        <br />
                        <b>IBAN: </b>
                        BG29 BPBI 7942 1079 5016 03
                        <br />
                        <b>BIC: </b>
                        BPBIBGSF
                        <br />
                        <b>Банка: </b>
                        "Юробанк България" АД
                      </Text>
                    </Card.Body>
                  </Card>
                </div>
                <div className="cardsAccent" style={{ marginTop: 20 }}>
                  <Card css={{ p: "$6" }} isHoverable isPressable>
                    <Card.Header>
                      <img alt="nextui logo" src="images/icons/map.png" width="34px" height="34px" />
                      <Text style={{ fontWeight: "bold", marginTop: "27px" }}>За курсове и изпити </Text>
                    </Card.Header>
                    <Card.Body css={{ py: "$2" }}>
                      <Text>
                        <b>Адрес:</b> <br /> гр. София 1000, ул. "Г.С.Раковски" № 122, вх. Б
                        <br />
                        <b>ЕИК: </b>
                        175681478
                        <br />
                        <b>IBAN: </b>
                        BG07 BPBI 7942 1079 5016 11
                        <br />
                        <b>BIC: </b>
                        BPBIBGSF
                        <br />
                        <b>Банка: </b>
                        "Юробанк България" АД
                      </Text>
                    </Card.Body>
                  </Card>
                  <Card css={{ p: "$6" }} isHoverable isPressable>
                    <Card.Header>
                      <img alt="nextui logo" src="images/icons/map.png" width="34px" height="34px" />
                      <Text style={{ fontWeight: "bold", marginTop: "27px" }}>
                        Годишна вноска на основание чл.10, ал. 8 от Кодекс за професионална етика
                      </Text>
                    </Card.Header>
                    <Card.Body css={{ py: "$2" }}>
                      <Text>
                        <b>Адрес:</b> <br /> гр. София 1000, ул. "Г.С.Раковски" № 122, вх. Б
                        <br />
                        <b>ЕИК: </b>
                        175681478
                        <br />
                        <b>IBAN: </b>
                        BG 23 BPBI 7942 1079 5016 14
                        <br />
                        <b>BIC: </b>
                        BPBIBGSF
                        <br />
                        <b>Банка: </b>
                        "Юробанк България" АД
                      </Text>
                    </Card.Body>
                  </Card>
                </div>
              </div>{" "}
            </div>
          </div>
          {/* End Contact Area  */}
        </div>
      </Layout>
    </>
  );
};
export default Contact;
