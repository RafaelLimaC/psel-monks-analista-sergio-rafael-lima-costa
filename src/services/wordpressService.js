const BASE_URL = import.meta.env.VITE_API_URL;

/**
 * @param {string} endpoint
 * @param {Object} params
 * @returns {Promise<Object[]>}
 */

export async function fetchFromWordPress(endpoint, params = {}) {
  const url = new URL(`${BASE_URL}/wp/v2/${endpoint}`);

  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  try {
    const response = await fetch(url);

    return await response.json();
  } catch (error) {
    console.error("Erro ao consumir a API do WordPress:", error);
    throw error;
  }
}

// routes
export const fetchNavigation = () =>
  fetchFromWordPress("navegation", {
    _fields: "title,acf",
    acf_format: "standard",
  });

export const fetchProducts = () =>
  fetchFromWordPress("products", {
    _fields: "title,acf",
    acf_format: "standard",
  });

export const fetchGalleries = () =>
  fetchFromWordPress("galleries", {
    _fields: "title,acf",
    acf_format: "standard",
  });

export const fetchLabels = (params = {}) =>
  fetchFromWordPress("label", {
    _fields: "title,acf",
    acf_format: "standard",
    ...params,
  });

export const fetchCards = () =>
  fetchFromWordPress("card", { _fields: "title,acf", acf_format: "standard" });

export const sendContactForm = async (formData) => {
  const url = `${BASE_URL}/contact-form-7/v1/contact-forms/68/feedback`;

  try {
    const response = await fetch(url, {
      method: "POST",
      body: formData,
    });

    return await response.json();
  } catch (error) {
    console.error("Erro ao enviar o formulário de contato:", error);
    throw error;
  }
};
