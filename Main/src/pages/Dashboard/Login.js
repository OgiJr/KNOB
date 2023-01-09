import React from "react";
import SEO from "../../common/SEO";
import Header from "../../common/header/Header";
import Copyright from "../../common/footer/Copyright";
import { Card, Row } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Input, Grid } from "@nextui-org/react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Login = () => {
  const [loginType, setLoginType] = React.useState("login");
  const { user, login } = useAuth();
  const navigate = useNavigate();

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <SEO title="Начало" />
      <main className="page-wrapper">
        <Header btnStyle="btn-small round btn-icon" />

        <div style={{ display: "flex", alignSelf: "center", justifyContent: "center", alignItems: "center" }}>
          {loginType === "login" ? (
            <Card style={{ marginTop: 100, marginBottom: 150, width: 500, display: "flex", alignItems: "center" }}>
              <form
                onSubmit={async (e) => {
                  e.preventDefault();

                  // TODO: CHECK EMAIL AND PASS ARE INPUTED

                  const body = new FormData();
                  body.append("email", e.target.email.value);
                  body.append("password", e.target.password.value);

                  const resp = await fetch(`${process.env.REACT_APP_API_URL}/api/login`, {
                    method: "POST",
                    body: body,
                  });

                  // TODO: error checking
                  const { token } = await resp.json();

                  await login({ token });
                  navigate("/");
                }}
              >
                <Card.Body>
                  <Grid>
                    <h6>Влез в акаунт</h6>
                  </Grid>
                  <Grid style={{ marginTop: 10 }}>
                    <Input
                      name="email"
                      labelPlaceholder="Имейл"
                      status="default"
                      style={{ background: "white", margin: 0 }}
                    />
                  </Grid>

                  <Grid style={{ marginTop: 30 }}>
                    <Input
                      labelPlaceholder="Парола"
                      type="password"
                      status="Default"
                      name="password"
                      style={{ background: "white", margin: 0 }}
                    />
                  </Grid>
                  <Row justify="center">
                    <Button
                      type="submit"
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
                  </Row>
                  <div style={{ display: "flex", flexDirection: "column", gap: 10, textAlign: "center" }}>
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
              </form>
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
