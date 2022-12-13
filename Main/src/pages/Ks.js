import React, { useEffect, useState } from "react";
import SEO from "../common/SEO";
import Header from "../common/header/Header";
import Copyright from "../common/footer/Copyright";
import { Button, Card, Input, Pagination } from "@nextui-org/react";
import RevData from "../data/rev/RevList.json";
import "../assets/scss/elements/rev.scss";
import BreadcrumbOne from "../elements/breadcrumb/BreadcrumbOne";

const Ks = () => {
  const alldataRev = RevData;
  const [getAllItems] = useState(alldataRev);
  const [visibleItems, setVisibleItems] = useState([]);
  const protocols = [
    { key: 1, title: "Примерен протокол", description: "Описание на примерен протокол. Описание на примерен протокол. Описание на примерен протокол.", fileName: "Примерен файл", fileUrl: "#", imageUrl: "/images/blog/blog-11.jpg", date: "12.12.2022г." },
    { key: 2, title: "Примерен протокол", description: "Описание на примерен протокол. Описание на примерен протокол. Описание на примерен протокол.", fileName: "Примерен файл", fileUrl: "#", imageUrl: "/images/blog/blog-02.jpg", date: "12.12.2022г." },
  ];

  useEffect(() => {
    setVisibleItems(getAllItems.filter((item) => item.id));
  }, []);

  return (
    <>
      <SEO title="Контролен съвет" />
      <main className="page-wrapper">
        <Header btnStyle="btn-small round btn-icon" HeaderSTyle="" />
        <BreadcrumbOne title="Протоколи Контролен съвет" rootUrl="/" />
        <br />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div className="cardsRev" style={{ justifyContent: "center", justifyItems: "center", alignSelf: "center", gap: 20 }}>
            {protocols.map((item) => (
              <Card style={{}}>
                <Card.Header style={{ fontWeight: "bold" }}>{item.title}</Card.Header>
                <Card.Body>
                  <img src={item.imageUrl} style={{ width: "100%", height: 250, objectFit: "cover", borderRadius: 16 }} />
                  <p style={{ marginTop: 12, color: "black" }}>
                    {item.date} | <img src="/images/icons/file.png" width={20} height={20} />
                    <a href={item.fileUrl} style={{ color: "orange", marginLeft: 5 }}>
                      {item.fileName}
                    </a>
                  </p>
                  <p>{item.description}</p>
                </Card.Body>
              </Card>
            ))}
          </div>
          <Pagination total={20} style={{ marginTop: 20, alignSelf: "center" }} color="warning" size="xl" />
        </div>
        <div style={{ marginTop: "3%" }}>
          <Copyright style={{ marginTop: "0px" }} />
        </div>
      </main>
    </>
  );
};

export default Ks;
