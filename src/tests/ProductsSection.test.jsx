import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import ProductsSection from "@/components/ProductsSection/ProductsSection.jsx";
import { useProducts } from "@/hooks/useProducts";

vi.mock("@/hooks/useProducts", () => ({
  useProducts: vi.fn(),
}));

describe("ProductsSection component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders products fetched from the API", () => {
    const mockProducts = [
      {
        title: { rendered: "Product 1" },
        acf: {
          subtitle: "Subtitle 1",
          large_image: "image1.jpg",
        },
      },
      {
        title: { rendered: "Product 2" },
        acf: {
          subtitle: "Subtitle 2",
          large_image: "image2.jpg",
        },
      },
    ];

    useProducts.mockReturnValue({ products: mockProducts, error: null });

    render(<ProductsSection />);

    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Subtitle 1")).toBeInTheDocument();
    expect(screen.getByAltText("Product 1")).toHaveAttribute(
      "src",
      "image1.jpg"
    );

    expect(screen.getByText("Product 2")).toBeInTheDocument();
    expect(screen.getByText("Subtitle 2")).toBeInTheDocument();
    expect(screen.getByAltText("Product 2")).toHaveAttribute(
      "src",
      "image2.jpg"
    );
  });

  it("handle API errors", () => {
    const consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});
    useProducts.mockReturnValue({ products: [], error: "API Error" });

    render(<ProductsSection />);

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Erro ao carregar os produtos:",
      "API Error"
    );
    consoleErrorSpy.mockRestore();
  });

  it("renders fallback content when product data is missing", () => {
    const mockProducts = [
      {
        title: null,
        acf: {
          subtitle: null,
          large_image: null,
        },
      },
    ];

    useProducts.mockReturnValue({ products: mockProducts, error: null });

    render(<ProductsSection />);

    expect(screen.getByText("Título não disponível")).toBeInTheDocument();
    expect(screen.getByText("Subtítulo não disponível")).toBeInTheDocument();
    expect(screen.getByAltText("Título não disponível")).toHaveAttribute(
      "src",
      "URL da imagem não disponível"
    );
  });
});
