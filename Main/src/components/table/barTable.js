import React from "react";
import { Modal, Button, Dropdown, Input, Pagination, Table, Row, Card } from "@nextui-org/react";
import "../../assets/scss/table.scss";

const cities = [
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
  { name: "Машини и съоражения" },
  { name: "Права на интелектуална и индустриална собственост" },
  { name: "Търговски предприятия и вземания" },
  { name: "Финансови активи и фанансови институции" },
  { name: "Други активи" },
  { name: "Земеделски земи и трайни насъждения" },
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
// const rowsPeople = [
//   {
//     key: "1",
//     id: "1",
//     name: "Атанас Иванов Димов",
//     member: "Да",
//     city: "Ямбол",
//     mobile: "0898634582",
//     phone: "046663637",
//     capacity: "Поземлени имоти в горски територии",
//     certificateNumber: "820100133 (6.2.2012 г.)",
//     address: "Ямбол 8600, ул. Христо Смирненски",
//     speciality: "Горско стопанство",
//     expirience: "ЗГ-1999",
//     education: "висше(ВЛТИ-София)",
//   },
//   {
//     key: "2",
//     id: "2",
//     name: "Иван Димитров Димов",
//     member: "Да",
//     city: "Бургас",
//     mobile: "0888276526",
//     phone: "",
//     capacity:
//       "Земеделски земи и трайни насаждения, Машини и съоръжения, Недвижими имоти, Търговски предприятия и вземания",
//     certificateNumber:
//       "810100079 (30.12.2010 г.) , 300100303 (14.12.2009 г.) , 100100786 (14.12.2009 г.) , 500100271 (14.12.2009 г.)",
//     address: "Бургас 8001, ж.к. Братя Миладинови",
//     speciality: "Счетоводство и контрол",
//     expirience: "НИ-2005 МС-2005 ТП-2008 ЗЗ-2009",
//     education: "висше (БСУ - Бургас)",
//   },
// ];
//End people variables

//Start company variables
const columnsCompanies = [
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
const rowsCompanies = [
  {
    key: "1",
    id: "1",
    company: "АБАКУС КОНСУЛТИНГ ЕООД",
    city: "София",
    mobile: "0888289007",
    phone: "",
    capacityCompany: "Недвижими имоти",
    certificateNumberCompany: "900100223 (07.10.2016 г.)",
    bulstat: "203468650",
    address: "София 1415, ж.к. Драгалевци ул.Момино венче",
    speciality: "Горско стопанство",
    name: "Галина Йорданова Зоин",
    capacityPerson: "Недвижими имоти",
    certificatePerson: "100102176 (17.11.2014 г.)",
  },
];
//End company variables

//Start invalid variables
const columnsInvalidPeople = [
  {
    key: "id",
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
const rowsInvalidPeople = [
  {
    key: "1",
    id: "1",
    name: "Лили Георгиева Маринова",
    type: "НИ",
    oldNumber: "100101146(14.12.2009)",
    newNumber: "101101146(22.12.2010)",
    reason: "Смяна на фамилията",
  },
];

const columnsInvalidCompanies = [
  {
    key: "id",
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
const rowsInvalidCompanies = [
  {
    key: "1",
    id: "1",
    name: "АДВАНС АДРЕС ЕКСПЕРТНИ ОЦЕНКИ ЕООД",
    oldNumber: "900300023(20.07.2010)",
    newNumber: "901400023(6.07.2011)",
    reason: "Промяна в специализирания състав на дружеството и добавяне на нова правоспособност",
  },
];

//End invalid variables

const BarTable = (users, companies) => {
  const [selected, setSelected] = React.useState(new Set(["50"]));
  const [visible, setVisible] = React.useState(false);
  const [tableType, setTableType] = React.useState("people");
  const [invalidType, setinvalidType] = React.useState("people");

  //Start people variables
  const [name, setName] = React.useState("");
  const [capacity, setCapacity] = React.useState(new Set([""]));
  const [address, setAddress] = React.useState(new Set([""]));
  const [certificateNumber, setCertificateNumber] = React.useState(new Set([""]));
  const [member, setMember] = React.useState(new Set([""]));
  const [mobile, setMobile] = React.useState(new Set([""]));
  const [phone, setPhone] = React.useState(new Set([""]));
  const [speciality, setSpeciality] = React.useState(new Set([""]));
  const [expirience, setExperience] = React.useState(new Set([""]));
  const [education, setEducation] = React.useState(new Set([""]));
  //End people variables

  //Start companies variables
  const [companyName, setCompanyName] = React.useState("");
  const [companyCapacity, setCompanyCapacity] = React.useState("");
  const [companyCertificate, setCompanyCertificate] = React.useState("");
  const [bulstat, setBulstat] = React.useState("");
  //End companies variables

  console.log(users.users)
  var rowsPeople = users.users.map((item) => (
    {
      key: item._id,
      id: item.number,
      name: item.first_name + " " + item.middle_name + " " + item.last_name,
      member: item.is_knob_member? "Да" : "Не",
      city: item.city,
      mobile: item.mobile_phone,
      phone: item.phone? item.phone : "",
      capacity: "Поземлени имоти в горски територии",
      certificateNumber: "820100133 (6.2.2012 г.)",
      address: item.address,
      speciality: "Горско стопанство",
      expirience: "ЗГ-1999",
      education: "висше(ВЛТИ-София)",
    }
  )
  );
  function returnName(person){
    return person.name;
  }
  function returnCapacity(person){
    return person.capacity;
  }
  function returnCertificate(person){
    return person.certificateNumber;
  }
  var rowsCompanies = users.companies.results.map((item) => (
    {
      key: item._id,
      id: item.number,
      company: item.name,
      city: item.city,
      mobile: item.mobile,
      phone: item.phone?item.phone:"",
      capacityCompany: "Недвижими имоти",
      certificateNumberCompany: "900100223 (07.10.2016 г.)",
      bulstat: item.eik,
      address: item.address,
      speciality: "Горско стопанство",
      name: returnName(rowsPeople.find(person => person.key === "63b855cb8292297b36cdecba")),
      capacityPerson: returnCapacity(rowsPeople.find(person => person.key === "63b855cb8292297b36cdecba")),
      certificatePerson: returnCertificate(rowsPeople.find(person => person.key === "63b855cb8292297b36cdecba")),
    }
  ));
  const selectedValue = React.useMemo(() => Array.from(selected).join(", ").replaceAll("_", " "), [selected]);
  
  return (
    <>
      {/* Start Modal Area */}
      {tableType === "people" ? (
        <Modal closeButton width="85%" open={visible} onClose={() => setVisible(false)}>
          <Modal.Header>
            <h5>{name}</h5>
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
              {capacity}
            </div>
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>Членува в КНОБ:</span>
              {member}
            </div>
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>Сертификати номера:</span>
              {certificateNumber}
            </div>
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>Адрес:</span>
              {address}
            </div>
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>Телефон:</span>
              {phone}
            </div>
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>Мобилен:</span>
              {mobile}
            </div>
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>Специалност:</span>
              {speciality}
            </div>
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>Стаж:</span>
              {expirience}
            </div>
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>Образование:</span>
              {education}
            </div>
          </Modal.Body>
        </Modal>
      ) : (
        <Modal closeButton width="85%" open={visible} onClose={() => setVisible(false)}>
          <Modal.Header>
            <h5>{companyName}</h5>
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
              {companyCapacity}
            </div>
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>Сертификат номер:</span>
              {companyCertificate}
            </div>
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>ЕИК / Булстат:</span>
              {bulstat}
            </div>
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>Адрес на управление:</span>
              {address}
            </div>
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>Мобилен:</span>
              {mobile}
            </div>
            <Row justify="space-between">
              <span style={{ fontWeight: "bold", fontSize: 24 }}>Оценители:</span>
            </Row>
            <Row justify="space-between">
              <span style={{ fontWeight: "bold", color: "orange", fontSize: 20 }}>{name}</span>
            </Row>
            <div className="modalResponsive">
              <span style={{ fontWeight: "bold" }}>Правоспособности: </span>
              <span style={{ marginLeft: 12 }}>{capacity}</span>
            </div>
            <div className="modalResponsive" style={{}}>
              <span style={{ fontWeight: "bold" }}>Сертификати №, дата: </span>
              <span style={{ marginLeft: 12 }}>{certificateNumber}</span>
            </div>
          </Modal.Body>
        </Modal>
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
            onPress={() => setTableType("people")}
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
            onPress={() => setTableType("companies")}
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
                  />
                ) : (
                  <Input style={{ background: "white", margin: 0, fontSize: 16 }} size="xl" labelPlaceholder="Фирма" />
                )}
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
                <Button style={{ fontSize: 14, height: 30 }} type="submit" color="warning">
                  Покажи
                </Button>
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
                  <span style={{ display: "flex", flex: 1 }}>НИ-недвижими имоти</span>
                  <span style={{ display: "flex", flex: 1 }}>МС-машини и съоръжения</span>
                  <span style={{ display: "flex", flex: 1 }}>
                    ПИИС-права на интелектуалната и индустриалната собственост
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
                  <span style={{ display: "flex", flex: 1 }}>ТПВ-търговски предприятия и вземания </span>
                  <span style={{ display: "flex", flex: 1 }}>ФА-финансови активи и финансови институции </span>
                  <span style={{ display: "flex", flex: 1 }}>ДРУГИ-други активи</span>
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
                  <span style={{ display: "flex", flex: 1 }}>ЗЗ-земеделски земи и трайни насаждения </span>
                  <span style={{ display: "flex", flex: 1 }}>ЗГ-поземлени имоти в горски територии</span>
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
        {tableType !== "invalid" ? (
          <span style={{ marginTop: 20, marginLeft: 0, fontSize: 12 }}>
            За подробна информация натиснете името на оценителя
          </span>
        ) : (
          <></>
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
              <Pagination total={20} initialPage={1} color="warning" size="xl" />
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
              <Table.Body items={rowsCompanies}>
                {(item) => (
                  <Table.Row key={item.key}>
                    {(columnKey) => (
                      <Table.Cell>
                        <span
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setCompanyCapacity(item.capacityCompany);
                            setCompanyName(item.company);
                            setCompanyCertificate(item.certificateNumberCompany);
                            setBulstat(item.bulstat);
                            setAddress(item.address);
                            setMobile(item.mobile);
                            setName(item.name);
                            setCapacity(item.capacityPerson);
                            setCertificateNumber(item.certificatePerson);
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
              <Table.Body items={rowsInvalidPeople}>
                {(item) => (
                  <Table.Row key={item.key}>
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
              <Table.Body items={rowsInvalidCompanies}>
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
  );
};

export default BarTable;
