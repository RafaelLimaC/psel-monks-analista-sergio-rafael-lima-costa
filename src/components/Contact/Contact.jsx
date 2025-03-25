import contactImage from "../../assets/contact-image.svg";
import "./Contact.scss";

function Contact() {
  return (
    <section className="contact">
      <img src={contactImage} alt="" />
      <div className="contact-form-wrapper">
        <div className="contact-form__text">
          <h4>Lorem ipsum dolor sit amet consectetur</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
            faucibus sit scelerisque
          </p>
          <span>*Lorem ipsum dolor sit amet consectetur</span>
        </div>
        {/* TODO react hook form - zod */}
        <form className="contact-form">
          <div className="contact-form__inputs">
            <input type="text" placeholder="Categoria*" required />
            <input type="text" placeholder="Categoria*" required />
            <input type="text" placeholder="Categoria" />
            <input type="text" placeholder="Categoria" />
          </div>
          <div className="contact-form__security">
            Verificação de segurança
            <div className="contact-form__security--numbers">
              427 <span>+</span> 628
            </div>
            = <input type="text" placeholder="Resultado*" />
          </div>
          <button type="submit">Lorem ipsum</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
