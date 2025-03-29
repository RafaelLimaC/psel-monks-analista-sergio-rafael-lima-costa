import contactImage from "@/assets/contact-image.svg";
import "./Contact.scss";
import { useForm } from "react-hook-form";
import { useContactForm } from "@/hooks/useContactForm";
import React, { useState, useEffect } from "react";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    mode: "onBlur",
  });

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userResult, setUserResult] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);

  const { submitForm } = useContactForm();

  const generateRandomNumbers = () => {
    setNum1(Math.floor(Math.random() * 900) + 100);
    setNum2(Math.floor(Math.random() * 900) + 100);
  };

  useEffect(() => {
    generateRandomNumbers();
  }, []);

  useEffect(() => {
    const correctResult = num1 + num2;
    if (userResult === "") {
      setIsInvalid(false);
    } else if (parseInt(userResult, 10) !== correctResult) {
      setIsInvalid(true);
    } else {
      setIsInvalid(false);
    }
  }, [userResult, num1, num2]);

  const onSubmit = async (data) => {
    const correctResult = num1 + num2;

    if (parseInt(userResult, 10) !== correctResult) {
      setIsInvalid(true);
      return;
    }

    setIsInvalid(false);

    try {
      await submitForm(data);
      reset();
      setUserResult("");
      generateRandomNumbers();
    } catch (err) {
      console.error("Erro ao enviar o formulário:", err);
    }
  };

  return (
    <section className="contact" id="contact">
      <img src={contactImage} alt="Entre em contato" />
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
                className={isInvalid ? "invalid" : ""}
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
