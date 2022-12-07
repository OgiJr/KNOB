import React from "react";
import SEO from "../../common/SEO";
import Header from "../../common/header/Header";
import Copyright from "../../common/footer/Copyright";
import { Card, Dropdown, Row } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Input, Grid } from "@nextui-org/react";

const Login = () => {
  const [loginType, setLoginType] = React.useState("login");
  const cities = [{ name: "с. Дряново" }, { name: "Айтос" }, { name: "Аксаково" }, { name: "Априлци" }];

  return (
    <>
      <SEO title="Начало" />
      <main className="page-wrapper">
        <Header btnStyle="btn-small round btn-icon" />

        <div style={{ display: "flex", alignSelf: "center", justifyContent: "center", alignItems: "center" }}>
          {loginType === "login" ? (
            <Card style={{ marginTop: 100, marginBottom: 150, width: 500, display: "flex", alignItems: "center" }}>
              <Card.Body>
                <Grid>
                  <h6>Влез в акаунт</h6>
                </Grid>
                <Grid style={{ marginTop: 10 }}>
                  <Input labelPlaceholder="Имейл" status="default" style={{ background: "white", margin: 0 }} />
                </Grid>

                <Grid style={{ marginTop: 30 }}>
                  <Input labelPlaceholder="Парола" type="password" status="Default" style={{ background: "white", margin: 0 }} />
                </Grid>
                <Row justify="center">
                  <a href="/dashboard-admin">
                    <Button
                      color="warning"
                      style={{
                        marginTop: 30,
                        marginBottom: 30,
                        height: 35,
                        width: 200,
                      }}
                    >
                      Вход
                    </Button>
                  </a>
                </Row>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, textAlign: "center" }}>
                  <span
                    style={{ color: "orange", fontSize: 10, width: 200, cursor: "pointer" }}
                    onClick={() => {
                      setLoginType("register");
                    }}
                  >
                    Потребителска регистрация
                  </span>
                  <span
                    style={{ color: "orange", fontSize: 10, width: 200, cursor: "pointer" }}
                    onClick={() => {
                      setLoginType("forgot");
                    }}
                  >
                    Забравена парола
                  </span>
                </div>
              </Card.Body>
            </Card>
          ) : loginType === "register" ? (
            <Card style={{ marginTop: 20, marginBottom: 150, width: 500, display: "flex", alignItems: "center" }}>
              <Card.Body>
                <Grid>
                  <h6>Създай акаунт</h6>
                </Grid>
                <Grid style={{ marginTop: 10 }}>
                  <Input placeholder="Имейл" status="default" style={{ background: "white", margin: 0, fontSize: 10, width: 200 }} />
                </Grid>
                <Grid style={{ marginTop: 15 }}>
                  <Input placeholder="Парола" type="password" status="Default" style={{ background: "white", fontSize: 10, width: 200, margin: 0 }} />
                </Grid>
                <Grid style={{ marginTop: 15 }}>
                  <Input placeholder="Потвърдете парола" type="password" status="Default" style={{ background: "white", fontSize: 10, width: 200, margin: 0 }} />
                </Grid>
                <Grid style={{ marginTop: 30 }}>
                  <Input placeholder="Име" status="Default" style={{ background: "white", fontSize: 10, width: 200, margin: 0 }} />
                </Grid>
                <Grid style={{ marginTop: 15 }}>
                  <Input placeholder="Презиме" status="Default" style={{ background: "white", fontSize: 10, width: 200, margin: 0 }} />
                </Grid>
                <Grid style={{ marginTop: 15 }}>
                  <Input placeholder="Фамилия" status="Default" style={{ background: "white", fontSize: 10, width: 200, margin: 0 }} />
                </Grid>
                <Grid style={{ marginTop: 15 }}>
                  <Input placeholder="Телефон" status="Default" style={{ background: "white", fontSize: 10, width: 200, margin: 0 }} />
                </Grid>
                <Grid style={{ marginTop: 15 }}>
                  <Input placeholder="Мобилен" status="Default" style={{ background: "white", margin: 0, fontSize: 10, width: 200 }} />
                </Grid>
                <Dropdown placement="bottom-left">
                  <Dropdown.Button flat style={{ marginTop: 15, width: 200, fontSize: 10, width: 200 }} color="warning">
                    Град
                  </Dropdown.Button>
                  <Dropdown.Menu items={cities}>
                    {(item) => (
                      <Dropdown.Item key={item.name}>
                        <span style={{ fontSize: 10, width: 200 }}>{item.name}</span>
                      </Dropdown.Item>
                    )}
                  </Dropdown.Menu>
                </Dropdown>
                <Grid style={{ marginTop: 15 }}>
                  <Input placeholder="Адрес" status="Default" style={{ background: "white", margin: 0, fontSize: 10, width: 200 }} />
                </Grid>
                <Row justify="center">
                  <a href="/dashboard-admin">
                    <Button
                      color="warning"
                      style={{
                        marginTop: 30,
                        marginBottom: 30,
                        height: 35,
                        width: 200,
                      }}
                    >
                      Регистрация
                    </Button>
                  </a>
                </Row>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, textAlign: "center" }}>
                  <span
                    style={{ color: "orange", fontSize: 14, cursor: "pointer" }}
                    onClick={() => {
                      setLoginType("login");
                    }}
                  >
                    Назад
                  </span>
                </div>
              </Card.Body>
            </Card>
          ) : (
            <Card style={{ marginTop: 100, marginBottom: 150, width: 500, display: "flex", alignItems: "center" }}>
              <Card.Body>
                <Grid>
                  <h6>Изпрати имейл с нова парола</h6>
                </Grid>
                <Grid style={{ marginTop: 10 }}>
                  <Input labelPlaceholder="Имейл" style={{ background: "white", margin: 0 }} />
                </Grid>
                <Row justify="center">
                  <a href="/dashboard-admin">
                    <Button
                      color="warning"
                      style={{
                        marginTop: 30,
                        marginBottom: 30,
                        height: 35,
                        width: 200,
                      }}
                    >
                      Изпрати
                    </Button>
                  </a>
                </Row>
                <div style={{ display: "flex", flexDirection: "column", gap: 10, textAlign: "center" }}>
                  <span
                    style={{ color: "orange", fontSize: 10, cursor: "pointer" }}
                    onClick={() => {
                      setLoginType("login");
                    }}
                  >
                    Назад
                  </span>
                </div>
              </Card.Body>
            </Card>
          )}
        </div>

        <Copyright />
      </main>
    </>
  );
};

export default Login;
