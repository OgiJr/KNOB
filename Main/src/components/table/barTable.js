import React from "react";
import { Modal, Button, Dropdown, Input, Pagination, Table, Row, Card } from "@nextui-org/react";
import "../../assets/scss/table.scss";
import useSWR from "swr";

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
  { name: "Всички" },
  { name: "Недвижими имоти" },
  { name: "Недвижими културни ценности" },
  { name: "Машини и съоражения" },
  { name: "Права на интелектуална и индустриална собственост" },
  { name: "Търговски предприятия и вземания" },
  { name: "Финансови активи и фанансови институции" },
  { name: "Други активи" },
  { name: "Земеделски земи и трайни насъждения" },
  { name: "Поземлени имоти в горски територии" },
];

const capacities_map = {
  "Недвижими имоти": "НН",
  "Недвижими културни ценности": "НКЦ",
  "Машини и съоражения": "МС",
  "Права на интелектуална и индустриална собственост": "ПИИС",
  "Търговски предприятия и вземания": "ТПВ",
  "Финансови активи и фанансови институции": "ФА",
  "Други активи": "ДРУГИ",
  "Земеделски земи и трайни насъждения": "ЗЗ",
  "Поземлени имоти в горски територии": "ЗГ",
};

//Start people variables
const columnsPeople = [
  {
    key: "number",
    label: "№",
  },
  {
    key: "name",
    label: "Име",
  },
  {
    key: "is_member",
    label: "Членство",
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

const columnsInvalidPeople = [
  {
    key: "number",
    label: "№",
  },
  {
    key: "name",
    label: "Име",
  },
  {
    key: "type",
    label: "Тип",
  },
  {
    key: "oldNumber",
    label: "Обезсилен",
  },
  {
    key: "newNumber",
    label: "Нов",
  },
  {
    key: "reason",
    label: "Основание",
  },
];

const columnsInvalidCompanies = [
  {
    key: "number",
    label: "№",
  },
  {
    key: "name",
    label: "Фирма",
  },
  {
    key: "oldNumber",
    label: "Обезсилен",
  },
  {
    key: "newNumber",
    label: "Нов",
  },
  {
    key: "reason",
    label: "Основание",
  },
];

//End invalid variables

const fetcher = (url) => fetch(url).then((res) => res.json());
const BarTable = () => {
  //TODO:
  // city dropdown -> set_city()
  // capacity dropdown -> set_capacity()
  // entries per page dropdown -> set_entries_per_page()

  const [selected_city, set_selected_city] = React.useState(null);
  const [selected_capacity, set_selected_capacity] = React.useState(null);

  const [mapped_users, set_mapped_users] = React.useState([]);
  const [mapped_companies, set_mapped_companies] = React.useState([]);
  const [mapped_invalid_users, set_mapped_invalid_users] = React.useState([]);
  const [mapped_invalid_companies, set_mapped_invalid_companies] = React.useState([]);

  const [visible, setVisible] = React.useState(false);
  const [tableType, setTableType] = React.useState("people");
  const [invalidType, setinvalidType] = React.useState("people");

  const [current_person, set_current_person] = React.useState(null);
  const [current_company, set_current_company] = React.useState(null);

  const [name, set_name] = React.useState("");
  const [certificate_number, set_certificate_number] = React.useState("");

  const [entries_per_page, set_entries_per_page] = React.useState(50);
  const [page, set_page] = React.useState(1);

  const { data: users } = useSWR(`${process.env.REACT_APP_API_URL}/api/get-users`, fetcher);
  const { data: companies } = useSWR(`${process.env.REACT_APP_API_URL}/api/get-companies`, fetcher);
  const { data: invalid_people } = useSWR(
    `${process.env.REACT_APP_API_URL}/api/get-invalid-certificates?owner_type=User`,
    fetcher
  );
  const { data: invalid_companies } = useSWR(
    `${process.env.REACT_APP_API_URL}/api/get-invalid-certificates?owner_type=Company`,
    fetcher
  );

  React.useEffect(() => {
    if (invalid_people) {
      set_mapped_invalid_users(
        invalid_people.results
          .slice((page - 1) * entries_per_page, (page - 1) * entries_per_page + entries_per_page)
          .map((u) => ({
            number: u.number,
            name: `${u.owner.first_name} ${u.owner.middle_name} ${u.owner.last_name}`,
            type: capacities_map[u.certificate_type],
            oldNumber: u.certificate_number,
            newNumber: u.new_certificate ? u.new_certificate.certificate_number : "Няма",
            reason: u.reason_for_invalidation,
          }))
      );
    }
  }, [invalid_people, page, entries_per_page, set_mapped_invalid_users]);

  React.useEffect(() => {
    if (invalid_companies) {
      set_mapped_invalid_companies(
        invalid_companies.results
          .slice((page - 1) * entries_per_page, (page - 1) * entries_per_page + entries_per_page)
          .map((c) => ({
            numer: c.number,
            name: c.owner.name,
            type: capacities_map[c.certificate_type],
            oldNumber: c.certificate_number,
            newNumber: c.new_certificate ? c.new_certificate.certificate_number : "Няма",
            reason: c.reason_for_invalidation,
          }))
      );
    }
  }, [invalid_companies, page, entries_per_page, set_mapped_invalid_companies]);

  React.useEffect(() => {
    if (users) {
      set_mapped_users(
        users.results
          .slice((page - 1) * entries_per_page, (page - 1) * entries_per_page + entries_per_page)
          .filter((u) => {
            if (name) {
              const full_name = `${u.first_name} ${u.middle_name} ${u.last_name}`;
              console.log(full_name, name, full_name.includes(name));
              if (!full_name.includes(name)) {
                return false;
              }
            }

            if (certificate_number) {
              if (!u.current_valid_certificate) {
                return false;
              }
              if (u.current_valid_certificate.certificate_number !== certificate_number) {
                return false;
              }
            }

            if (selected_city) {
              if (selected_city.name !== "Всички" && u.city !== selected_city.name) {
                return false;
              }
            }

            if (selected_capacity) {
              if (selected_capacity.name !== "Всички" && u.capacity.value !== selected_capacity.name) {
                return false;
              }
            }
            return true;
          })
          .map((user) => ({
            name: `${user.first_name} ${user.middle_name} ${user.last_name}`,
            is_member: user.is_knob_member && user.current_valid_certificate ? "Да" : "Не",
            ...user,
          }))
      );
    } else {
      set_mapped_users([]);
    }
  }, [users, set_mapped_users, name, certificate_number, selected_city, selected_capacity, entries_per_page, page]);

  React.useEffect(() => {
    if (companies) {
      set_mapped_companies(
        companies.results
          .slice((page - 1) * entries_per_page, (page - 1) * entries_per_page + entries_per_page)
          .filter((c) => {
            if (name) {
              if (!c.name.includes(name)) {
                return false;
              }
            }

            if (certificate_number) {
              if (!c.current_valid_certificate) {
                return false;
              }
              if (c.current_valid_certificate.certificate_number !== certificate_number) {
                return false;
              }
            }

            if (selected_city) {
              if (selected_city.name !== "Всички" && c.city !== selected_city.name) {
                return false;
              }
            }

            if (selected_capacity) {
              if (selected_capacity.name !== "Всички" && c.capacity.value !== selected_capacity.name) {
                return false;
              }
            }
            return true;
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
      {users && companies && (
        <>
          {/* Start Modal Area */}
          {tableType === "people" ? (
            current_person ? (
              <Modal closeButton width="85%" open={visible} onClose={() => setVisible(false)}>
                <Modal.Header>
                  <h5>{current_person.name}</h5>
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
                    <span style={{ fontWeight: "bold" }}>Оценителска правоспособност:</span>
                    {current_person.capacity ? current_person.capacity.map((c) => <>&nbsp;{c.value}</>) : "Няма"}
                    {console.log(current_person)}
                  </div>
                  <div className="modalResponsive">
                    <span style={{ fontWeight: "bold" }}>Членува в КНОБ:</span>
                    {current_person.is_member}
                  </div>
                  <div className="modalResponsive">
                    <span style={{ fontWeight: "bold" }}>Сертификати номера:</span>
                    {current_person.current_valid_certificate
                      ? current_person.current_valid_certificate.certificate_number
                      : "Няма"}
                  </div>
                  <div className="modalResponsive">
                    <span style={{ fontWeight: "bold" }}>Адрес:</span>
                    {current_person.address ? current_person.address : "Няма"}
                  </div>
                  <div className="modalResponsive">
                    <span style={{ fontWeight: "bold" }}>Телефон:</span>
                    {current_person.landline ? current_person.landline : "Няма"}
                  </div>
                  <div className="modalResponsive">
                    <span style={{ fontWeight: "bold" }}>Мобилен:</span>
                    {current_person.mobile_phone ? current_person.mobile_phone : "Няма"}
                  </div>
                  <div className="modalResponsive">
                    <span style={{ fontWeight: "bold" }}>Специалност:</span>
                    {current_person.speciality ? current_person.speciality : "Няма"}
                  </div>
                  <div className="modalResponsive">
                    <span style={{ fontWeight: "bold" }}>Стаж:</span>
                    {current_person.expirience ? current_person.expirience : "Няма"}
                  </div>
                  <div className="modalResponsive">
                    <span style={{ fontWeight: "bold" }}>Образование:</span>
                    {current_person.education ? current_person.education : "Няма"}
                  </div>
                </Modal.Body>
              </Modal>
            ) : (
              <> </>
            )
          ) : current_company ? (
            <Modal closeButton width="85%" open={visible} onClose={() => setVisible(false)}>
              <Modal.Header>
                <h5>{current_company.name}</h5>
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
                  <span style={{ fontWeight: "bold" }}>Оценителска правоспособност:</span>
                  {current_company.capacity.value ? current_company.capacity.value : "Няма"}
                </div>
                <div className="modalResponsive">
                  <span style={{ fontWeight: "bold" }}>Сертификат номер:</span>
                  {current_company.current_valid_certificate
                    ? current_company.current_valid_certificate.certificate_number
                    : "Няма"}
                </div>
                <div className="modalResponsive">
                  <span style={{ fontWeight: "bold" }}>ЕИК / Булстат:</span>
                  {current_company.eik ? current_company.eik : "Няма"}
                </div>
                <div className="modalResponsive">
                  <span style={{ fontWeight: "bold" }}>Адрес на управление:</span>
                  {current_company.address ? current_company.address : "Няма"}
                </div>
                <div className="modalResponsive">
                  <span style={{ fontWeight: "bold" }}>Мобилен:</span>
                  {current_company.mobile_phone}
                </div>
                <Row justify="space-between">
                  <span style={{ fontWeight: "bold", fontSize: 24 }}>Оценители:</span>
                </Row>
                {current_company.valuers.map((valuer) => (
                  <>
                    <Row justify="space-between">
                      <span style={{ fontWeight: "bold", color: "orange", fontSize: 20 }}>
                        {valuer.first_name} {valuer.middle_name} {valuer.last_name}
                      </span>
                    </Row>
                    <div className="modalResponsive">
                      <span style={{ fontWeight: "bold" }}>Правоспособности: </span>
                      <span style={{ marginLeft: 12 }}>{valuer.capacity.value ? valuer.capacity.value : "Няма"}</span>
                    </div>
                    <div className="modalResponsive" style={{}}>
                      <span style={{ fontWeight: "bold" }}>Сертификати №: </span>
                      <span style={{ marginLeft: 12 }}>
                        {valuer.current_valid_certificate
                          ? valuer.current_valid_certificate.certificate_number
                          : "Няма"}
                      </span>
                    </div>
                  </>
                ))}
              </Modal.Body>
            </Modal>
          ) : (
            <> </>
          )}
          {/* End Modal Area */}

          {/* Start  Search Area*/}
          <div style={{ display: "flex", flexDirection: "column", marginLeft: 30 }}>
            <h3 style={{ color: "orange", marginTop: 30 }}>Публичен регистър на независимите оценители</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "40rem" }}>
              <Button
                style={{
                  fontSize: 14,
                  height: 30,
                  marginRight: 60,
                  marginLeft: 30,
                }}
                color="warning"
                onPress={() => {
                  setTableType("people");
                  set_name("");
                  set_certificate_number("");
                  set_selected_capacity(null);
                  set_certificate_number("");
                  set_selected_city(null);
                }}
              >
                Физически лица
              </Button>
              <Button
                style={{
                  fontSize: 14,
                  height: 30,
                  marginRight: 60,
                  marginLeft: 30,
                }}
                color="warning"
                onPress={() => {
                  setTableType("companies");
                  set_name("");
                  set_certificate_number("");
                  set_selected_capacity(null);
                  set_certificate_number("");
                  set_selected_city(null);
                }}
              >
                Юридически лица
              </Button>
              <Button
                style={{
                  fontSize: 14,
                  height: 30,
                  marginRight: 60,
                  marginLeft: 30,
                }}
                color="warning"
                onPress={() => setTableType("invalid")}
              >
                Обезсилени сертификати
              </Button>
            </div>
            {tableType !== "invalid" ? (
              <>
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
                <form className="filter" style={{ display: "flex", marginLeft: 15, gap: 30 }}>
                  <div style={{ display: "flex", flexDirection: "column " }}>
                    {tableType === "people" ? (
                      <Input
                        style={{ background: "white", margin: 0, fontSize: 16 }}
                        size="xl"
                        labelPlaceholder="Име, презиме и фамилия"
                        value={name}
                        onChange={(e) => set_name(e.target.value)}
                      />
                    ) : (
                      <Input
                        style={{ background: "white", margin: 0, fontSize: 16 }}
                        size="xl"
                        labelPlaceholder="Фирма"
                        value={name}
                        onChange={(e) => set_name(e.target.value)}
                      />
                    )}
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
              </>
            ) : (
              <div style={{ marginTop: 30, marginRight: 30, marginBottom: 30 }}>
                <Card isHoverable isPressable>
                  <Card.Body
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 30,
                      fontSize: 13,
                    }}
                  >
                    <div
                      className="guide"
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        marginLeft: 10,
                        marginRight: 10,
                      }}
                    >
                      <span style={{ display: "flex", flex: 1 }}>НИ - недвижими имоти</span>
                      <span style={{ display: "flex", flex: 1 }}>МС - машини и съоръжения</span>
                      <span style={{ display: "flex", flex: 1 }}>
                        ПИИС - права на интелектуалната и индустриалната собственост
                      </span>
                    </div>
                    <div
                      className="guide"
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        marginLeft: 10,
                        marginRight: 10,
                      }}
                    >
                      <span style={{ display: "flex", flex: 1 }}>ТПВ - търговски предприятия и вземания </span>
                      <span style={{ display: "flex", flex: 1 }}>ФА - финансови активи и финансови институции </span>
                      <span style={{ display: "flex", flex: 1 }}>ДРУГИ - други активи</span>
                    </div>
                    <div
                      className="guide"
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        marginLeft: 10,
                        marginRight: 10,
                      }}
                    >
                      <span style={{ display: "flex", flex: 1 }}>ЗЗ - земеделски земи и трайни насаждения </span>
                      <span style={{ display: "flex", flex: 1 }}>ЗГ - поземлени имоти в горски територии</span>
                      <div style={{ display: "flex", flex: 1 }}></div>
                    </div>
                  </Card.Body>
                </Card>
                <Button.Group color="warning" style={{ marginTop: 20 }}>
                  <Button style={{ fontSize: 12 }} onPress={() => setinvalidType("people")}>
                    Физически лица
                  </Button>
                  <Button style={{ fontSize: 12 }} onPress={() => setinvalidType("companies")}>
                    Юридически лица
                  </Button>
                </Button.Group>
              </div>
            )}
            {tableType !== "invalid" && (
              <span style={{ marginTop: 20, marginLeft: 0, fontSize: 12 }}>
                За подробна информация натиснете името на оценителя
              </span>
            )}
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
                  {tableType === "people" ? (
                    <Pagination
                      total={Math.ceil(users.results.length / entries_per_page)}
                      initialPage={1}
                      color="warning"
                      size="xl"
                      onChange={(p) => set_page(p)}
                    />
                  ) : (
                    <Pagination
                      total={Math.ceil(companies.results.length / entries_per_page)}
                      initialPage={1}
                      color="warning"
                      size="xl"
                      onChange={(p) => set_page(p)}
                    />
                  )}
                </div>
              </div>
            </div>
            <div style={{ marginRight: 30, marginTop: 30 }}>
              {tableType === "people" ? (
                <Table
                  css={{
                    height: "auto",
                    minWidth: "100%",
                  }}
                >
                  <Table.Header columns={columnsPeople}>
                    {(column) => (
                      <Table.Column key={column.key}>
                        <span style={{ fontSize: 14, marginLeft: 5, marginRight: 5 }}>{column.label}</span>
                      </Table.Column>
                    )}
                  </Table.Header>
                  <Table.Body items={mapped_users}>
                    {(item) => (
                      <Table.Row key={item._id}>
                        {(columnKey) => (
                          <Table.Cell>
                            <span
                              style={{ cursor: "pointer" }}
                              onClick={() => {
                                set_current_person(item);
                                setVisible(true);
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
              ) : tableType === "companies" ? (
                <Table
                  css={{
                    height: "auto",
                    minWidth: "100%",
                  }}
                >
                  <Table.Header columns={columnsCompanies}>
                    {(column) => (
                      <Table.Column key={column.key}>
                        <span style={{ fontSize: 14 }}>{column.label}</span>
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
                                setVisible(true);
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
              ) : invalidType === "people" ? (
                <Table
                  css={{
                    height: "auto",
                    minWidth: "100%",
                  }}
                >
                  <Table.Header columns={columnsInvalidPeople}>
                    {(column) => (
                      <Table.Column key={column.key}>
                        <span style={{ fontSize: 14 }}>{column.label}</span>
                      </Table.Column>
                    )}
                  </Table.Header>
                  <Table.Body items={mapped_invalid_users}>
                    {(item) => (
                      <Table.Row key={item.number}>
                        {(columnKey) => (
                          <Table.Cell>
                            <span
                              style={{
                                color: "black",
                                fontSize: 14,
                                fontWeight: "normal",
                              }}
                            >
                              {item[columnKey]}
                            </span>
                          </Table.Cell>
                        )}
                      </Table.Row>
                    )}
                  </Table.Body>
                </Table>
              ) : (
                <Table
                  css={{
                    height: "auto",
                    minWidth: "100%",
                  }}
                >
                  <Table.Header columns={columnsInvalidCompanies}>
                    {(column) => (
                      <Table.Column key={column.key}>
                        <span style={{ fontSize: 14 }}>{column.label}</span>
                      </Table.Column>
                    )}
                  </Table.Header>
                  <Table.Body items={mapped_invalid_companies}>
                    {(item) => (
                      <Table.Row key={item.key}>
                        {(columnKey) => (
                          <Table.Cell>
                            <span
                              style={{
                                color: "black",
                                fontSize: 13,
                                fontWeight: "normal",
                              }}
                            >
                              {item[columnKey]}
                            </span>
                          </Table.Cell>
                        )}
                      </Table.Row>
                    )}
                  </Table.Body>
                </Table>
              )}
            </div>
          </div>
          {/* End Search Area */}
        </>
      )}
    </>
  );
};

export default BarTable;
