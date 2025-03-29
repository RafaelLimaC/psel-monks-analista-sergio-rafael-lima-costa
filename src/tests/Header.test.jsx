import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Header from "@/components/Header/Header.jsx";
import { useNavigation } from "@/hooks/useNavigation";

vi.mock("@/hooks/useNavigation", () => ({
  useNavigation: vi.fn(),
}));

describe("Header component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    useNavigation.mockReturnValue({ categories: [], error: null });
  }, []);
  it("render without crashing", () => {
    render(<Header />);

    const logo = screen.getByAltText("Monks Logo");

    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute("alt", "Monks Logo");
  });

  it("display categories fetched from the API on both menus", async () => {
    const mockCategories = [
      { title: { rendered: "Category 1" }, acf: { href: "/category-1" } },
      { title: { rendered: "Category 2" }, acf: { href: "/category-2" } },
      { title: { rendered: "Category 3" }, acf: { href: "/category-3" } },
      { title: { rendered: "Category 4" }, acf: { href: "/category-4" } },
    ];

    useNavigation.mockReturnValue({ categories: mockCategories, error: null });

    render(<Header />);

    expect(screen.getAllByText("Category 1")).toHaveLength(2);
    expect(screen.getAllByText("Category 2")).toHaveLength(2);
    expect(screen.getAllByText("Category 3")).toHaveLength(2);
  });

  it("handle API errors gracefully", () => {
    const consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});
    useNavigation.mockReturnValue({ categories: [], error: "API Error" });

    render(<Header />);

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Erro ao carregar categorias:",
      "API Error"
    );
    consoleErrorSpy.mockRestore();
  });

  it("toggle the mobile menu when the hamburger menu is clicked", () => {
    useNavigation.mockReturnValue({ categories: [], error: null });

    render(<Header />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it("close the mobile menu when a category link is clicked", async () => {
    const mockCategories = [
      { title: { rendered: "Category 1" }, acf: { href: "/category-1" } },
      { title: { rendered: "Category 2" }, acf: { href: "/category-2" } },
      { title: { rendered: "Category 3" }, acf: { href: "/category-3" } },
      { title: { rendered: "Category 4" }, acf: { href: "/category-4" } },
    ];

    useNavigation.mockReturnValue({ categories: mockCategories, error: null });

    render(<Header />);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();

    const categoryLink = await screen.findAllByText("Category 1");
    fireEvent.click(categoryLink[1]);
    expect(checkbox).not.toBeChecked();
  });
});
