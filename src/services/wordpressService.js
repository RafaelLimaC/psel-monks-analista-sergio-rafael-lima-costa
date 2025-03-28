const BASE_URL = import.meta.env.VITE_API_URL;

/**
 * Função para buscar produtos da API do WordPress.
 * @param {string} endpoint - O endpoint da API (ex: "products").
 * @param {Object} params - Parâmetros adicionais para a requisição.
 * @returns {Promise<Object[]>} - Retorna uma lista de objetos da API.
 */

export async function fetchFromWordPress(endpoint, params = {}) {
  const url = new URL(`${BASE_URL}/${endpoint}`);

  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Erro ao buscar dados: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Erro ao consumir a API do WordPress:", error);
    throw error;
  }
}
