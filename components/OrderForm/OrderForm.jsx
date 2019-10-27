const OrderForm = ({ header }) => {
  return (
    <div className="form">
      <section className="form__section">
        { header }
        <div className="section__content form__content-wrapper">
          <form className="form__content">
            <label className="form__name">
              <span className="form__label">Имя</span>
              <input type="text" name="name"/>
            </label>
            <label className="form__email">
              <span className="form__label">Email</span>
              <input type="email" name="email"/>
            </label>
            <label>
              <span className="form__label">Телефон</span>
              <input className="form__phone" type="text" name="phone"/>
            </label>
            <label className="form__message">
              <span className="form__label">Сообщение</span>
              <textarea rows="5"></textarea>
            </label>
            <div className="form__button-container">
              <button>Отправить</button>
              <button>Очистить</button>
            </div>
          </form>
        </div>
      </section>
      <style jsx>{`
        .form__header .section__header-wrapper::before {
          flex-grow: 0;
        }

        .form__content-wrapper {
          background: var(--form-background, #000000);
          width: 100%;
          padding: 50px 0;
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        .form__content {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          grid-template-areas: 
            "name    email   phone" 
            "message message message"
            "buttons buttons buttons";
          width: var(--page-width);
          grid-gap: 10px;
        }

        .form__section {
          display: flex;
          align-items: center;
          flex-direction: column;
        }

        .form__name {
          grid-area: name;
        }

        .form__email {
          grid-area: email;
        }

        .form__phone {
          grid-area: phone;
        }

        .form__message {
          grid-area: message;
        }

        .form__button-container {
          grid-area: buttons
        }

        .form__content input, textarea, button {
          border: 2px solid var(--accent-color);
          padding: 10px;
          font-size: unset;
        }

        .form__content label input, textarea {
          flex-grow: 1;
          font-size: 1.2em;
        }

        .form__content label {
          display: flex;
        }

        .form__label {
          padding: 10px;
          font-weight: bold;
          color: var(--second-color);
          font-size: 1.2em;
        }

        .form__button-container {
          padding-top: 20px;
        }

        .form__button-container button {
          margin-right: 20px;
          font-weight: bold;
          background: var(--second-color);
        }
      `}</style>
    </div>
  )
}

export default OrderForm;