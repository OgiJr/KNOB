import SEO from "../../common/SEO";
import HeaderAdmin from "../../common/header/HeaderAdmin";
import Copyright from "../../common/footer/Copyright";
import { Button, Input, Modal, Table, Textarea } from "@nextui-org/react";
import { Form } from "react-bootstrap";
import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const columns = [
  {
    key: "title",
    label: "Заглавие",
  },
  {
    key: "timestamp",
    label: "Дата",
  },
];

const DashboardInternational = () => {
  const [visibleAdd, setVisibleAdd] = React.useState(false);
  const [visibleEdit, setVisibleEdit] = React.useState(false);

  const [photo, set_photo] = React.useState(null);
  const [file, set_file] = React.useState(null);
  const { data } = useSWR(`${process.env.REACT_APP_API_URL}/api/get-international-content`, fetcher);

  return (
    <>
      {/* Modal add start */}
      <Modal scroll width="600px" open={visibleAdd} onClose={() => setVisibleAdd(false)}>
        <Form
          onSubmit={async (e) => {
            e.preventDefault();

            const body = new FormData();
            body.append("title", e.target.title.value);
            body.append("description", e.target.description.value);
            body.append("short_description", e.target.short_description.value);
            body.append("picture", photo);
            body.append("file", file);

            const res = await fetch(`${process.env.REACT_APP_API_URL}/api/post-international-content`, {
              method: "POST",
              body: body,
              headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
              },
            });

            // TODO CHECK FOR ERRORS
            console.log(await res.json());

            setVisibleAdd(false);
            window.location.reload(false);
          }}
        >
          <Modal.Header>
            <div style={{ marginTop: 20 }}>
              <Input name="title" placeholder="Заглавие" style={{ background: "white", margin: 0 }} required />
            </div>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
              <p style={{ marginBottom: 5, fontSize: 14 }}>Снимка</p>
              <input
                required
                type="file"
                style={{ marginBottom: 15 }}
                onChange={(e) => {
                  set_photo(e.target.files[0]);
                }}
              />
              <Input
                required
                name="short_description"
                labelPlaceholder="Кратко описание"
                style={{ color: "black", margin: 0, background: "white" }}
              />
              <br />
              <Textarea name="description" labelPlaceholder="Описание (HTML)" style={{ color: "black" }} rows={5} required />
              <p style={{ marginBottom: 5, fontSize: 14, marginTop: 15 }}>Прикачен файл</p>
              <input
                name="file"
                type="file"
                style={{ marginBottom: 15 }}
                onChange={(e) => {
                  set_file(e.target.files[0]);
                }}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button auto type="submit" color="warning" style={{ fontSize: 16 }}>
              Качи
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
      {/* Modal add end */}

      {/* Modal edit start */}
      <Modal scroll width="600px" open={visibleEdit} onClose={() => setVisibleEdit(false)}>
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
              <Input labelPlaceholder="Кратко описание" style={{ color: "black", margin: 0, background: "white" }} />
              <br />
              <Textarea labelPlaceholder="Описание (HTML)" style={{ color: "black" }} rows={5} />
              <p style={{ marginBottom: 5, fontSize: 14, marginTop: 15 }}>Прикачен файл</p>
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
        <div
          style={{
            display: "flex",
            height: "90vh",
            flexDirection: "column",
            alignItems: "center",
            justifyItems: "center",
            justifyContent: "center",
          }}
        >
          <Button size="xl" color="warning" style={{ width: 200 }} onPress={() => setVisibleAdd(true)}>
            Добавете новина
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
                    <Table.Row key={item._id}>
                      {(columnKey) => (
                        <Table.Cell>
                          <span
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setVisibleEdit(true);
                            }}
                          >
                            <span style={{ color: "black", fontSize: 14, fontWeight: "normal" }}>{columnKey !== "timestamp" ? item[columnKey] : new Date(item[columnKey]).toLocaleString("bg-BG", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}</span>
                          </span>
                        </Table.Cell>
                      )}
                    </Table.Row>
                  )}
                </Table.Body>
              </Table>}
          </div>
        </div>
        <Copyright />
      </main>
    </>
  );
};
export default DashboardInternational;
