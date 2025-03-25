import contactImage from "../assets/contact-image.svg";
import "./Contact.scss";

function Contact() {
  return (
    <section className="contact">
      <img src={contactImage} alt="" />
      <div className="contact-form">
        <div className="contact-form__text">
          <h4>Lorem ipsum dolor sit amet consectetur</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
            faucibus sit scelerisque
          </p>
          <span>*Lorem ipsum dolor sit amet consectetur</span>
        </div>
        <form>
          <input type="text" placeholder="Nome" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Mensagem"></textarea>
          <div></div>
          <button type="submit">Enviar</button>
        </form>
        <div></div>
      </div>
    </section>
  );
}

export default Contact;
