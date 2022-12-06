import React from "react";
import SEO from "../../common/SEO";
import Header from "../../common/header/Header";
import Copyright from "../../common/footer/Copyright";
import { Container, Card, Row } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Input, Grid } from "@nextui-org/react";

const Login = () => {
  return (
    <>
      <SEO title="Начало" />
      <main className="page-wrapper">
        <Header btnStyle="btn-small round btn-icon" />

        <Container>
          <Card
            css={{ $$cardColor: "$colors$default" }}
            style={{ marginTop: 100, marginBottom: 100 }}
          >
            <Card.Body>
              <Grid>
                <h6>Влез в Акаунт</h6>
              </Grid>
              <Grid>
                <Input labelPlaceholder="Default" status="default" />
              </Grid>

              <Grid style={{ marginTop: 10 }}>
                <Input labelPlaceholder="Default" status="Default" />
              </Grid>
              <Row justify="left">
                <Button
                  style={{
                    marginTop: 10,
                    marginRight: 40,
                    height: 50,
                    width: 250,
                  }}
                >
                  Default
                </Button>
              </Row>
            </Card.Body>
          </Card>
        </Container>

        <Copyright />
      </main>
    </>
  );
};

export default Login;
