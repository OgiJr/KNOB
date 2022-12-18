import SEO from "../../common/SEO";
import HeaderAdmin from "../../common/header/HeaderAdmin";
import Copyright from "../../common/footer/Copyright";
import { Button, Card, Dropdown, Input, Modal } from "@nextui-org/react";
import { Form } from "react-bootstrap";
import React from "react";

const DashboardStandards = () => {
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

      <SEO title="Административен панел" />
      <main className="page-wrapper">
        <HeaderAdmin btnStyle="btn-small round btn-icon" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "90vh",
            justifyContent: "center",
          }}
        >
          <div style={{ display: "flex", width: "100%", justifyContent: "center", marginTop: 50, marginBottom: 50 }}>
            <Card style={{ marginLeft: 50, marginRight: 50 }}>
              <Card.Header>Европейски стандарти</Card.Header>
              <Card.Body>
                <Input label="Заглавие" style={{ margin: 0, background: "white" }} />
                <div style={{ marginBottom: 10 }} />
                <Input type="file" style={{ fontSize: 14, background: "white", margin: 0 }} label="Файл" />
                <br />
                <Button color="warning" style={{ selfAlign: "center", width: 200 }}>
                  Добавете файл
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ marginLeft: 50, marginRight: 50 }}>
              <Card.Header>Български стандарти</Card.Header>
              <Card.Body>
                <Input label="Заглавие" style={{ margin: 0, background: "white" }} />
                <div style={{ marginBottom: 10 }} />
                <Input type="file" style={{ fontSize: 14, background: "white", margin: 0 }} label="Файл" />
                <br />
                <Button color="warning" style={{ selfAlign: "center", width: 200 }}>
                  Добавете файл
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
        <Copyright />
      </main>
    </>
  );
};
export default DashboardStandards;
