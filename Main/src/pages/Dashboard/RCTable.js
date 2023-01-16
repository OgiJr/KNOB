import { Button, Input, Modal, Radio, Table } from "@nextui-org/react";
import React from "react";
import { Form } from "react-bootstrap";

const columns = [
  {
    key: "full_name",
    label: "Имена",
  },
  {
    key: "email",
    label: "Имейл",
  },
  {
    key: "is_representative",
    label: "Председател",
  },
];

const RCTable = (sofia) => {
  var regions = [
    { key: 1, name: "Бургас", id: "Burgas", info: sofia.burgas.members },
    { key: 2, name: "Варна", id: "Varna", info: sofia.varna.members },
    { key: 3, name: "Плевен", id: "Pleven", info: sofia.pleven.members },
    { key: 4, name: "Пловдив", id: "Plovdiv", info: sofia.plovdiv.members },
    { key: 4, name: "Русе", id: "Ruse", info: sofia.ruse.members },
    { key: 5, name: "Стара Загора", id: "Zagora", info: sofia.zagora.members },
    { key: 6, name: "София", id: "Sofia", info: sofia.sofia.members },
    { key: 7, name: "Шумен", id: "Tutrakan", info: sofia.shumen.members },
  ];

  const [visibleEdit, setVisibleEdit] = React.useState(false);
  const [id, setId] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [city, setCity] = React.useState("");
  const [isRepresentative, setisRepresentative] = React.useState(false);
  const [error, setError] = React.useState("");

  return (
    <>
      {/* Modal edit start */}
      <Modal scroll open={visibleEdit} onClose={() => setVisibleEdit(false)}>
        <Form onSubmit={async (e) => {
          e.preventDefault();
          const body = new FormData();
          body.append("full_name", e.target.full_name.value);
          body.append("email", e.target.email.value);
          body.append("is_representative", e.target.isChair.value === "chair" ? true : false);
          body.append("city", city);
          const resp = await fetch(`${process.env.REACT_APP_API_URL}/api/post-regional-committee-member`, {
            method: "POST",
            body: body,
            headers: {
              Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
            },
          });
          if (resp.status !== 200) {
            const error = await resp.json();
            setError(error.error);
          } else {
            const new_body = new FormData();
            new_body.append("id", id);
            await fetch(`${process.env.REACT_APP_API_URL}/api/delete-regional-committee-member`, {
              method: "DELETE",
              body: new_body,
              headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
              },
            });
            setVisibleEdit(false);
            window.location.reload(false);
          }
        }}>
          <Modal.Header>
            <div style={{ marginTop: 20 }}>
              {error && <p style={{ color: "red" }}>{error}</p>}
              <Input
                placeholder="Имена"
                style={{ background: "white", margin: 0 }}
                name="full_name"
                id="full_name"
                required
                initialValue={name}
              />
            </div>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
              <div style={{ marginTop: 20 }}>
                <Input
                  placeholder="Email"
                  style={{ background: "white", margin: 0 }}
                  name="email"
                  id="email"
                  required
                  initialValue={email}
                />
              </div>
              <div style={{ marginTop: 20 }}>
                <Radio.Group
                  label="Председател"
                  defaultValue={isRepresentative ? "chair" : "notChair"}
                  name="isChair"
                  id="isChair"
                  color="warning"
                  required
                >
                  <Radio value="chair">Да</Radio>
                  <Radio value="notChair">Не</Radio>
                </Radio.Group>
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
                await fetch(`${process.env.REACT_APP_API_URL}/api/delete-regional-committee-member`, {
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
            <Button auto type="submit" color="warning">
              Запази
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      {/* Modal edit end */}
      <div style={{ display: "flex", flexDirection: "column", width: "100%", justifyContent: "center" }}>
        {regions.map((item) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: 100,
              marginRight: 100,
              marginBottom: 50,
            }}
          >
            <h3>{item.name}</h3>
            <Table
              css={{
                height: "auto",
                minWidth: "50%",
              }}
            >
              <Table.Header columns={columns}>
                {(column) => (
                  <Table.Column key={column.key}>
                    <span style={{ fontSize: 14, marginLeft: 5, marginRight: 5 }}>{column.label}</span>
                  </Table.Column>
                )}
              </Table.Header>
              <Table.Body items={item.info}>
                {(person) => (
                  <Table.Row key={person._id}>
                    {(columnKey) => (
                      <Table.Cell>
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            console.log(item);
                            setId(person._id);
                            setCity(item.id);
                            setVisibleEdit(true);
                            setEmail(person.email);
                            setName(person.full_name);
                            setisRepresentative(person.is_representative);
                          }}
                        >
                          {person.is_representative === false ? (
                            <span style={{ color: "black", fontSize: 14, fontWeight: "normal" }}>
                              {person[columnKey] !== false ? person[columnKey] : "Не"}
                            </span>
                          ) : (
                            <span style={{ color: "orange", fontSize: 14, fontWeight: "normal" }}>
                              {person[columnKey] !== true ? person[columnKey] : "Да"}
                            </span>
                          )}
                        </span>
                      </Table.Cell>
                    )}
                  </Table.Row>
                )}
              </Table.Body>
            </Table>
          </div>
        ))}
      </div>
    </>
  );
};

export default RCTable;
