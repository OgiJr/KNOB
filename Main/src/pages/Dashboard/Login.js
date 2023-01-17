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
  const [error, setError] = React.useState("");

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <SEO title="Начало" />
      <main className="page-wrapper">
        <Header btnStyle="btn-small round btn-icon" />

        <div
          style={{
            display: "flex",
            alignSelf: "center",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            minHeight: "85vh",
          }}
        >
          <p style={{ marginTop: 150, color: "red", fontWeight: "bold" }}>{error}</p>
          {loginType === "login" ? (
            <Card style={{ marginBottom: 150, width: 500, display: "flex", alignItems: "center" }}>
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
                  if (resp.status !== 200) {
                    const { error } = await resp.json();
                    setError(error);
                    return;
                  }
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
                        setLoginType("register");
                      }}
                    >
                      Регистрация
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
              </form>
            </Card>
          ) : loginType === "forgot" ? (
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
          ) : (
            <>
              <Card style={{ marginTop: 100, marginBottom: 150, width: 500, display: "flex", alignItems: "center" }}>
                <form
                  onSubmit={async (e) => {
                    e.preventDefault();

                    // TODO: CHECK EMAIL AND PASS ARE INPUTED
                    if (
                      !e.target.email.value ||
                      !e.target.password.value ||
                      !e.target.egn.value ||
                      !e.target.confirm_password.value
                    ) {
                      setError("Моля попълнете всички полета");
                      return;
                    }

                    const body = new FormData();
                    if (e.target.password.value !== e.target.confirm_password.value) {
                      setError("Паролите не съвпадат");
                      return;
                    }
                    body.append("email", e.target.email.value);
                    body.append("password", e.target.password.value);
                    body.append("egn", e.target.egn.value);

                    const resp = await fetch(`${process.env.REACT_APP_API_URL}/api/post-registration`, {
                      method: "POST",
                      body: body,
                    });

                    if (resp.status !== 200) {
                      const { error } = await resp.json();
                      setError(error);
                      return;
                    }

                    // TODO: error checking
                    const { token } = await resp.json();

                    await login({ token });
                    navigate("/");
                  }}
                >
                  <Card.Body>
                    <Grid>
                      <h6> Регистрация</h6>
                    </Grid>
                    <Grid style={{ marginTop: 10 }}>
                      <Input
                        name="egn"
                        labelPlaceholder="ЕГН"
                        status="default"
                        style={{ background: "white", margin: 0 }}
                      />
                    </Grid>
                    <Grid style={{ marginTop: 30 }}>
                      <Input
                        name="email"
                        labelPlaceholder="Имейл"
                        status="default"
                        style={{ background: "white", margin: 0 }}
                      />
                    </Grid>
                    <Grid style={{ marginTop: 10 }}>
                      <Input
                        labelPlaceholder="Парола"
                        type="password"
                        status="Default"
                        name="password"
                        style={{ background: "white", margin: 0 }}
                      />
                    </Grid>
                    <Grid style={{ marginTop: 10 }}>
                      <Input
                        labelPlaceholder="Потвърдете парола"
                        type="password"
                        status="Default"
                        name="confirm_password"
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
                        Регистрация
                      </Button>
                    </Row>
                    <div style={{ display: "flex", flexDirection: "column", gap: 10, textAlign: "center" }}>
                      <span
                        style={{ color: "orange", fontSize: 10, width: 200, cursor: "pointer" }}
                        onClick={() => {
                          setLoginType("login");
                        }}
                      >
                        Вход
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
                </form>
              </Card>
            </>
          )}
        </div>

        <Copyright />
      </main>
    </>
  );
};

export default Login;
