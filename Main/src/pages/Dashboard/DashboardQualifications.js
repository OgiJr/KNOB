import SEO from "../../common/SEO";
import HeaderAdmin from "../../common/header/HeaderAdmin";
import Copyright from "../../common/footer/Copyright";
import { Button, Input, Modal, Table, Textarea } from "@nextui-org/react";
import { Form } from "react-bootstrap";
import React from "react";

const columns = [
  {
    key: "title",
    label: "Заглавие",
  },
  {
    key: "date",
    label: "Дата",
  },
];

const rows = [{ key: "1", title: "Вписване в „Регистъра на независимите оценители” на успешно издържалите изпита по „Земеделски земи и трайни насаждения”", date: "17.11.2022г." }];

const DashboardQualifications = () => {
  const [visibleAdd, setVisibleAdd] = React.useState(false);
  const [visibleEdit, setVisibleEdit] = React.useState(false);

  return (
    <>
      {/* Modal add start */}
      <Modal scroll fullScreen open={visibleAdd} onClose={() => setVisibleAdd(false)}>
        <Form>
          <Modal.Header>
            <div style={{ marginTop: 20 }}>
              <Input placeholder="Заглавие" style={{ background: "white", margin: 0 }} />
            </div>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
              <p style={{ marginBottom: 5, fontSize: 14 }}>Снимка</p>
              <input type="file" style={{ marginBottom: 15 }} />
              <Textarea labelPlaceholder="Описание (HTML)" style={{ color: "black" }} rows={5} />
              <p style={{ marginBottom: 5, fontSize: 14, marginTop: 15 }}>Прикачен файл едно</p>
              <input type="file" style={{ marginBottom: 15 }} />
              <p style={{ marginBottom: 5, fontSize: 14, marginTop: 15 }}>Прикачен файл две</p>
              <input type="file" style={{ marginBottom: 15 }} />
              <p style={{ marginBottom: 5, fontSize: 14, marginTop: 15 }}>Прикачен файл три</p>
              <input type="file" style={{ marginBottom: 15 }} />
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
      <Modal scroll fullScreen open={visibleEdit} onClose={() => setVisibleEdit(false)}>
        <Form>
          <Modal.Header>
            <div style={{ marginTop: 20 }}>
              <Input placeholder="Заглавие" style={{ background: "white", margin: 0 }} />
            </div>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
              <p style={{ marginBottom: 5, fontSize: 14 }}>Снимка</p>
              <input type="file" style={{ marginBottom: 15 }} />
              <Textarea labelPlaceholder="Описание (HTML)" style={{ color: "black" }} rows={5} />
              <p style={{ marginBottom: 5, fontSize: 14, marginTop: 15 }}>Прикачен файл едно</p>
              <input type="file" style={{ marginBottom: 15 }} />
              <p style={{ marginBottom: 5, fontSize: 14, marginTop: 15 }}>Прикачен файл две</p>
              <input type="file" style={{ marginBottom: 15 }} />
              <p style={{ marginBottom: 5, fontSize: 14, marginTop: 15 }}>Прикачен файл три</p>
              <input type="file" style={{ marginBottom: 15 }} />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button auto type="submit" color="error">
              Изтрий
            </Button>
            <Button auto color="success">
              Запази
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      {/* Modal edit end */}

      <SEO title="Административен панел" />
      <main className="page-wrapper">
        <HeaderAdmin btnStyle="btn-small round btn-icon" />
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "90vh" }}>
          <Button size="xl" color="warning" style={{ width: 200 }} onPress={() => setVisibleAdd(true)}>
            Добавете квалификация
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
export default DashboardQualifications;
