import SEO from "../../common/SEO";
import HeaderAdmin from "../../common/header/HeaderAdmin";
import Copyright from "../../common/footer/Copyright";
import { Button, Dropdown, Input, Modal, Radio, Table } from "@nextui-org/react";
import { Form } from "react-bootstrap";
import React from "react";
import useSWR from "swr";
import RCTable from "./RCTable";

const fetcher = (url) => fetch(url).then((res) => res.json());

const DashboardRc = () => {
  const { data: sofia } = useSWR(`${process.env.REACT_APP_API_URL}/api/get-regional-committee?city=Sofia`, fetcher);
  const { data: burgas } = useSWR(`${process.env.REACT_APP_API_URL}/api/get-regional-committee?city=Burgas`, fetcher);
  const { data: varna } = useSWR(`${process.env.REACT_APP_API_URL}/api/get-regional-committee?city=Varna`, fetcher);
  const { data: pleven } = useSWR(`${process.env.REACT_APP_API_URL}/api/get-regional-committee?city=Pleven`, fetcher);
  const { data: plovdiv } = useSWR(`${process.env.REACT_APP_API_URL}/api/get-regional-committee?city=Plovdiv`, fetcher);
  const { data: ruse } = useSWR(`${process.env.REACT_APP_API_URL}/api/get-regional-committee?city=Ruse`, fetcher);
  const { data: zagora } = useSWR(`${process.env.REACT_APP_API_URL}/api/get-regional-committee?city=Zagora`, fetcher);
  const { data: shumen } = useSWR(`${process.env.REACT_APP_API_URL}/api/get-regional-committee?city=Tutrakan`, fetcher);

  const [visibleAdd, setVisibleAdd] = React.useState(false);
  return (
    <>
      {
        (<>
          {/* Modal add start */}
          <Modal scroll open={visibleAdd} onClose={() => setVisibleAdd(false)}>
            <Form onSubmit={async (e) => {
              e.preventDefault();
              const body = new FormData();
              body.append("full_name", e.target.full_name.value);
              body.append("email", e.target.email.value);
              body.append("is_representative", e.target.isChair.value === "chair" ? true : false);
              body.append("city", e.target.city.value)
              const resp = await fetch(`${process.env.REACT_APP_API_URL}/api/post-regional-committee-member`, {
                method: "POST",
                body: body,
                headers: {
                  Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
                },
              });
              window.location.reload(false);
            }}>
              <Modal.Header>
                <div style={{ marginTop: 20 }}>
                  <Input placeholder="Имена" style={{ background: "white", margin: 0 }} id="full_name" name="full_name" />
                </div>
              </Modal.Header>
              <Modal.Body>
                <div style={{ display: "flex", flexDirection: "column", alignSelf: "center" }}>
                  <div style={{ marginTop: 20 }}>
                    <Input placeholder="Email" style={{ background: "white", margin: 0 }} id="email" name="email" />
                  </div>
                  <div style={{ marginTop: 20 }}>
                    <Radio.Group label="Град" defaultValue="chair" name="city" id="city" color="warning">
                      <Radio value="Burgas">Бургас</Radio>
                      <Radio value="Varna">Варна</Radio>
                      <Radio value="Pleven">Плевен</Radio>
                      <Radio value="Plovdiv">Пловдив</Radio>
                      <Radio value="Ruse">Русе</Radio>
                      <Radio value="Sofia">София</Radio>
                      <Radio value="Zagora">Стара Загора</Radio>
                      <Radio value="Tutrakan">Шумен</Radio>
                    </Radio.Group>
                  </div>
                  <div style={{ marginTop: 20 }}>
                    <Radio.Group label="Председател" defaultValue="chair" name="isChair" id="isChair" color="warning">
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

          <SEO title="Административен панел" />
          <main className="page-wrapper">
            <HeaderAdmin btnStyle="btn-small round btn-icon" />
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <Button size="xl" color="warning" style={{ width: 200, marginTop: 50 }} onPress={() => setVisibleAdd(true)}>
                Добавете член
              </Button>
              {
                sofia && shumen && burgas && varna && pleven && plovdiv && ruse && zagora &&
                <RCTable sofia={sofia} burgas={burgas} varna={varna} ruse={ruse} pleven={pleven} plovdiv={plovdiv} zagora={zagora} shumen={shumen} />
              }</div>
            <Copyright />
          </main>
        </>)}</>
  );
};
export default DashboardRc;
