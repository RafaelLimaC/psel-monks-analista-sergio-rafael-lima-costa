import contactImage from "../../assets/contact-image.svg";
import "./Contact.scss";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    const formData = new FormData();

    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    formData.append("_wpcf7_unit_tag", "X");

    const reqOptions = {
      method: "POST",
      body: formData, // Usa o FormData como body
    };

    const req = await fetch(
      "https://linen-horse-773831.hostingersite.com/wp-json/contact-form-7/v1/contact-forms/68/feedback",
      reqOptions
    );

    const response = await req.json();
    console.log(response);
    console.log(data);
    reset();
  };

  return (
    <section className="contact" id="contact">
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

        <form className="contact-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="contact-form__inputs">
            <div className="contact-form__input--wrapper">
              <input
                type="text"
                placeholder="Nome*"
                {...register("your-name", { required: true, minLength: 2 })}
              />
              {errors.name && (
                <span className="contact-form__inputs--error">
                  Esse campo é obrigatório
                </span>
              )}
            </div>
            <div className="contact-form__input--wrapper">
              <input
                type="email"
                placeholder="Email*"
                {...register("your-email", { required: true, minLength: 3 })}
              />
              {errors.name && (
                <span className="contact-form__inputs--error">
                  Esse campo é obrigatório
                </span>
              )}
            </div>
            <div className="contact-form__input--wrapper">
              <input
                type="tel"
                placeholder="Telefone"
                {...register("your-tel", { minLength: 8 })}
              />
            </div>
            <div className="contact-form__input--wrapper">
              <input
                type="text"
                placeholder="Empresa"
                {...register("your-company")}
              />
            </div>
          </div>
          <div className="contact-form__security">
            <p>Verificação de segurança</p>
            <div className="contact-form__security--verification">
              <span>
                427<strong>+</strong>628
              </span>{" "}
              =
              <input type="text" placeholder="Resultado*" />
            </div>
          </div>
          <button disabled={!isValid} type="submit">
            Lorem ipsum
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
