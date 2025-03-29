import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen } from "@testing-library/react";
import CardsSection from "@/components/CardsSection/CardsSection.jsx";
import { useCards } from "@/hooks/useCards";

vi.mock("@/hooks/useCards", () => ({
  useCards: vi.fn(),
}));

describe("CardsSection component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("render cards fetched from the API", () => {
    const mockCards = [
      {
        title: { rendered: "Card 1" },
        acf: { content: "Content 1", button_text: "Button 1" },
      },
      {
        title: { rendered: "Card 2" },
        acf: { content: "Content 2", button_text: "Button 2" },
      },
    ];

    useCards.mockReturnValue({ cards: mockCards, error: null });

    render(<CardsSection />);

    expect(screen.getByText("Card 1")).toBeInTheDocument();
    expect(screen.getByText("Content 1")).toBeInTheDocument();
    expect(screen.getByText("Button 1")).toBeInTheDocument();

    expect(screen.getByText("Card 2")).toBeInTheDocument();
    expect(screen.getByText("Content 2")).toBeInTheDocument();
    expect(screen.getByText("Button 2")).toBeInTheDocument();
  });

  it("handle API errors", () => {
    const consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});
    useCards.mockReturnValue({ cards: [], error: "API Error" });

    render(<CardsSection />);

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Erro ao carregar os cards:",
      "API Error"
    );
    consoleErrorSpy.mockRestore();
  });

  it("render fallback content when card data is missing", () => {
    const mockCards = [
      {
        title: null,
        acf: { content: null, button_text: null },
      },
    ];

    useCards.mockReturnValue({ cards: mockCards, error: null });

    render(<CardsSection />);

    expect(screen.getByText("Título não disponível")).toBeInTheDocument();
    expect(screen.getByText("Conteúdo não disponível")).toBeInTheDocument();
    expect(
      screen.getByText("Texto do botão não disponível")
    ).toBeInTheDocument();
  });
});
