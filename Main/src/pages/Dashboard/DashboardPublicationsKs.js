import SEO from "../../common/SEO";
import HeaderAdmin from "../../common/header/HeaderAdmin";
import Copyright from "../../common/footer/Copyright";
import { Button, Input, Modal, Table, Textarea } from "@nextui-org/react";
import { Form } from "react-bootstrap";
import React from "react";
import BreadcrumbOne from "../../elements/breadcrumb/BreadcrumbOne";
import useSWR from "swr";

const fetcher = (url) =>
  fetch(url, {
    headers: {
      Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
    },
  }).then((res) => res.json());

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

const rows = [{ key: "1", title: "Примерен протокол", date: "17.11.2022г.", archived: "Не" }];

const DashboardPublicationsKs = () => {
  const { data } = useSWR(`${process.env.REACT_APP_API_URL}/api/get-ks-protocols`, fetcher);
  const [visibleAdd, setVisibleAdd] = React.useState(false);
  const [visibleEdit, setVisibleEdit] = React.useState(false);
  const [photo, setPhoto] = React.useState(null);
  const [file, setFile] = React.useState(null);
  const [error, setError] = React.useState("");
  const [id, setId] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");

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
            body.append("picture", photo);
            if (file) {
              body.append("file", file);
            }
            const resp = await fetch(`${process.env.REACT_APP_API_URL}/api/post-ks-protocol`, {
              method: "POST",
              body: body,
              headers: {
                Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
              },
            });
            if (resp.status !== 200) {
              const error = await resp.json();
              setError(error.error);
            }
            else {
              setVisibleAdd(false);
              window.location.reload(false);
            }
          }}
        >          <Modal.Header>
            <div style={{ marginTop: 20 }}>
              <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
              <Input placeholder="Заглавие" style={{ background: "white", margin: 0 }} name="title" id="title" />
            </div>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
              <Textarea labelPlaceholder="Описание (HTML)" style={{ color: "black" }} rows={5} required name="description" id="description" />
              <p style={{ marginBottom: 5, fontSize: 14, marginTop: 15 }}>Снимка</p>
              <input type="file" style={{ marginBottom: 15 }} onChange={(e) => {
                setPhoto(e.target.files[0]);
              }} required />
              <p style={{ marginBottom: 5, fontSize: 14, marginTop: 15 }}>Прикачен файл</p>
              <input type="file" style={{ marginBottom: 15 }} onChange={(e) => {
                setFile(e.target.files[0]);
              }} />
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
      <Modal scroll width="600px" open={visibleEdit} onClose={() => setVisibleEdit(false)}>
        <Form>
          <Modal.Header>
            <div style={{ marginTop: 20 }}>
              <Input placeholder="Заглавие" style={{ background: "white", margin: 0 }} value={title} required />
            </div>
          </Modal.Header>
          <Modal.Body>
            <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
              <Textarea labelPlaceholder="Описание (HTML)" style={{ color: "black" }} rows={5} width={400} value={description} required />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button auto onClick={async () => {
              const new_body = new FormData();
              new_body.append("id", id);
              const new_res = await fetch(`${process.env.REACT_APP_API_URL}/api/delete-ks-protocol`, {
                method: "DELETE",
                body: new_body,
                headers: {
                  Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
                },
              });
              window.location.reload(false);
            }} color="error">
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
        <BreadcrumbOne title="Протоколи КС" />
        <div
          style={{
            display: "flex",
            minHeight: "90vh",
            flexDirection: "column",
            alignItems: "center",
            justifyItems: "center",
            justifyContent: "start",
          }}
        >
          <Button size="xl" color="warning" style={{ width: 200, marginTop: 50 }} onPress={() => setVisibleAdd(true)}>
            Добавете протокол
          </Button>
          <div style={{ display: "flex", width: "100%", justifyContent: "center", marginTop: 50, marginBottom: 50 }}>
            {data && <Table
              css={{
                height: "auto",
                minWidth: "100%",
                width: "100%",
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
                            setVisibleEdit(true);
                            setTitle(item.title);
                            setDescription(item.description);
                          }}
                        >

                          <span style={{ color: "black", fontSize: 14, fontWeight: "normal" }}>
                            {columnKey !== "timestamp" ? item[columnKey] : new Date(item[columnKey]).toLocaleString("bg-BG", {
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
export default DashboardPublicationsKs;
