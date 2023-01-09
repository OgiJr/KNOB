import React, { useEffect, useState } from "react";
import SEO from "../common/SEO";
import Header from "../common/header/Header";
import Copyright from "../common/footer/Copyright";
import { Button, Card, Input, Pagination } from "@nextui-org/react";
import RevData from "../data/rev/RevList.json";
import "../assets/scss/elements/rev.scss";
import useSWR from "swr";
import { useSWRConfig } from "swr";

const fetcher = (url, queryParams = "") => {
    return fetch(`${url}${queryParams}`).then((res) => {
      return res.json();
    });
};

const RevRegistry = () => {

  const [name, setName] = React.useState("");
  const [city, setCity] = React.useState("");
  const [certificate_number, setCertificate_number] = React.useState("");
  const { data } = useSWR(["/api/get-users", `?name=${name}&city=${city}&certificate_number=${certificate_number}`], fetcher); 
  const { mutate } = useSWRConfig();

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
          <Input placeholder="Име" style={{ margin: 0, background: "white" }} width={300}  onChange={(evt) => { setName(evt.target.value) }} />
          <Input placeholder="Град" style={{ margin: 0, background: "white" }} width={300} onChange={(evt) => { setCity(evt.target.value) }} />
          <Input placeholder="№ на сертификата" style={{ margin: 0, background: "white" }} width={300} onChange={(evt) => { setCertificate_number(evt.target.value) }} />
          <Button color="warning" size="lg" shadow onClick={() => mutate(["/api/get-users", `?name=${name}&city=${city}&certificate_number=${certificate_number}`])}>
            Филтрирайте
          </Button>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {data && data.results.map((item) =>
          (
            <div key={item.id} className="cardsRev" style={{ marginTop: 20 }}>
              <Card className="card1" isPressable>
                <Card.Header>Certificate/Сертификат: {" " + item.certificate_number}</Card.Header>
                <Card.Body>
                  Issued on / Издаден на: {new Date(item.issued_on).toLocaleString("en-GB", {
                    year: "numeric",
                    month: "numeric",
                    day: "numeric",
                  })} Valid until / Валиден до: {new Date(item.valid_until).toLocaleString("en-GB", {
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
                  Phone/Телефон:{item.phone}
                </Card.Body>
              </Card>
            </div>
          )
          )}
        </div>
        <div style={{ marginTop: "3%" }}>
          <Copyright style={{ marginTop: "0px" }} />
        </div>
      </main>
    </>
  );
};

export default RevRegistry;
