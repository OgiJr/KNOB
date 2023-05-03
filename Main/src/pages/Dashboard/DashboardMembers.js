import React from "react";
import SEO from "../../common/SEO";
import HeaderAdmin from "../../common/header/HeaderAdmin";
import Copyright from "../../common/footer/Copyright";
import {
  Button,
  Dropdown,
  Input,
  Modal,
  Pagination,
  Table,
} from "@nextui-org/react";

const cities = [
  { name: "с. Дряново" },
  { name: "Айтос" },
  { name: "Аксаково" },
  { name: "Априлци" },
];
const capacities = [
  { name: "Недвижими имоти" },
  { name: "Недвижими културни ценности" },
  { name: "Машини и съоражения" },
  { name: "Права на интелектуална и индустриална собственост" },
  { name: "Търговски предприятия и вземания" },
  { name: "Финансови активи и фанансови институции" },
  { name: "Други активи" },
  { name: "Земеделски земи и трайни насаждения" },
  { name: "Поземлени имоти в горски територии" },
];

//Start people variables
const columnsPeople = [
  {
    key: "id",
    label: "№",
  },
  {
    key: "name",
    label: "Име",
  },
  {
    key: "member",
    label: "Членство",
  },
  {
    key: "city",
    label: "Град",
  },
  {
    key: "mobile",
    label: "Моб.",
  },
  {
    key: "phone",
    label: "Телефон",
  },
];
const rowsPeople = [
  {
    key: "1",
    id: "1",
    name: "Атанас Иванов Димов",
    member: "Да",
    city: "Ямбол",
    mobile: "0898634582",
    phone: "046663637",
    capacity: "Поземлени имоти в горски територии",
    certificateNumber: "820100133 (6.2.2012 г.)",
    address: "Ямбол 8600, ул. Христо Смирненски",
    speciality: "Горско стопанство",
    expirience: "ЗГ-1999",
    education: "висше(ВЛТИ-София)",
  },
  {
    key: "2",
    id: "2",
    name: "Иван Димитров Димов",
    member: "Да",
    city: "Бургас",
    mobile: "0888276526",
    phone: "",
    capacity:
      "Земеделски земи и трайни насаждения, Машини и съоражения, Недвижими имоти, Търговски предприятия и вземания",
    certificateNumber:
      "810100079 (30.12.2010 г.) , 300100303 (14.12.2009 г.) , 100100786 (14.12.2009 г.) , 500100271 (14.12.2009 г.)",
    address: "Бургас 8001, ж.к. Братя Миладинови",
    speciality: "Счетоводство и контрол",
    expirience: "НИ-2005 МС-2005 ТП-2008 ЗЗ-2009",
    education: "висше (БСУ - Бургас)",
  },
];
//End people variables

const DashboardMembers = () => {
  const [selected, setSelected] = React.useState(new Set(["50"]));
  const [visible, setVisible] = React.useState(false);
  const [visibleArchive, setVisibleArchive] = React.useState(false);

  //Start people variables
  const [name, setName] = React.useState("");
  const [capacity, setCapacity] = React.useState(new Set([""]));
  const [address, setAddress] = React.useState(new Set([""]));
  const [certificateNumber, setCertificateNumber] = React.useState(
    new Set([""])
  );
  const [member, setMember] = React.useState(new Set([""]));
  const [mobile, setMobile] = React.useState(new Set([""]));
  const [phone, setPhone] = React.useState(new Set([""]));
  const [speciality, setSpeciality] = React.useState(new Set([""]));
  const [expirience, setExperience] = React.useState(new Set([""]));
  const [education, setEducation] = React.useState(new Set([""]));
  //End people variables
  const [add, setAdd] = React.useState(false);

  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  return (
    <>
      <SEO title="Административен панел" />
      <main className="page-wrapper">
        <HeaderAdmin btnStyle="btn-small round btn-icon" />
        {/* Start Modal Area */}
        <Modal
          closeButton
          width="85%"
          open={visible}
          onClose={() => setVisible(false)}
        >
          <Modal.Header>
            <Input
              width={500}
              placeholder={name}
              style={{
                background: "white",
                textAlign: "center",
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 10,
              }}
            />
          </Modal.Header>
          <Modal.Body
            style={{
              marginLeft: 15,
              marginRight: 15,
              marginTop: 15,
              marginBottom: 15,
            }}
          >
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>
                Оценителска правоспособност:
              </span>
              <Input
                width={500}
                placeholder={capacity}
                style={{
                  background: "white",
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 10,
                }}
              />
            </div>
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>Членува в КНОБ:</span>
              <Input
                width={500}
                placeholder={member}
                style={{
                  background: "white",
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 10,
                }}
              />
            </div>
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>Сертификати номера:</span>
              <Input
                width={500}
                placeholder={certificateNumber}
                style={{
                  background: "white",
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 10,
                }}
              />
            </div>
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>Адрес:</span>
              <Input
                width={500}
                placeholder={address}
                style={{
                  background: "white",
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 10,
                }}
              />
            </div>
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>Телефон:</span>
              <Input
                width={500}
                placeholder={phone}
                style={{
                  background: "white",
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 10,
                }}
              />
            </div>
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>Мобилен:</span>
              <Input
                width={500}
                placeholder={mobile}
                style={{
                  background: "white",
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 10,
                }}
              />
            </div>
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>Специалност:</span>
              <Input
                width={500}
                placeholder={speciality}
                style={{
                  background: "white",
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 10,
                }}
              />
            </div>
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>Стаж:</span>
              <Input
                width={500}
                placeholder={expirience}
                style={{
                  background: "white",
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 10,
                }}
              />
            </div>
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>Образование:</span>
              <Input
                width={500}
                placeholder={education}
                style={{
                  background: "white",
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 10,
                }}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            {!add ? (
              <Button
                color="error"
                onPress={() => {
                  setVisible(false);
                  setVisibleArchive(true);
                }}
              >
                Деактивирай
              </Button>
            ) : (
              <></>
            )}
            <Button color="success">Запази</Button>
          </Modal.Footer>
        </Modal>
        <Modal
          closeButton
          width="85%"
          open={visibleArchive}
          onClose={() => setVisibleArchive(false)}
        >
          <Modal.Header>
            <h5>Обезсилване на сертификата на: {name}</h5>
          </Modal.Header>
          <Modal.Body
            style={{
              marginLeft: 15,
              marginRight: 15,
              marginTop: 15,
              marginBottom: 15,
            }}
          >
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>
                Оценителска правоспособност:
              </span>
              <Input
                width={500}
                placeholder={capacity}
                style={{
                  background: "white",
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 10,
                }}
              />
            </div>
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>Обезсилен:</span>
              <Input
                width={500}
                placeholder={certificateNumber}
                style={{
                  background: "white",
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 10,
                }}
              />
            </div>
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>Нов:</span>
              <Input
                width={500}
                style={{
                  background: "white",
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 10,
                }}
              />
            </div>
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>Основание:</span>
              <Input
                width={500}
                style={{
                  background: "white",
                  marginLeft: 0,
                  marginRight: 0,
                  marginBottom: 10,
                }}
              />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button color="warning">Затвори</Button>
            <Button color="success">Запази</Button>
          </Modal.Footer>
        </Modal>
        {/* End Modal Area */}

        {/* Start  Search Area*/}
        <div
          style={{ display: "flex", flexDirection: "column", marginLeft: 30 }}
        >
          <p
            style={{
              fontSize: 16,
              fontWeight: "bold",
              marginTop: 15,
              marginLeft: 15,
              marginBottom: 10,
            }}
          >
            Филтър
          </p>
          <form
            className="filter"
            style={{ display: "flex", marginLeft: 15, gap: 30 }}
          >
            <div style={{ display: "flex", flexDirection: "column " }}>
              <Input
                style={{ background: "white", margin: 0, fontSize: 16 }}
                size="xl"
                labelPlaceholder="Име, презиме и фамилия"
              />
              <Dropdown placement="bottom-left">
                <Dropdown.Button flat style={{ marginTop: 30 }} color="warning">
                  Град
                </Dropdown.Button>
                <Dropdown.Menu items={cities}>
                  {(item) => (
                    <Dropdown.Item key={item.name}>
                      <span style={{ fontSize: 12 }}>{item.name}</span>
                    </Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Dropdown placement="bottom-left">
                <Dropdown.Button
                  color="warning"
                  flat
                  style={{ marginBottom: 30 }}
                >
                  Оценителска правоспособност
                </Dropdown.Button>
                <Dropdown.Menu items={capacities}>
                  {(item) => (
                    <Dropdown.Item key={item.name}>
                      <span style={{ fontSize: 8 }}>{item.name}</span>
                    </Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>
              <Input
                style={{ background: "white", margin: 0, fontSize: 16 }}
                size="xl"
                labelPlaceholder="Сертификат №:"
              />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button
                style={{ fontSize: 14, height: 30 }}
                type="submit"
                color="warning"
              >
                Покажи
              </Button>
            </div>
          </form>
          <span style={{ marginTop: 20, marginLeft: 0, fontSize: 12 }}>
            За да редактирате натиснете името на оценителя
          </span>
          <Button
            style={{ width: "20%", marginTop: 15, marginLeft: 10 }}
            color="success"
            onPress={() => {
              setName("");
              setCapacity("");
              setAddress("");
              setCertificateNumber("");
              setMember("");
              setMobile("");
              setPhone("");
              setSpeciality("");
              setExperience("");
              setEducation("");
              setVisible(true);
              setAdd(true);
            }}
          >
            Добавяне
          </Button>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "end",
              selfAlign: "end",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 20,
                marginTop: 20,
              }}
            >
              <Dropdown>
                <Dropdown.Button flat color="warning" size="xl">
                  {selectedValue}
                </Dropdown.Button>
                <Dropdown.Menu
                  color="warning"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selected}
                  onSelectionChange={setSelected}
                >
                  <Dropdown.Item key="10">
                    <span style={{ fontSize: 14 }}>10</span>
                  </Dropdown.Item>
                  <Dropdown.Item key="25">
                    <span style={{ fontSize: 14 }}>25</span>
                  </Dropdown.Item>
                  <Dropdown.Item key="50">
                    <span style={{ fontSize: 14 }}>50</span>
                  </Dropdown.Item>
                  <Dropdown.Item key="100">
                    <span style={{ fontSize: 14 }}>100</span>
                  </Dropdown.Item>
                  <Dropdown.Item key="всички">
                    <span style={{ fontSize: 14 }}>Всички</span>
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <div style={{ marginRight: 20 }}>
                <Pagination
                  total={20}
                  initialPage={1}
                  color="warning"
                  size="xl"
                />
              </div>
            </div>
          </div>
          <div style={{ marginRight: 30, marginTop: 30, marginBottom: 50 }}>
            <Table
              css={{
                height: "auto",
                minWidth: "100%",
              }}
            >
              <Table.Header columns={columnsPeople}>
                {(column) => (
                  <Table.Column key={column.key}>
                    <span
                      style={{ fontSize: 14, marginLeft: 5, marginRight: 5 }}
                    >
                      {column.label}
                    </span>
                  </Table.Column>
                )}
              </Table.Header>
              <Table.Body items={rowsPeople}>
                {(item) => (
                  <Table.Row key={item.key}>
                    {(columnKey) => (
                      <Table.Cell>
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setName(item.name);
                            setCapacity(item.capacity);
                            setAddress(item.address);
                            setCertificateNumber(item.certificateNumber);
                            setMember(item.member);
                            setMobile(item.mobile);
                            setPhone(item.phone);
                            setSpeciality(item.speciality);
                            setExperience(item.expirience);
                            setEducation(item.education);
                            setVisible(true);
                            setAdd(false);
                          }}
                        >
                          <span
                            style={{
                              color: "black",
                              fontSize: 14,
                              fontWeight: "normal",
                            }}
                          >
                            {item[columnKey]}
                          </span>
                        </span>
                      </Table.Cell>
                    )}
                  </Table.Row>
                )}
              </Table.Body>
            </Table>
          </div>
        </div>
        {/* End Search Area */}
        <Copyright />
      </main>
    </>
  );
};
export default DashboardMembers;
