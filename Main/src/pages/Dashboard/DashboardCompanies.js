import React from "react";
import { Modal, Button, Dropdown, Input, Pagination, Table, Radio } from "@nextui-org/react";
import "../../assets/scss/table.scss";
import useSWR from "swr";
import SEO from "../../common/SEO";
import HeaderAdmin from "../../common/header/HeaderAdmin";

const cities = [
  { name: "Всички" },
  { name: "с. Дряново" },
  { name: "Айтос" },
  { name: "Аксаково" },
  { name: "Априлци" },
  { name: "Ардино" },
  { name: "Асеновград" },
  { name: "Балчик" },
  { name: "Банкя" },
  { name: "Банско" },
  { name: "Батак" },
  { name: "Белене" },
  { name: "Белица" },
  { name: "Белово" },
  { name: "Белоградчик" },
  { name: "Белослав" },
  { name: "Берковица" },
  { name: "Благоевград" },
  { name: "Бобов Дол" },
  { name: "Божурище" },
  { name: "Ботевград" },
  { name: "Бриниполе" },
  { name: "Барцигово" },
  { name: "Брезник" },
  { name: "Брезово" },
  { name: "Бургас" },
  { name: "Бутово" },
  { name: "Бяла" },
  { name: "Бяла Слатина" },
  { name: "Варна" },
  { name: "Васил Левски" },
  { name: "Велики Преслав" },
  { name: "Велико Търново" },
  { name: "Велинград" },
  { name: "Ветово" },
  { name: "Ветрино" },
  { name: "Видин" },
  { name: "Владая" },
  { name: "Враца" },
  { name: "Вълкосел" },
  { name: "Вълчедръм" },
  { name: "Вълчи дол" },
  { name: "Върбица" },
  { name: "Вършец" },
  { name: "Габрово" },
  { name: "Гарван" },
  { name: "Генерал Тошево" },
  { name: "Годеч" },
  { name: "Годлево" },
  { name: "Горна Оряховица" },
  { name: "Гоце Делчев" },
  { name: "Гулянци" },
  { name: "Гълъбово" },
  { name: "Две могили" },
  { name: "Дебелец" },
  { name: "Девин" },
  { name: "Девня" },
  { name: "Димитровград" },
  { name: "Добринище" },
  { name: "Добрич" },
  { name: "Доброглед" },
  { name: "Долна баня" },
  { name: "Долни Дъбник" },
  { name: "Долни чифлик" },
  { name: "Доспат" },
  { name: "Драгоман" },
  { name: "Дряново" },
  { name: "Дулово" },
  { name: "Дунавци" },
  { name: "Дупница" },
  { name: "Дългопол" },
  { name: "Елена" },
  { name: "Елин Пелин" },
  { name: "Елхово" },
  { name: "Етрополе" },
  { name: "Земен" },
  { name: "Златица" },
  { name: "Златоград" },
  { name: "Ивайловград" },
  { name: "Игнатиево" },
  { name: "Исперих" },
  { name: "Ихтиман" },
  { name: "Каварна" },
  { name: "Казанлък" },
  { name: "Камено" },
  { name: "Карлово" },
  { name: "Карнобат" },
  { name: "Кнежа" },
  { name: "Козлодуй" },
  { name: "Койнаре" },
  { name: "Костандово" },
  { name: "Костенец" },
  { name: "Костинброд" },
  { name: "Котел" },
  { name: "Кочериново" },
  { name: "Кресна" },
  { name: "Кричим" },
  { name: "Крумовград" },
  { name: "Кубрат" },
  { name: "Куклен" },
  { name: "Кърджали" },
  { name: "Кюстендил" },
  { name: "Левски" },
  { name: "Летница" },
  { name: "Ловеч" },
  { name: "Лом" },
  { name: "Луковит" },
  { name: "Любимец" },
  { name: "Лясковец" },
  { name: "Мадан" },
  { name: "Маджарово" },
  { name: "Мездра" },
  { name: "Мелник" },
  { name: "Момин проход" },
  { name: "Момчилград" },
  { name: "Момчиловци" },
  { name: "Монтана" },
  { name: "Неделино" },
  { name: "Несебър" },
  { name: "Никопол" },
  { name: "Нова Загора" },
  { name: "Нови Искър" },
  { name: "Нови пазар" },
  { name: "Обзор" },
  { name: "Омуртаг" },
  { name: "Ореш" },
  { name: "Оряхово" },
  { name: "Павликени" },
  { name: "Пазарджик" },
  { name: "Панагюрище" },
  { name: "Панчерево" },
  { name: "Перник" },
  { name: "Перущица" },
  { name: "Петрич" },
  { name: "Петрово" },
  { name: "Пирдоп" },
  { name: "Плачковци" },
  { name: "Плевен" },
  { name: "Пловдив" },
  { name: "Победа" },
  { name: "Поликраище" },
  { name: "Полски Тръмбеш" },
  { name: "Поморие" },
  { name: "Попово" },
  { name: "Правец" },
  { name: "Приморско" },
  { name: "Провадия" },
  { name: "Първомай" },
  { name: "Раднево" },
  { name: "Радомир" },
  { name: "Разград" },
  { name: "Разлог" },
  { name: "Ракитово" },
  { name: "Раковски" },
  { name: "Рудозем" },
  { name: "Русе" },
  { name: "с. Априлово  " },
  { name: "с. Баните" },
  { name: "с. Бачково" },
  { name: "с. Богослов" },
  { name: "с. Борино" },
  { name: "с. Боровци" },
  { name: "с. Браниполе" },
  { name: "с. Бутово" },
  { name: "с. Бързия" },
  { name: "с. Бяла" },
  { name: "с. Васил Левски" },
  { name: "с. Венелин" },
  { name: "с. Вишнево" },
  { name: "с. Войнягово" },
  { name: "с. Гара Елин Пелин" },
  { name: "с. Гарван" },
  { name: "с. Герман" },
  { name: "с. Гоцево" },
  { name: "с. Горна Ковачица" },
  { name: "с. Граница" },
  { name: "с. Доброглед" },
  { name: "с. Доброславци" },
  { name: "с. Долни Пасарел" },
  { name: "с. Драговищица" },
  { name: "с. Загражден" },
  { name: "с. Калейца" },
  { name: "с. Калояново" },
  { name: "с. Кокаляне" },
  { name: "с. Коларово" },
  { name: "с. Крумово" },
  { name: "с. Листец" },
  { name: "с. Лозен" },
  { name: "с. Лопян" },
  { name: "с. Лясково" },
  { name: "с. Марково" },
  { name: "с. Медковец" },
  { name: "с. Мечка" },
  { name: "с. Момчиловци" },
  { name: "с. Мрамор" },
  { name: "с. Мусачево" },
  { name: "с. Мусомища" },
  { name: "с. Невестино" },
  { name: "с. Нова махала" },
  { name: "с. Новачене" },
  { name: "с. Огняново" },
  { name: "с. Окорш" },
  { name: "с. Павелско" },
  { name: "с. Петрово" },
  { name: "с. Пиргово" },
  { name: "с. Поликраище" },
  { name: "с. Поповица" },
  { name: "с. Първенец" },
  { name: "с. Първомай" },
  { name: "с. Рудник" },
  { name: "с. Сеслав" },
  { name: "с. Сипей" },
  { name: "с. Старозагорски бани" },
  { name: "с. Старцево" },
  { name: "с. Струйно" },
  { name: "с. Сърнево" },
  { name: "с. Труд" },
  { name: "с. Търън" },
  { name: "с. Хаджидимитрово" },
  { name: "с. Хаджиево" },
  { name: "с. Черно море" },
  { name: "Самоков" },
  { name: "Сандански" },
  { name: "Сапарева баня" },
  { name: "Свиленград" },
  { name: "Свищов" },
  { name: "Своге" },
  { name: "Севлиево" },
  { name: "Септември" },
  { name: "Силистра" },
  { name: "Симеоновград" },
  { name: "Симитли" },
  { name: "Славяново" },
  { name: "Сливен" },
  { name: "Сливница" },
  { name: "Смилян" },
  { name: "Смолян" },
  { name: "Смядово" },
  { name: "Созопол" },
  { name: "Сопот" },
  { name: "София" },
  { name: "Средец" },
  { name: "Стамболийски" },
  { name: "Стара Загора" },
  { name: "Стокхолм" },
  { name: "Стражец" },
  { name: "Стражица" },
  { name: "Стралджа" },
  { name: "Стрелча" },
  { name: "Суворово" },
  { name: "Съединение" },
  { name: "Твърдица" },
  { name: "Тервел" },
  { name: "Тетевен" },
  { name: "Тополовград" },
  { name: "Троян" },
  { name: "Тръстеник" },
  { name: "Трявна" },
  { name: "Тутракан" },
  { name: "Търговище" },
  { name: "Хаджиево" },
  { name: "Харманли" },
  { name: "Хасково" },
  { name: "Хисаря" },
  { name: "Цар Калоян" },
  { name: "Царево" },
  { name: "Чепеларе" },
  { name: "Червен бряг" },
  { name: "Черногорово" },
  { name: "Четирци" },
  { name: "Чирпан" },
  { name: "Шабла" },
  { name: "Шивачево" },
  { name: "Шумен" },
  { name: "Якоруда" },
  { name: "Ямбол" },
];

const capacities = [
  { name: "Недвижими имоти" },
  { name: "Недвижими културни ценности" },
  { name: "Машини и съоръжения" },
  { name: "Права на интелектуалната и индустриалната собственост" },
  { name: "Търговски предприятия и вземания" },
  { name: "Финансови активи и финансови институции" },
  { name: "Други активи" },
  { name: "Земеделски земи и трайни насаждения" },
  { name: "Поземлени имоти в горски територии" },
];

const columnsCompanies = [
  {
    key: "number",
    label: "№",
  },
  {
    key: "name",
    label: "Фирма",
  },
  {
    key: "city",
    label: "Град",
  },
  {
    key: "mobile_phone",
    label: "Моб. тел.",
  },
  {
    key: "landline",
    label: "Телефон",
  },
];

const DashboardCompanies = () => {
  const fetcher = (url) =>
    fetch(url, {
      headers: {
        Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
      },
    }).then((res) => res.json());

  const [selected_city, set_selected_city] = React.useState(null);
  const [selected_capacity, set_selected_capacity] = React.useState(null);
  const [mapped_companies, set_mapped_companies] = React.useState([]);
  const [name, set_name] = React.useState("");
  const [certificate_number, set_certificate_number] = React.useState("");
  const [entries_per_page, set_entries_per_page] = React.useState(50);
  const [page, set_page] = React.useState(1);
  const { data: companies } = useSWR(`${process.env.REACT_APP_API_URL}/api/get-companies`, fetcher);
  const { data: users } = useSWR(`${process.env.REACT_APP_API_URL}/api/get-users`, fetcher);
  const [visibleArchive, setVisibleArchive] = React.useState(false);
  const [add, setAdd] = React.useState(false);
  const [modal, setModal] = React.useState(false);
  const [current_company, set_current_company] = React.useState(null);
  const [error, setError] = React.useState("");
  const [certificates_selected, set_certificates_selected] = React.useState([]);
  const [addCertificateVisible, setAddCertificateVisible] = React.useState(false);

  React.useEffect(() => {
    if (companies) {
      set_mapped_companies(
        companies.results
          .slice((page - 1) * entries_per_page, (page - 1) * entries_per_page + entries_per_page)
          .filter((c) => {
            if (name) {
              if (!c.name.toLowerCase().includes(name.toLowerCase())) {
                return false;
              }
            }

            if (certificate_number) {
              if (!c.current_valid_certificates || c.current_valid_certificates.length === 0) {
                return false;
              }

              let match_cert = false;
              for (const cert of c.current_valid_certificates) {
                if (cert.certificate_number.includes(certificate_number)) {
                  match_cert = true;
                }
              }

              if (!match_cert) {
                return false;
              }
            }

            if (selected_city) {
              if (selected_city.name !== "Всички" && c.city !== selected_city.name) {
                return false;
              }
            }

            if (selected_capacity) {
              if (selected_capacity.name !== "Всички") {
                if (!c.current_valid_certificates || c.current_valid_certificates.length === 0) {
                  return false;
                }
                let match_cert = false;

                for (const cert of c.current_valid_certificates) {
                  if (cert.certificate_type === selected_capacity.name) {
                    match_cert = true;
                  }
                }

                if (!match_cert) {
                  return false;
                }
              }
            }

            return true;
          })
          .map((c) => {
            let valuer_string = "";
            for (let i = 0; i < c.valuers.length; i++) {
              valuer_string += c.valuers[i].number;
              if (i !== c.valuers.length - 1) {
                valuer_string += ", ";
              }
            }

            let new_c = { ...c };
            new_c.valuer_string = valuer_string;

            return new_c;
          })
      );
    }
  }, [
    companies,
    name,
    set_mapped_companies,
    certificate_number,
    selected_city,
    selected_capacity,
    entries_per_page,
    page,
  ]);

  return (
    <>
      {companies && users && (
        <>
          {/* Start Modal Area */}
          <Modal closeButton width="85%" open={modal} onClose={() => setModal(false)}>
            <form
              onSubmit={async (e) => {
                e.preventDefault();
                const body = new FormData();
                if (add) {
                  certificates_selected.forEach((c, i) => {
                    body.append("certificate_number[]", e.target[`certificate_number_${i}`].value);
                    body.append("certificate_type[]", c.type);
                  });
                } else {
                  body.append("id", current_company._id);
                }
                if (e.target.valuers.value) {
                  let valuers = [];
                  e.target.valuers.value
                    .replace(/\s/g, "")
                    .split(",")
                    .forEach((v) => {
                      valuers.push(v);
                    });
                  valuers.forEach((v) => body.append("valuers[]", v));
                }
                body.append("name", e.target.name.value);
                body.append("city", e.target.city.value);
                body.append("address", e.target.address.value);
                body.append("mobile_phone", e.target.mobile_phone.value);
                body.append("landline", e.target.landline.value);
                body.append("eik", e.target.eik.value);
                body.append("visible", e.target.visible.value === "false" ? false : true);

                const resp = await fetch(
                  add
                    ? `${process.env.REACT_APP_API_URL}/api/post-company`
                    : `${process.env.REACT_APP_API_URL}/api/put-company`,
                  {
                    method: add ? "POST" : "PUT",
                    body: body,
                    headers: {
                      Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
                    },
                  }
                );
                if (resp.status !== 200) {
                  const error = await resp.json();
                  setError(error.error);
                } else {
                  window.location.reload(false);
                }
              }}
            >
              <Modal.Header>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
                  <Input
                    width={500}
                    name="name"
                    id="name"
                    initialValue={current_company && current_company.name}
                    style={{
                      background: "white",
                      textAlign: "center",
                      marginLeft: 0,
                      marginRight: 0,
                      marginBottom: 10,
                    }}
                  />
                </div>
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
                  <span style={{ fontWeight: "bold" }}>Град:</span>
                  <Input
                    width={500}
                    initialValue={current_company && current_company.city}
                    name="city"
                    id="city"
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
                    name="mobile_phone"
                    id="mobile_phone"
                    initialValue={current_company && current_company.mobile_phone}
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
                    name="landline"
                    id="landline"
                    initialValue={current_company && current_company.landline}
                    style={{
                      background: "white",
                      marginLeft: 0,
                      marginRight: 0,
                      marginBottom: 10,
                    }}
                  />
                </div>
                {add && (
                  <div className="modalResponsive">
                    <span style={{ fontWeight: "bold" }}>Сертификати:</span>
                    <span style={{ display: "flex", flexDirection: "column" }}>
                      {certificates_selected.map((v, i) => (
                        <>
                          <div style={{ marginBottom: "8px" }}>Номер</div>
                          <Input
                            width={500}
                            name={"certificate_number_" + i}
                            id={"certificate_number_" + i}
                            style={{
                              background: "white",
                              textAlign: "center",
                              marginLeft: 0,
                              marginRight: 0,
                              marginBottom: 10,
                            }}
                          />
                          <div style={{ marginTop: "8px", marginBottom: "8px" }}>Вид</div>
                          <Dropdown placement="bottom-left" css={{ width: 500 }}>
                            <Dropdown.Button flat color="warning" css={{ width: 500 }}>
                              {certificates_selected[i]
                                ? certificates_selected[i].type
                                : "Изберете оценителска правоспособност"}
                            </Dropdown.Button>
                            <Dropdown.Menu
                              css={{ width: 500 }}
                              containerCss={{ width: 500 }}
                              items={capacities}
                              selectionMode="single"
                              onSelectionChange={(e) => {
                                let new_capacities = [...certificates_selected];
                                new_capacities[i].type = e.currentKey;
                                set_certificates_selected(new_capacities);
                              }}
                            >
                              {(item) => (
                                <Dropdown.Item key={item.name} css={{ width: 500 }}>
                                  <span style={{ fontSize: 12 }}>{item.name}</span>
                                </Dropdown.Item>
                              )}
                            </Dropdown.Menu>
                          </Dropdown>
                          <div
                            style={{
                              marginTop: "8px",
                              height: "1px",
                              backgroundColor: "gray",
                              width: "100%",
                            }}
                          />
                        </>
                      ))}
                      <div
                        style={{
                          display: "flex",
                          gap: "1rem",
                          marginTop: "1rem",
                        }}
                      >
                        <Button
                          style={{ marginBottom: 10, width: 100 }}
                          color="warning"
                          onPress={() => set_certificates_selected([...certificates_selected, {}])}
                        >
                          Добавете
                        </Button>
                        <Button
                          style={{ marginBottom: 10, width: 100 }}
                          color="error"
                          onPress={() => set_certificates_selected(certificates_selected.slice(0, -1))}
                        >
                          Премахнете
                        </Button>
                      </div>
                    </span>
                  </div>
                )}
                <div className="modalResponsive">
                  <span style={{ fontWeight: "bold" }}>Адрес:</span>
                  <Input
                    width={500}
                    name="address"
                    id="address"
                    initialValue={current_company && current_company.address}
                    style={{
                      background: "white",
                      marginLeft: 0,
                      marginRight: 0,
                      marginBottom: 10,
                    }}
                  />
                </div>
                <div className="modalResponsive">
                  <span style={{ fontWeight: "bold" }}>Булстат:</span>
                  <Input
                    width={500}
                    placeholder={current_company && current_company.eik}
                    name="eik"
                    id="eik"
                    style={{
                      background: "white",
                      marginLeft: 0,
                      marginRight: 0,
                      marginBottom: 10,
                    }}
                  />
                </div>

                <div className="modalResponsive">
                  <span style={{ fontWeight: "bold" }}>Оценители:</span>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: 500,
                    }}
                  >
                    <Input
                      width={500}
                      initialValue={current_company && current_company.valuer_string}
                      name={"valuers"}
                      id={"valuers"}
                      style={{
                        background: "white",
                        marginLeft: 0,
                        marginRight: 0,
                        marginBottom: 10,
                      }}
                    />
                    <span>Въведете номерате на оценителите, разделени със запетайки</span>
                  </div>
                </div>
                <div className="modalResponsive">
                  <span style={{ fontWeight: "bold" }}>Видим в регистъра:</span>
                  <div style={{ width: 500 }}>
                    <Radio.Group color="warning" orientation="horizontal" required name="visible" id="visible">
                      <Radio value="true">Да</Radio>
                      <Radio value="false">Не</Radio>
                    </Radio.Group>
                  </div>
                </div>
              </Modal.Body>
              <Modal.Footer>
                {!add ? (
                  <div style={{ display: "flex", flexDirection: "row", gap: 5 }}>
                    <Button
                      color="warning"
                      onPress={() => {
                        setAddCertificateVisible(true);
                      }}
                    >
                      Добави сертификат
                    </Button>
                    {current_company && current_company.current_valid_certificates.length > 0 && (
                      <Button
                        color="error"
                        onPress={() => {
                          setModal(false);
                          setAdd(false);
                          setVisibleArchive(true);
                        }}
                      >
                        Деактивирай
                      </Button>
                    )}
                  </div>
                ) : (
                  <></>
                )}
                <Button color="success" type="submit">
                  Запази
                </Button>
              </Modal.Footer>
            </form>
          </Modal>
          <Modal closeButton width="85%" open={visibleArchive} onClose={() => setVisibleArchive(false)}>
            <form
              onSubmit={async (e) => {
                e.preventDefault();

                if (!e.target.deactivate_certificate.value) {
                  setError("Изберете сертификат, който да бъде обезсилван!");
                  return;
                }

                const body = new FormData();
                body.append("id", e.target.deactivate_certificate.value);
                if (!e.target.reason.value) {
                  setError("Въведете причина за обезсилване!");
                  return;
                }
                body.append("reason_for_invalidation", e.target.reason.value);

                if (e.target.new_certificate.value) {
                  body.append("certificate_number", e.target.new_certificate.value);
                }

                const resp = await fetch(`${process.env.REACT_APP_API_URL}/api/post-deactivate-certificate`, {
                  method: "POST",
                  body: body,
                  headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
                  },
                });
                if (resp.status !== 200) {
                  const error = await resp.json();
                  setError(error.error);
                  return;
                }
                window.location.reload();
              }}
            >
              <Modal.Header>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h5>Обезсилване на сертификата на: {current_company && current_company.name}</h5>
                  <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
                </div>
              </Modal.Header>
              <Modal.Body
                style={{
                  marginLeft: 15,
                  marginRight: 15,
                  marginTop: 15,
                  marginBottom: 15,
                }}
              >
                <p>Изберете сертификат, който да бъде обезсилван:</p>
                <Radio.Group
                  color="warning"
                  required
                  name="deactivate_certificate"
                  id="deactivate_certificate"
                  style={{ marginTop: 10, marginBottom: 10 }}
                >
                  {current_company &&
                    current_company.current_valid_certificates.map((v, i) => (
                      <Radio value={v._id}>{v.certificate_number}</Radio>
                    ))}
                </Radio.Group>
                <div className="modalResponsive">
                  <span style={{ fontWeight: "bold" }}>Нов:</span>
                  <Input
                    name="new_certificate"
                    id="new_certificate"
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
                    name="reason"
                    id="reason"
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
                <Button color="warning" onClick={() => setVisibleArchive(false)}>
                  Затвори
                </Button>
                <Button color="success" type="submit">
                  Запази
                </Button>
              </Modal.Footer>
            </form>
          </Modal>
          <Modal closeButton width="85%" open={addCertificateVisible} onClose={() => setAddCertificateVisible(false)}>
            <form
              onSubmit={async (e) => {
                e.preventDefault();

                const body = new FormData();
                body.append("id", current_company._id);
                body.append("owner_type", "Company");
                certificates_selected.forEach((v, i) => {
                  body.append("certificate_number[]", e.target[`certificate_number_${i}`].value);
                  body.append("certificate_type[]", v.type);
                });

                const resp = await fetch(`${process.env.REACT_APP_API_URL}/api/post-add-certificate`, {
                  method: "POST",
                  body: body,
                  headers: {
                    Authorization: `Bearer ${JSON.parse(localStorage.getItem("user")).token}`,
                  },
                });
                if (resp.status !== 200) {
                  const error = await resp.json();
                  setError(error.error);
                } else {
                  window.location.reload(false);
                }
              }}
            >
              <Modal.Header>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <h5>Добавяне на сертификата на {current_company && current_company.name}</h5>
                  <p style={{ color: "red", fontWeight: "bold" }}>{error}</p>
                </div>
              </Modal.Header>
              <Modal.Body
                style={{
                  marginLeft: 15,
                  marginRight: 15,
                  marginTop: 15,
                  marginBottom: 15,
                }}
              >
                <span style={{ display: "flex", flexDirection: "column" }}>
                  {certificates_selected.map((v, i) => (
                    <>
                      <div style={{ marginBottom: "8px" }}>Номер</div>
                      <Input
                        width={500}
                        name={"certificate_number_" + i}
                        id={"certificate_number_" + i}
                        style={{
                          background: "white",
                          textAlign: "center",
                          marginLeft: 0,
                          marginRight: 0,
                          marginBottom: 10,
                        }}
                      />
                      <div style={{ marginTop: "8px", marginBottom: "8px" }}>Вид</div>
                      <Dropdown placement="bottom-left" css={{ width: 500 }}>
                        <Dropdown.Button flat color="warning" css={{ width: 500 }}>
                          {certificates_selected[i]
                            ? certificates_selected[i].type
                            : "Изберете оценителска правоспособност"}
                        </Dropdown.Button>
                        <Dropdown.Menu
                          css={{ width: 500 }}
                          containerCss={{ width: 500 }}
                          items={capacities}
                          selectionMode="single"
                          onSelectionChange={(e) => {
                            let new_capacities = [...certificates_selected];
                            new_capacities[i].type = e.currentKey;
                            set_certificates_selected(new_capacities);
                          }}
                        >
                          {(item) => (
                            <Dropdown.Item key={item.name} css={{ width: 500 }}>
                              <span style={{ fontSize: 12 }}>{item.name}</span>
                            </Dropdown.Item>
                          )}
                        </Dropdown.Menu>
                      </Dropdown>
                      <div
                        style={{
                          marginTop: "8px",
                          height: "1px",
                          backgroundColor: "gray",
                          width: "100%",
                        }}
                      />
                    </>
                  ))}
                  <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}>
                    <Button
                      style={{ marginBottom: 10, width: 100 }}
                      color="warning"
                      onPress={() => set_certificates_selected([...certificates_selected, {}])}
                    >
                      Добавете
                    </Button>
                    <Button
                      style={{ marginBottom: 10, width: 100 }}
                      color="error"
                      onPress={() => set_certificates_selected(certificates_selected.slice(0, -1))}
                    >
                      Премахнете
                    </Button>
                  </div>
                </span>
              </Modal.Body>
              <Modal.Footer>
                <Button color="warning" onClick={() => setVisibleArchive(false)}>
                  Затвори
                </Button>
                <Button color="success" type="submit">
                  Запази
                </Button>
              </Modal.Footer>
            </form>
          </Modal>
          {/* End Modal Area */}

          <SEO title="Административен панел" />
          <main className="page-wrapper">
            <HeaderAdmin btnStyle="btn-small round btn-icon" />
            {/* Start  Search Area*/}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 30,
              }}
            >
              <h3 style={{ color: "orange", marginTop: 30 }}>Публичен регистър на независимите оценители</h3>
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
              <br />
              <form className="filter" style={{ display: "flex", marginLeft: 15, gap: 30 }}>
                <div style={{ display: "flex", flexDirection: "column " }}>
                  <Input
                    style={{ background: "white", margin: 0, fontSize: 16 }}
                    size="xl"
                    labelPlaceholder="Име на компанията"
                    value={name}
                    onChange={(e) => set_name(e.target.value)}
                  />

                  <Dropdown placement="bottom-left">
                    <Dropdown.Button flat style={{ marginTop: 30 }} color="warning">
                      {selected_city ? selected_city.name : "Град"}
                    </Dropdown.Button>
                    <Dropdown.Menu
                      items={cities}
                      selectionMode="single"
                      onSelectionChange={(e) => set_selected_city({ name: e.currentKey })}
                    >
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
                      {selected_capacity ? selected_capacity.name : "Оценителска правоспособност"}
                    </Dropdown.Button>
                    <Dropdown.Menu
                      items={capacities}
                      selectionMode="single"
                      onSelectionChange={(e) => set_selected_capacity({ name: e.currentKey })}
                    >
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
                    value={certificate_number}
                    onChange={(e) => set_certificate_number(e.target.value)}
                  />
                </div>
              </form>
              <span style={{ marginTop: 20, marginLeft: 0, fontSize: 12 }}>
                За да редактирате натиснете името на оценителя
              </span>
              <Button
                style={{ width: "20%", marginTop: 15, marginLeft: 10 }}
                color="success"
                onPress={() => {
                  set_current_company(null);
                  set_certificates_selected([]);
                  setAdd(true);
                  setModal(true);
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
                      {entries_per_page}
                    </Dropdown.Button>
                    <Dropdown.Menu
                      color="warning"
                      disallowEmptySelection
                      selectionMode="single"
                      onSelectionChange={(e) => {
                        set_entries_per_page(parseInt(e.currentKey));
                      }}
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
                      <Dropdown.Item key="500">
                        <span style={{ fontSize: 14 }}>500</span>
                      </Dropdown.Item>
                      <Dropdown.Item key="1000">
                        <span style={{ fontSize: 14 }}>1000</span>
                      </Dropdown.Item>
                      <Dropdown.Item key="2000">
                        <span style={{ fontSize: 14 }}>2000</span>
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <div style={{ marginRight: 20 }}>
                    <Pagination
                      total={Math.ceil(companies.results.length / entries_per_page)}
                      initialPage={1}
                      color="warning"
                      size="xl"
                      onChange={(p) => set_page(p)}
                    />
                  </div>
                </div>
              </div>
              <div style={{ marginRight: 30, marginTop: 30 }}>
                <Table
                  css={{
                    height: "auto",
                    minWidth: "100%",
                  }}
                >
                  <Table.Header columns={columnsCompanies}>
                    {(column) => (
                      <Table.Column key={column.key}>
                        <span
                          style={{
                            fontSize: 14,
                            marginLeft: 5,
                            marginRight: 5,
                          }}
                        >
                          {column.label}
                        </span>
                      </Table.Column>
                    )}
                  </Table.Header>
                  <Table.Body items={mapped_companies}>
                    {(item) => (
                      <Table.Row key={item._id}>
                        {(columnKey) => (
                          <Table.Cell>
                            <span
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                set_current_company(item);
                                set_certificates_selected([]);
                                setModal(true);
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
          </main>
        </>
      )}
    </>
  );
};

export default DashboardCompanies;
