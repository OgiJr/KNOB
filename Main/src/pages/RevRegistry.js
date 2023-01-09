import React from "react";
import SEO from "../common/SEO";
import Header from "../common/header/Header";
import Copyright from "../common/footer/Copyright";
import { Card, Input } from "@nextui-org/react";
import "../assets/scss/elements/rev.scss";
import useSWR from "swr";

const fetcher = (url) => {
  return fetch(url).then((res) => {
    return res.json();
  });
};

const RevRegistry = () => {
  const [cyrilic_name, set_cyrlic_name] = React.useState("");
  const [cyrlic_city, set_cyrlic_city] = React.useState("");
  const [latin_name, set_latin_name] = React.useState("");
  const [latin_city, set_latin_city] = React.useState("");
  const [certificate_number, setCertificate_number] = React.useState("");
  const { data } = useSWR(
    `${process.env.REACT_APP_API_URL}/api/get-rev-registry?cyrilic_name=${cyrilic_name}&cyrlic_city=${cyrlic_city}&latin_name=${latin_name}&latin_city=${latin_city}&certificate_number=${certificate_number}`,
    fetcher
  );

  return (
    <>
      <SEO title="REV" />
      <main className="page-wrapper">
        <Header btnStyle="btn-small round btn-icon" HeaderSTyle="" />
        <br />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 20,
            gap: 20,
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span style={{ color: "black", fontWeight: "bold" }}>Филтрирайте по име, град и номер на сертификата</span>
          <Input
            placeholder="Име"
            style={{ margin: 0, background: "white" }}
            width={300}
            onChange={(evt) => {
              set_cyrlic_name(evt.target.value);
            }}
          />
          <Input
            placeholder="Град"
            style={{ margin: 0, background: "white" }}
            width={300}
            onChange={(evt) => {
              set_cyrlic_city(evt.target.value);
            }}
          />
          <Input
            placeholder="Име (латиница)"
            style={{ margin: 0, background: "white" }}
            width={300}
            onChange={(evt) => {
              set_latin_name(evt.target.value);
            }}
          />
          <Input
            placeholder="Град (латиница)"
            style={{ margin: 0, background: "white" }}
            width={300}
            onChange={(evt) => {
              set_latin_city(evt.target.value);
            }}
          />
          <Input
            placeholder="№ на сертификата"
            style={{ margin: 0, background: "white" }}
            width={300}
            onChange={(evt) => {
              setCertificate_number(evt.target.value);
            }}
          />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {data &&
            data.results.map((item) => (
              <div key={item.id} className="cardsRev" style={{ marginTop: 20 }}>
                <Card className="card1" isPressable>
                  <Card.Header>Certificate/Сертификат: {" " + item.certificate_number}</Card.Header>
                  <Card.Body>
                    Issued on / Издаден на:{" "}
                    {new Date(item.issued_on).toLocaleString("en-GB", {
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                    })}{" "}
                    Valid until / Валиден до:{" "}
                    {new Date(item.valid_until).toLocaleString("en-GB", {
                      year: "numeric",
                      month: "numeric",
                      day: "numeric",
                    })}
                    <br />
                    <br />
                    Name: {item.latin_name}
                    <br />
                    Име: {item.cyrilic_name}
                    <br />
                    <br />
                    City/Град: {item.latin_city} / {item.cyrilic_city}
                    <br />
                    Phone/Телефон:{item.telephone}
                  </Card.Body>
                </Card>
              </div>
            ))}
        </div>
        <div style={{ marginTop: "3%" }}>
          <Copyright style={{ marginTop: "0px" }} />
        </div>
      </main>
    </>
  );
};

export default RevRegistry;
