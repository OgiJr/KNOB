import { Button, Dropdown, Input, Modal, Table } from "@nextui-org/react";
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
    { key: 1, name: "Бургас", info: sofia.burgas.members },
    { key: 2, name: "Варна", info: sofia.varna.members },
    { key: 3, name: "Плевен", info: sofia.pleven.members },
    { key: 4, name: "Пловдив", info: sofia.plovdiv.members },
    { key: 4, name: "Русе", info: sofia.ruse.members },
    { key: 5, name: "Стара Загора", info: sofia.zagora.members },
    { key: 6, name: "София", info: sofia.sofia.members },
    { key: 7, name: "Шумен", info: sofia.shumen.members },
  ];

  const [visibleEdit, setVisibleEdit] = React.useState(false);

  return (
    <>
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
                {(item) => (
                  <Table.Row key={item._id}>
                    {(columnKey) => (
                      <Table.Cell>
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setVisibleEdit(true);
                          }}
                        >
                          {console.log(item.info)}
                          {item.is_representative === false ? (
                            <span style={{ color: "black", fontSize: 14, fontWeight: "normal" }}>
                              {item[columnKey] !== false ? item[columnKey] : "Не"}
                            </span>
                          ) : (
                            <span style={{ color: "orange", fontSize: 14, fontWeight: "normal" }}>
                              {item[columnKey] !== true ? item[columnKey] : "Да"}
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
