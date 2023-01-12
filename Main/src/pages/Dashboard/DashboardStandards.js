import SEO from "../../common/SEO";
import HeaderAdmin from "../../common/header/HeaderAdmin";
import Copyright from "../../common/footer/Copyright";
import { Button, Card, Input, Radio } from "@nextui-org/react";
import { Form } from "react-bootstrap";
import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const DashboardStandards = () => {
  const [file, set_file] = React.useState(null);
  const [bg_file, set_bg_file] = React.useState(null);
  const { data: international } = useSWR(`${process.env.REACT_APP_API_URL}/api/get-european-standards`, fetcher);
  const { data: bulgarian } = useSWR(`${process.env.REACT_APP_API_URL}/api/get-bulgarian-standards`, fetcher);
  const [errorBg, setErrorBg] = React.useState("");
  const [errorEu, setErrorEu] = React.useState("");

  return (
    <>
      <SEO title="Административен панел" />
      <main className="page-wrapper">
        <HeaderAdmin btnStyle="btn-small round btn-icon" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            minHeight: "90vh",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex", width: "100%", justifyContent: "center", marginTop: 50, marginBottom: 50 }}>
            {international && (
              <Card style={{ marginLeft: 50, marginRight: 50 }}>
                <Form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const body = new FormData();
                    body.append("title", e.target.title.value);
                    body.append("file", file);
                    body.append("language", e.target.language.value);
                    body.append("last_changed", Date.now());

                    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/post-european-standard`, {
                      method: "POST",
                      body: body,
                      headers: {
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
                      },
                    });

                    if (res.status === 200) {
                      var id = "";

                      international.results.forEach((element) => {
                        if (element.language === e.target.language.value) {
                          id = element._id;
                        }
                      });

                      const new_body = new FormData();
                      new_body.append("id", id);
                      await fetch(`${process.env.REACT_APP_API_URL}/api/delete-european-standard`, {
                        method: "DELETE",
                        body: new_body,
                        headers: {
                          Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
                        },
                      });
                      window.location.reload(false);
                    } else {
                      const error = await res.json();
                      setErrorEu(error.error);
                    }
                  }}
                >
                  <Card.Header>Европейски стандарти</Card.Header>
                  <Card.Body>
                    <p style={{ color: "red", fontWeight: "bold" }}>{errorEu}</p>
                    <Input
                      label="Заглавие"
                      style={{ margin: 0, background: "white" }}
                      name="title"
                      id="title"
                      required
                    />
                    <br />
                    <Radio.Group
                      label="Език"
                      defaultValue="chair"
                      name="language"
                      id="language"
                      color="warning"
                      required
                    >
                      <Radio value="en">Английски</Radio>
                      <Radio value="bg">Български</Radio>
                    </Radio.Group>
                    <div style={{ marginBottom: 10 }} />
                    <Input
                      type="file"
                      style={{ fontSize: 14, background: "white", margin: 0 }}
                      label="Файл"
                      id="file"
                      name="file"
                      onChange={(e) => {
                        set_file(e.target.files[0]);
                      }}
                      required
                    />
                    <br />
                    <Button color="warning" style={{ selfAlign: "center", width: 200 }} type="submit">
                      Добавете файл
                    </Button>
                  </Card.Body>
                </Form>
              </Card>
            )}
            {bulgarian && (
              <Card style={{ marginLeft: 50, marginRight: 50 }}>
                <Form
                  onSubmit={async (e) => {
                    e.preventDefault();
                    const body = new FormData();
                    body.append("title", e.target.title.value);
                    body.append("file", bg_file);
                    body.append("language", e.target.language.value);
                    body.append("last_changed", Date.now());

                    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/post-bulgarian-standard`, {
                      method: "POST",
                      body: body,
                      headers: {
                        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
                      },
                    });

                    if (res.status === 200) {
                      var id = "";

                      bulgarian.results.forEach((element) => {
                        if (element.language === e.target.language.value) {
                          id = element._id;
                        }
                      });

                      const new_body = new FormData();
                      new_body.append("id", id);
                      await fetch(`${process.env.REACT_APP_API_URL}/api/delete-bulgarian-standard`, {
                        method: "DELETE",
                        body: new_body,
                        headers: {
                          Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
                        },
                      });
                      window.location.reload(false);
                    } else {
                      const error = await res.json();
                      setErrorBg(error.error);
                    }
                  }}
                >
                  <Card.Header>Европейски стандарти</Card.Header>
                  <Card.Body>
                    <p style={{ color: "red", fontWeight: "bold" }}>{errorBg}</p>
                    <Input
                      label="Заглавие"
                      style={{ margin: 0, background: "white" }}
                      name="title"
                      id="title"
                      required
                    />
                    <br />
                    <Radio.Group
                      label="Език"
                      defaultValue="chair"
                      name="language"
                      id="language"
                      color="warning"
                      required
                    >
                      <Radio value="en">Английски</Radio>
                      <Radio value="bg">Български</Radio>
                    </Radio.Group>
                    <div style={{ marginBottom: 10 }} />
                    <Input
                      type="file"
                      style={{ fontSize: 14, background: "white", margin: 0 }}
                      label="Файл"
                      id="file"
                      name="file"
                      onChange={(e) => {
                        set_bg_file(e.target.files[0]);
                      }}
                      required
                    />
                    <br />
                    <Button color="warning" style={{ selfAlign: "center", width: 200 }} type="submit">
                      Добавете файл
                    </Button>
                  </Card.Body>
                </Form>
              </Card>
            )}
          </div>
        </div>
        <Copyright />
      </main>
    </>
  );
};
export default DashboardStandards;
