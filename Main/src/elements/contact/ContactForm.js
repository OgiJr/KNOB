import React, { useState } from "react";
import emailjs from "emailjs-com";

const Result = () => {
  return <p className="success-message">Съобщението ви беше изпратено. Очаквайте отговор скоро.</p>;
};

function ContactForm({ props, formStyle }) {
  const [result, showresult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_p4x3hv8", "template_jgfr42f", e.target, "user_jrfTH2e0Ely35ZCVFdT9S");
    e.target.reset();
    showresult(true);
  };

  setTimeout(() => {
    showresult(false);
  }, 5000);

  return (
    <>
      <h1>Контакта форма</h1>
      <form className={`${formStyle}`} action="" onSubmit={sendEmail}>
        <div className="form-group">
          <input type="text" name="fullname" placeholder="Име и фамилия" required />
        </div>

        <div className="form-group">
          <input type="email" name="email" placeholder="Имейл" required />
        </div>

        <div className="form-group">
          <input type="text" name="phone" placeholder="Телефон" required />
        </div>

        <div className="form-group">
          <input type="text" name="subject" placeholder="Град" required />
        </div>
        <div className="form-group">
          <input type="text" name="subject" placeholder="Фирма" required />
        </div>

        <div className="form-group">
          <textarea name="message" placeholder="Запитване" required></textarea>
        </div>

        <div className="form-group">
          <button className="btn-default btn-large">Изпрати</button>
        </div>

        <div className="form-group">{result ? <Result /> : null}</div>
      </form>
    </>
  );
}
export default ContactForm;
