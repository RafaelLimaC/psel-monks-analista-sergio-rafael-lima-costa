import { useState } from "react";
import { sendContactForm } from "../services/wordpressService";

export function useContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submitForm = async (data) => {
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    const formData = new FormData();
    Object.keys(data).forEach((key) => {
      formData.append(key, data[key]);
    });

    formData.append("_wpcf7_unit_tag", "X");

    try {
      const response = await sendContactForm(formData);
      setSuccess(true);
      return response;
    } catch (err) {
      setError(err);
      throw err;
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitForm, isSubmitting, error, success };
}
