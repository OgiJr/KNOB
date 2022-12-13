import SEO from "../../common/SEO";
import HeaderAdmin from "../../common/header/HeaderAdmin";
import Copyright from "../../common/footer/Copyright";
import { Button, Dropdown, Input, Modal, Table } from "@nextui-org/react";
import { Form } from "react-bootstrap";
import React from "react";

const columns = [
  {
    key: "name",
    label: "Имена",
  },
  {
    key: "email",
    label: "Имейл",
  },
  {
    key: "chair",
    label: "Председател",
  },
];

const rowsBurgas = [
  { key: "1", name: "Цанко Спасовски", email: "office@ciab-bg.com", chair: "Да" },
  { key: "2", name: "Иван Иванов", email: "office@ciab-bg.com", chair: "Не" },
];

const rowsVarna = [
  { key: "1", name: "Цанко Спасовски", email: "office@ciab-bg.com", chair: "Да" },
  { key: "2", name: "Иван Иванов", email: "office@ciab-bg.com", chair: "Не" },
];

const rowsPleven = [
  { key: "1", name: "Цанко Спасовски", email: "office@ciab-bg.com", chair: "Да" },
  { key: "2", name: "Иван Иванов", email: "office@ciab-bg.com", chair: "Не" },
];

const rowsPlovdiv = [
  { key: "1", name: "Цанко Спасовски", email: "office@ciab-bg.com", chair: "Да" },
  { key: "2", name: "Иван Иванов", email: "office@ciab-bg.com", chair: "Не" },
];

const rowsRuse = [
  { key: "1", name: "Цанко Спасовски", email: "office@ciab-bg.com", chair: "Да" },
  { key: "2", name: "Иван Иванов", email: "office@ciab-bg.com", chair: "Не" },
];

const rowsSofia = [
  { key: "1", name: "Цанко Спасовски", email: "office@ciab-bg.com", chair: "Да" },
  { key: "2", name: "Иван Иванов", email: "office@ciab-bg.com", chair: "Не" },
];

const rowsStaraZagora = [
  { key: "1", name: "Цанко Спасовски", email: "office@ciab-bg.com", chair: "Да" },
  { key: "2", name: "Иван Иванов", email: "office@ciab-bg.com", chair: "Не" },
];

const rowsShumen = [
  { key: "1", name: "Цанко Спасовски", email: "office@ciab-bg.com", chair: "Да" },
  { key: "2", name: "Иван Иванов", email: "office@ciab-bg.com", chair: "Не" },
];

const regions = [
  { key: 1, name: "Бургас", info: rowsBurgas },
  { key: 2, name: "Варна", info: rowsVarna },
  { key: 3, name: "Плевен", info: rowsPleven },
  { key: 4, name: "Пловдив", info: rowsPlovdiv },
  { key: 4, name: "Русе", info: rowsRuse },
  { key: 5, name: "Стара Загора", info: rowsStaraZagora },
  { key: 6, name: "София", info: rowsSofia },
  { key: 7, name: "Шумен", info: rowsShumen },
];

const DashboardRc = () => {
  const [visibleAdd, setVisibleAdd] = React.useState(false);
  const [visibleEdit, setVisibleEdit] = React.useState(false);

  return (
    <>
      {/* Modal add start */}
      <Modal scroll open={visibleAdd} onClose={() => setVisibleAdd(false)}>
        <Form>
          <Modal.Header>
            <div style={{ marginTop: 20 }}>
              <Input placeholder="Имена" style={{ background: "white", margin: 0 }} />
            </div>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
              <div style={{ marginTop: 20 }}>
                <Input placeholder="Email" style={{ background: "white", margin: 0 }} />
              </div>
              <div style={{ marginTop: 20 }}>
                <Dropdown>
                  <Dropdown.Button color="warning" shadow>
                    Председател
                  </Dropdown.Button>
                  <Dropdown.Menu>
                    <Dropdown.Item key="chair">Да</Dropdown.Item>
                    <Dropdown.Item key="notChair">Не</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
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
        <Form>
          <Modal.Header>
            <div style={{ marginTop: 20 }}>
              <Input placeholder="Имена" style={{ background: "white", margin: 0 }} />
            </div>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
              <div style={{ marginTop: 20 }}>
                <Input placeholder="Email" style={{ background: "white", margin: 0 }} />
              </div>
              <div style={{ marginTop: 20 }}>
                <Dropdown>
                  <Dropdown.Button color="warning" shadow>
                    Председател
                  </Dropdown.Button>
                  <Dropdown.Menu>
                    <Dropdown.Item key="chair">Да</Dropdown.Item>
                    <Dropdown.Item key="notChair">Не</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button auto type="submit" color="error">
              Изтрий
            </Button>
            <Button auto type="submit" color="warning">
              Запази
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      {/* Modal edit end */}

      <SEO title="Административен панел" />
      <main className="page-wrapper">
        <HeaderAdmin btnStyle="btn-small round btn-icon" />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
          <Button size="xl" color="warning" style={{ width: 200, marginTop: 50 }} onPress={() => setVisibleAdd(true)}>
            Добавете член
          </Button>
          <div style={{ display: "flex", flexDirection: "column", width: "100%", justifyContent: "center" }}>
            {regions.map((item) => (
              <div style={{ display: "flex", flexDirection: "column", marginLeft: 100, marginRight: 100, marginBottom: 50 }}>
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
                    {(item) => (
                      <Table.Row key={item.key}>
                        {(columnKey) => (
                          <Table.Cell>
                            <span
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                setVisibleEdit(true);
                              }}
                            >
                              {item.chair === "Не" ? <span style={{ color: "black", fontSize: 14, fontWeight: "normal" }}>{item[columnKey]}</span> : <span style={{ color: "orange", fontSize: 14, fontWeight: "normal" }}>{item[columnKey]}</span>}
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
        </div>
        <Copyright />
      </main>
    </>
  );
};
export default DashboardRc;
