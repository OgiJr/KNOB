import React from "react";
import SEO from "../../common/SEO";
import HeaderAdmin from "../../common/header/HeaderAdmin";
import Copyright from "../../common/footer/Copyright";
import { Button, Dropdown, Input, Modal, Pagination, Table } from "@nextui-org/react";

const cities = [{ name: "с. Дряново" }, { name: "Айтос" }, { name: "Аксаково" }, { name: "Априлци" }];
const capacities = [{ name: "Недвижими имоти" }, { name: "Недвижими културни ценности" }, { name: "Машини и съоражения" }, { name: "Права на интелектуална и индустриална собственост" }, { name: "Търговски предприятия и вземания" }, { name: "Финансови активи и фанансови институции" }, { name: "Други активи" }, { name: "Земеделски земи и трайни насъждения" }, { name: "Поземлени имоти в горски територии" }];

//Start company variables
const columns = [
  {
    key: "id",
    label: "№",
  },
  {
    key: "company",
    label: "Фирма",
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
const rows = [{ key: "1", id: "1", company: "АБАКУС КОНСУЛТИНГ ЕООД", city: "София", mobile: "0888289007", phone: "", capacityCompany: "Недвижими имоти", certificateNumberCompany: "900100223 (07.10.2016 г.)", bulstat: "203468650", address: "София 1415, ж.к. Драгалевци ул.Момино венче", speciality: "Горско стопанство", name: "Галина Йорданова Зоин", capacityPerson: "Недвижими имоти", certificatePerson: "100102176 (17.11.2014 г.)" }];
//End company variables

const DashboardCompanies = () => {
  const [selected, setSelected] = React.useState(new Set(["50"]));
  const [visible, setVisible] = React.useState(false);
  const [visibleArchive, setVisibleArchive] = React.useState(false);
  const [city, setCity] = React.useState("");
  const [companyName, setCompanyName] = React.useState("");
  const [companyCapacity, setCompanyCapacity] = React.useState("");
  const [companyCertificate, setCompanyCertificate] = React.useState("");
  const [bulstat, setBulstat] = React.useState("");
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState(new Set([""]));
  const [mobile, setMobile] = React.useState(new Set([""]));
  const [add, setAdd] = React.useState(false);

  const selectedValue = React.useMemo(() => Array.from(selected).join(", ").replaceAll("_", " "), [selected]);

  return (
    <>
      <SEO title="Административен панел" />
      <main className="page-wrapper">
        <HeaderAdmin btnStyle="btn-small round btn-icon" />
        {/* Start Modal Area */}
        <Modal closeButton width="85%" open={visible} onClose={() => setVisible(false)}>
          <Modal.Header>
            <Input width={500} placeholder={companyName} style={{ background: "white", textAlign: "center", marginLeft: 0, marginRight: 0, marginBottom: 10 }} />
          </Modal.Header>
          <Modal.Body style={{ marginLeft: 15, marginRight: 15, marginTop: 15, marginBottom: 15 }}>
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>Град:</span>
              <Input width={500} placeholder={city} style={{ background: "white", marginLeft: 0, marginRight: 0, marginBottom: 10 }} />
            </div>
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>Мобилен:</span>
              <Input width={500} placeholder={mobile} style={{ background: "white", marginLeft: 0, marginRight: 0, marginBottom: 10 }} />
            </div>
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>Сертификати номера:</span>
              <Input width={500} placeholder={companyCertificate} style={{ background: "white", marginLeft: 0, marginRight: 0, marginBottom: 10 }} />
            </div>
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>Адрес:</span>
              <Input width={500} placeholder={address} style={{ background: "white", marginLeft: 0, marginRight: 0, marginBottom: 10 }} />
            </div>
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>Булстат:</span>
              <Input width={500} placeholder={bulstat} style={{ background: "white", marginLeft: 0, marginRight: 0, marginBottom: 10 }} />
            </div>
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>Оценителска правоспособност:</span>
              <Input width={500} placeholder={companyCapacity} style={{ background: "white", marginLeft: 0, marginRight: 0, marginBottom: 10 }} />
            </div>
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>Оценител:</span>
              <Input width={500} placeholder={name} style={{ background: "white", marginLeft: 0, marginRight: 0, marginBottom: 10 }} />
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
        <Modal closeButton width="85%" open={visibleArchive} onClose={() => setVisibleArchive(false)}>
          <Modal.Header>
            <h5>Обезсилване на сертификата на: {companyName}</h5>
          </Modal.Header>
          <Modal.Body style={{ marginLeft: 15, marginRight: 15, marginTop: 15, marginBottom: 15 }}>
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>Обезсилен:</span>
              <Input width={500} placeholder={companyCertificate} style={{ background: "white", marginLeft: 0, marginRight: 0, marginBottom: 10 }} />
            </div>
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>Нов:</span>
              <Input width={500} style={{ background: "white", marginLeft: 0, marginRight: 0, marginBottom: 10 }} />
            </div>
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>Основание:</span>
              <Input width={500} style={{ background: "white", marginLeft: 0, marginRight: 0, marginBottom: 10 }} />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button color="warning">Затвори</Button>
            <Button color="success">Запази</Button>
          </Modal.Footer>
        </Modal>
        {/* End Modal Area */}

        {/* Start  Search Area*/}
        <div style={{ display: "flex", flexDirection: "column", marginLeft: 30 }}>
          <p style={{ fontSize: 16, fontWeight: "bold", marginTop: 15, marginLeft: 15, marginBottom: 10 }}>Филтър</p>
          <form className="filter" style={{ display: "flex", marginLeft: 15, gap: 30 }}>
            <div style={{ display: "flex", flexDirection: "column " }}>
              <Input style={{ background: "white", margin: 0, fontSize: 16 }} size="xl" labelPlaceholder="Фирма" />
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
                <Dropdown.Button color="warning" flat style={{ marginBottom: 30 }}>
                  Оценителска правоспособност
                </Dropdown.Button>
                <Dropdown.Menu aria-label="Dynamic Actions" items={capacities}>
                  {(item) => (
                    <Dropdown.Item key={item.name}>
                      <span style={{ fontSize: 8 }}>{item.name}</span>
                    </Dropdown.Item>
                  )}
                </Dropdown.Menu>
              </Dropdown>
              <Input style={{ background: "white", margin: 0, fontSize: 16 }} size="xl" labelPlaceholder="Сертификат №:" />
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <Button style={{ fontSize: 14, height: 30 }} type="submit" color="warning">
                Покажи
              </Button>
            </div>
          </form>
          <span style={{ marginTop: 20, marginLeft: 0, fontSize: 12 }}>За да редактирате натиснете името на оценителя</span>
          <Button
            style={{ width: "20%", marginTop: 15, marginLeft: 10 }}
            color="success"
            onPress={() => {
              setCompanyName("");
              setBulstat("");
              setName("");
              setCity("");
              setAddress("");
              setCompanyCertificate("");
              setCompanyCapacity("");
              setMobile("");
              setAdd(true);
              setVisible(true);
            }}
          >
            Добавяне
          </Button>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "end", selfAlign: "end" }}>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 20, marginTop: 20 }}>
              <Dropdown>
                <Dropdown.Button flat color="warning" size="xl">
                  {selectedValue}
                </Dropdown.Button>
                <Dropdown.Menu aria-label="Single selection actions" color="warning" disallowEmptySelection selectionMode="single" selectedKeys={selected} onSelectionChange={setSelected}>
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
                <Pagination total={20} initialPage={1} color="warning" size="xl" />
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
              <Table.Header columns={columns}>
                {(column) => (
                  <Table.Column key={column.key}>
                    <span style={{ fontSize: 14, marginLeft: 5, marginRight: 5 }}>{column.label}</span>
                  </Table.Column>
                )}
              </Table.Header>
              <Table.Body items={rows}>
                {(item) => (
                  <Table.Row key={item.key}>
                    {(columnKey) => (
                      <Table.Cell>
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setCompanyName(item.company);
                            setBulstat(item.bulstat);
                            setName(item.name);
                            setCity(item.city);
                            setAddress(item.address);
                            setCompanyCertificate(item.certificateNumberCompany);
                            setCompanyCapacity(item.capacityCompany);
                            setMobile(item.mobile);
                            setVisible(true);
                            setAdd(false);
                          }}
                        >
                          <span style={{ color: "black", fontSize: 14, fontWeight: "normal" }}>{item[columnKey]}</span>
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
export default DashboardCompanies;
