import SEO from "../../common/SEO";
import HeaderAdmin from "../../common/header/HeaderAdmin";
import Copyright from "../../common/footer/Copyright";
import { Button, Dropdown, Input, Modal, Radio, Table } from "@nextui-org/react";
import { Form } from "react-bootstrap";
import React from "react";
import useSWR from "swr";

const fetcher = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
    },
  }).then((res) => res.json());

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

const DashboardKs = () => {
  const { data } = useSWR(`${process.env.REACT_APP_API_URL}/api/get-ks-committee`, fetcher);
  const [visibleAdd, setVisibleAdd] = React.useState(false);
  const [visibleEdit, setVisibleEdit] = React.useState(false);

  return (
    <>
      {/* Modal add start */}
      <Modal scroll open={visibleAdd} onClose={() => setVisibleAdd(false)}>
        <Form
          onSubmit={async (e) => {
            e.preventDefault();
            const body = new FormData();
            body.append("full_name", e.target.full_name.value);
            body.append("email", e.target.email.value);
            body.append("is_representative", e.target.isChair.value === "chair" ? true : false);
            const resp = await fetch(`${process.env.REACT_APP_API_URL}/api/post-ks-committee-member`, {
              method: "POST",
              body: body,
              headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
              },
            });
            window.location.reload(false);
          }}
        >
          <Modal.Header>
            <div style={{ marginTop: 20 }}>
              <Input placeholder="Имена" style={{ background: "white", margin: 0 }} name="full_name" id="full_name" aria-label="Names" aria-labelledby="email" />
            </div>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
              <div style={{ marginTop: 20 }}>
                <Input placeholder="Email" style={{ background: "white", margin: 0 }} name="email" id="email" aria-label="Email" aria-labelledby="email" />
              </div>
              <div style={{ marginTop: 20 }}>
                <Radio.Group label="Председател" defaultValue="chair" name="isChair" id="isChair"  color="warning">
                  <Radio value="chair">Да</Radio>
                  <Radio value="notChair">Не</Radio>
                </Radio.Group>
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
              <Input placeholder="Имена" style={{ background: "white", margin: 0 }} aria-label="Email" aria-labelledby="email" />
            </div>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
              <div style={{ marginTop: 20 }}>
                <Input placeholder="Email" style={{ background: "white", margin: 0 }} aria-label="Email" aria-labelledby="email" />
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "90vh",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button size="xl" color="warning" style={{ width: 200 }} onPress={() => setVisibleAdd(true)}>
            Добавете член
          </Button>
          <div style={{ display: "flex", width: "100%", justifyContent: "center", marginTop: 50, marginBottom: 50 }}>
            {data &&
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
                    <Table.Row key={(item._id)}>
                      {(columnKey) => (
                        <Table.Cell>
                          <span
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setVisibleEdit(true);
                            }}
                          >
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
            }
          </div>
        </div>
        <Copyright />
      </main>
    </>
  );
};
export default DashboardKs;
