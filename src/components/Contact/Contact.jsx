import contactImage from "@/assets/contact-image.svg";
import "./Contact.scss";
import { useForm } from "react-hook-form";
import { useContactForm } from "@/hooks/useContactForm";
import React, { useState } from "react";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const [num1] = useState(123);
  const [num2] = useState(456);
  const [userResult, setUserResult] = useState("");
  const [isSecurityValid, setIsSecurityValid] = useState(false);
  const { submitForm } = useContactForm();

  const validateSecurity = () => {
    const correctResult = num1 + num2;
    setIsSecurityValid(parseInt(userResult, 10) === correctResult);
  };

  const onSubmit = async (data) => {
    validateSecurity();
    if (!isSecurityValid) {
      console.log("O resultado da verificação de segurança está incorreto.");
      return;
    }

    try {
      await submitForm(data);
      reset();
      setUserResult("");
    } catch (err) {
      console.error("Erro ao enviar o formulário:", err);
    }
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
              {errors["your-name"] && (
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
              {errors["your-email"] && (
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
                {num1}
                <strong>+</strong>
                {num2}
              </span>{" "}
              =
              <input
                type="text"
                placeholder="Resultado*"
                value={userResult}
                onChange={(e) => setUserResult(e.target.value)}
              />
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
