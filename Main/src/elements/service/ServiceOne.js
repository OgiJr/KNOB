import React from "react";
import ScrollAnimation from "react-animate-on-scroll";

const ServiceList = [
  {
    icon: "pin",
    title: "Съобщение",
    description:
      "Приемното време на Централен офис на КНОБ с клиенти на място е от понеделник до петък от 09:30 до 16:30 часа с половин час обедна почивка от 13:00 до 13:30 часа.",
  },
  {
    icon: "doc",
    title: "Инстурктаж",
    description:
      "<b> Инструкция за оформяне на оценителски доклад от дружества на независим оценител. </b> В изпълнение на правомощията си по чл. 22, ал. 3, т. 7, КНОБ указва на дружествата на независим оценител, че съгласно чл. 17, ал. 1, в оценките подписани от дружеството на независим оценител задължително трябва да се съдържа и подпис на независимия оценител - физическо лице, отговорно за изготвянето на оценката. Не подписването на оценката, която не е подписана съгласно чл. 17, ал. 1 да се счита за невалидна поради нарушаване на императивното изискване на чл. 6, ал. 3 от ЗНО.",
  },
];

const ServiceOne = ({ textAlign, serviceStyle }) => {
  return (
    <div style={{ flexAlign: "column" }}>
      <h1 style={{ textAlign: "center" }}>Акценти</h1>
      <div className="row row--15 service-wrapper" style={{ justifyContent: "center" }}>
        {ServiceList.map((val, i) => (
          <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
            <ScrollAnimation animateIn="fadeInUp" animateOut="fadeInOut" animateOnce={true}>
              <div className={`service ${serviceStyle} ${textAlign}`}>
                {val.icon === "pin" ? (
                  <img className="icon" src="images/icons/pin.png" alt="Pinned" />
                ) : (
                  <img className="icon" src="images/icons/doc.png" alt="Docs" />
                )}
                <div className="content">
                  <h4 className="title w-600">{val.title}</h4>
                  <p
                    className="description b1 color-gray mb--0"
                    dangerouslySetInnerHTML={{ __html: val.description }}
                  ></p>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ServiceOne;
