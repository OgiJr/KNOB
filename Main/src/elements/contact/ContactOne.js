import React from "react";
import ContactForm from "./ContactForm";
import GoogleMapStyle from "./GoogleMapStyle";
import { FiHeadphones, FiMail, FiMapPin } from "react-icons/fi";

const ContactOne = () => {
  return (
    <>
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

      <div className="row mt--40 row--15">
        <div className="col-lg-7">
          <ContactForm formStyle="contact-form-1" />
        </div>
        <div className="col-lg-5 mt_md--30 mt_sm--30">
          <GoogleMapStyle />
        </div>
      </div>
    </>
  );
};
export default ContactOne;
