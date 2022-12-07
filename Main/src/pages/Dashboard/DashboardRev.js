import SEO from "../../common/SEO";
import HeaderAdmin from "../../common/header/HeaderAdmin";
import Copyright from "../../common/footer/Copyright";
import { Button, Input, Modal, Table } from "@nextui-org/react";
import { Form } from "react-bootstrap";
import React from "react";

const columns = [
  {
    key: "name",
    label: "Имена",
  },
  {
    key: "certificate",
    label: "Сертификат",
  },
];

const rows = [{ key: "1", name: "Цанко Спасовски", certificate: "REV-BG/CIAB/2023/3" }];

const DashboardRev = () => {
  const [visibleAdd, setVisibleAdd] = React.useState(false);
  const [visibleEdit, setVisibleEdit] = React.useState(false);

  return (
    <>
      {/* Modal add start */}
      <Modal scroll open={visibleAdd} onClose={() => setVisibleAdd(false)}>
        <Form>
          <Modal.Header>
            <div style={{ marginTop: 20 }}>
              <Input placeholder="Сертификат №" style={{ background: "white", margin: 0 }} />
            </div>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
              <div style={{ marginTop: 20 }}>
                <Input placeholder="Сертификат №" style={{ background: "white", margin: 0 }} />
              </div>
              <div style={{ marginTop: 20 }}>
                <Input placeholder="Имена на български" style={{ background: "white", margin: 0 }} />
              </div>
              <div style={{ marginTop: 20 }}>
                <Input placeholder="Имена на английски" style={{ background: "white", margin: 0 }} />
              </div>
              <div style={{ marginTop: 20, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <Input type="date" label="Дата на издаване" style={{ background: "white", margin: 0 }} />
                <Input type="date" label="Валиден до" style={{ background: "white", margin: 0 }} />
              </div>
              <div style={{ marginTop: 20 }}>
                <Input placeholder="Град" style={{ background: "white", margin: 0 }} />
              </div>
              <div style={{ marginTop: 20 }}>
                <Input placeholder="Телефон" style={{ background: "white", margin: 0 }} />
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
                <Input placeholder="Сертификат №" style={{ background: "white", margin: 0 }} />
              </div>
              <div style={{ marginTop: 20 }}>
                <Input placeholder="Имена на български" style={{ background: "white", margin: 0 }} />
              </div>
              <div style={{ marginTop: 20 }}>
                <Input placeholder="Имена на английски" style={{ background: "white", margin: 0 }} />
              </div>
              <div style={{ marginTop: 20, display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                <Input type="date" label="Дата на издаване" style={{ background: "white", margin: 0 }} />
                <Input type="date" label="Валиден до" style={{ background: "white", margin: 0 }} />
              </div>
              <div style={{ marginTop: 20 }}>
                <Input placeholder="Град" style={{ background: "white", margin: 0 }} />
              </div>
              <div style={{ marginTop: 20 }}>
                <Input placeholder="Телефон" style={{ background: "white", margin: 0 }} />
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
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 50 }}>
          <Button size="xl" color="warning" style={{ width: 200 }} onPress={() => setVisibleAdd(true)}>
            Добавете сертификат
          </Button>
          <div style={{ display: "flex", width: "100%", justifyContent: "center", marginTop: 50, marginBottom: 50 }}>
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
              <Table.Body items={rows}>
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
                          <span style={{ color: "black", fontSize: 14, fontWeight: "normal" }}>{item[columnKey]}</span>
                        </span>
                      </Table.Cell>
                    )}
                  </Table.Row>
                )}
              </Table.Body>
            </Table>
          </div>
        </div>
        <Copyright />
      </main>
    </>
  );
};
export default DashboardRev;
