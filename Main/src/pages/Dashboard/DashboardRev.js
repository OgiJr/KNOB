import SEO from "../../common/SEO";
import HeaderAdmin from "../../common/header/HeaderAdmin";
import Copyright from "../../common/footer/Copyright";
import { Button, Input, Modal, Table } from "@nextui-org/react";
import { Form } from "react-bootstrap";
import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const columns = [
  {
    key: "cyrilic_name",
    label: "Имена",
  },
  {
    key: "certificate_number",
    label: "Сертификат",
  },
];

const DashboardRev = () => {
  const [visibleAdd, setVisibleAdd] = React.useState(false);
  const [visibleEdit, setVisibleEdit] = React.useState(false);
  const { data } = useSWR(`${process.env.REACT_APP_API_URL}/api/get-rev-registry`, fetcher);
  const [validUntil, setValidUnitl] = React.useState("");
  const [validFrom, setValidFrom] = React.useState("");
  const [error, setError] = React.useState("");
  const [certificate, setCertificate] = React.useState("");
  const [cyrName, setCyrName] = React.useState("");
  const [latinName, setLatinName] = React.useState("");
  const [cyrCity, setCyrCity] = React.useState("");
  const [latinCity, setLatinCity] = React.useState("");
  const [validFromGet, setValidFromGet] = React.useState(null);
  const [validUntilGet, setvalidUntilGet] = React.useState(null);
  const [phone, setPhone] = React.useState("");
  const [id, setId] = React.useState("");

  return (
    <>
      {/* Modal add start */}
      <Modal scroll open={visibleAdd} onClose={() => setVisibleAdd(false)}>
        <Form
          onSubmit={async (e) => {
            e.preventDefault();

            const body = new FormData();
            body.append("certificate_number", e.target.certificate.value);
            body.append("cyrilic_name", e.target.cyr_name.value);
            body.append("latin_name", e.target.latin_name.value);
            body.append("latin_city", e.target.latin_city.value);
            body.append("cyrilic_city", e.target.cyr_city.value);
            body.append("issued_on", validFrom);
            body.append("valid_until", validUntil);
            body.append("telephone", e.target.phone.value);

            const res = await fetch(`${process.env.REACT_APP_API_URL}/api/post-rev`, {
              method: "POST",
              body: body,
              headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
              },
            });

            if (res.status !== 200) {
              const error = await res.json();
              setError(error.error);
            } else {
              setVisibleAdd(false);
              window.location.reload(false);
            }
          }}
        >
          <Modal.Header>
            <div style={{ marginTop: 20 }}>
              <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
              <Input
                placeholder="Сертификат №"
                style={{ background: "white", margin: 0 }}
                id="certificate"
                name="certificate"
                required
              />
            </div>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
              <div style={{ marginTop: 20 }}>
                <Input
                  placeholder="Имена на български"
                  style={{ background: "white", margin: 0 }}
                  required
                  id="cyr_name"
                  name="cyr_name"
                />
              </div>
              <div style={{ marginTop: 20 }}>
                <Input
                  placeholder="Имена на английски"
                  style={{ background: "white", margin: 0 }}
                  required
                  name="latin_name"
                  id="latin_name"
                />
              </div>
              <div style={{ marginTop: 20, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <Input
                  onChange={(event) => setValidFrom(event.target.value)}
                  type="date"
                  label="Дата на издаване"
                  style={{ background: "white", margin: 0 }}
                  required
                  name="date_from"
                  id="date_from"
                />
                <Input
                  onChange={(event) => setValidUnitl(event.target.value)}
                  type="date"
                  label="Валиден до"
                  style={{ background: "white", margin: 0 }}
                  required
                  name="date_until"
                  id="date_until"
                />
              </div>
              <div
                style={{
                  gap: 20,
                  marginTop: 20,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Input
                  placeholder="Град на български"
                  style={{ background: "white", margin: 0 }}
                  required
                  name="cyr_city"
                  id="cyr_city"
                />
                <Input
                  placeholder="Град на английски"
                  style={{ background: "white", margin: 0 }}
                  required
                  name="latin_city"
                  id="latin_city"
                />
              </div>
              <div style={{ marginTop: 20 }}>
                <Input
                  placeholder="Телефон"
                  style={{ background: "white", margin: 0 }}
                  required
                  name="phone"
                  id="phone"
                />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button auto type="submit" color="warning">
              Качи
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      {/* Modal add end */}

      {/* Modal edit start */}
      <Modal scroll open={visibleEdit} onClose={() => setVisibleEdit(false)}>
        <Form
        >
          <Modal.Header>
            <span style={{ fontSize: 12 }}>
              Моля въведте информацията на английски и български. Вижте формата в страницата{" "}
              <a href="/rev" style={{ color: "orange", marginLeft: 0 }}>
                REV
              </a>
            </span>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
              <div style={{ marginTop: 20 }}>
                <Input
                  placeholder="Сертификат №"
                  style={{ background: "white", margin: 0 }}
                  required
                  name="certificate"
                  value={certificate}
                />
              </div>
              <div style={{ marginTop: 20 }}>
                <Input
                  placeholder="Имена на български"
                  style={{ background: "white", margin: 0 }}
                  required
                  name="cyr_name"
                  value={cyrName}
                />
              </div>
              <div style={{ marginTop: 20 }}>
                <Input
                  placeholder="Имена на английски"
                  style={{ background: "white", margin: 0 }}
                  required
                  name="latin_name"
                  value={latinName}
                />
              </div>
              <div style={{ marginTop: 20, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <Input
                  onChange={(event) => setValidFrom(event.target.value)}
                  type="date"
                  label="Дата на издаване"
                  style={{ background: "white", margin: 0 }}
                  required
                  value={validFromGet ? validFromGet.toString().substring(0, 10) : {}}
                />
                <Input
                  onChange={(event) => setvalidUntilGet(event.target.value)}
                  type="date"
                  label="Валиден до"
                  style={{ background: "white", margin: 0 }}
                  required
                  value={validUntilGet ? validUntilGet.toString().substring(0, 10) : {}}
                />
              </div>
              <div style={{ marginTop: 20 }}>
                <Input
                  placeholder="Град (български)"
                  style={{ background: "white", margin: 0 }}
                  required
                  name="cyr_city"
                  value={cyrCity}
                />
              </div>
              <div style={{ marginTop: 20 }}>
                <Input
                  placeholder="Град (английски)"
                  style={{ background: "white", margin: 0 }}
                  required
                  name="latin_city"
                  value={latinCity}
                />
              </div>
              <div style={{ marginTop: 20 }}>
                <Input placeholder="Телефон" style={{ background: "white", margin: 0 }} required value={phone} name="phone" />
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              auto
              color="error"
              onClick={async () => {
                const new_body = new FormData();
                new_body.append("id", id);
                await fetch(`${process.env.REACT_APP_API_URL}/api/delete-rev`, {
                  method: "DELETE",
                  body: new_body,
                  headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
                  },
                });
                window.location.reload(false);
              }}
            >
              Изтрий
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      {/* Modal edit end */}

      <SEO title="Административен панел" />
      <main className="page-wrapper">
        <HeaderAdmin btnStyle="btn-small round btn-icon" />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 50 }}>
          <Button size="xl" color="warning" style={{ width: 200 }} onPress={() => setVisibleAdd(true)}>
            Добавете сертификат
          </Button>
          <div style={{ display: "flex", width: "100%", justifyContent: "center", marginTop: 50, marginBottom: 50 }}>
            {data && (
              <Table
                css={{
                  height: "auto",
                  minWidth: "100%",
                }}
              >
                <Table.Header columns={columns}>
                  {(column) => (
                    <Table.Column key={column.key}>
                      <span style={{ fontSize: 14, marginLeft: 5, marginRight: 5 }}>{column.label}</span>
                    </Table.Column>
                  )}
                </Table.Header>
                <Table.Body items={data.results}>
                  {(item) => (
                    <Table.Row key={item._id}>
                      {(columnKey) => (
                        <Table.Cell>
                          <span
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setId(item._id);
                              setCertificate(item.certificate_number);
                              setLatinName(item.latin_name);
                              setCyrName(item.cyrilic_name);
                              setPhone(item.telephone);
                              setLatinCity(item.latin_city);
                              setCyrCity(item.cyrilic_city);
                              setValidFromGet(item.issued_on);
                              setvalidUntilGet(item.valid_until);
                              setVisibleEdit(true);
                            }}
                          >
                            <span style={{ color: "black", fontSize: 14, fontWeight: "normal" }}>
                              {item[columnKey]}
                            </span>
                          </span>
                        </Table.Cell>
                      )}
                    </Table.Row>
                  )}
                </Table.Body>
              </Table>
            )}
          </div>
        </div>
        <Copyright />
      </main>
    </>
  );
};
export default DashboardRev;
