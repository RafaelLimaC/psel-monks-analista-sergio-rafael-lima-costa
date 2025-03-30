import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Gallery from "../components/GallerySection/GallerySection";
import { useGalleries } from "@/hooks/useGalleries";

vi.mock("@/hooks/useGalleries");

describe("GallerySection Component", () => {
  it("renders the main gallery with title, subtitle, and image", () => {
    useGalleries.mockReturnValue({
      galleries: [
        {
          title: { rendered: "Main Gallery Title" },
          acf: {
            subtitle: "Main Gallery Subtitle",
            large_image: "main-image-url.jpg",
          },
        },
      ],
      error: null,
    });

    render(<Gallery />);

    expect(screen.getByText("Main Gallery Title")).toBeInTheDocument();
    expect(screen.getByText("Main Gallery Subtitle")).toBeInTheDocument();
    expect(screen.getByAltText("Main Gallery Title")).toHaveAttribute(
      "src",
      "main-image-url.jpg"
    );
  });

  it("renders fallback text when title or subtitle is unavailable", () => {
    useGalleries.mockReturnValue({
      galleries: [
        {
          title: null,
          acf: {
            subtitle: null,
            large_image: "main-image-url.jpg",
          },
        },
      ],
      error: null,
    });

    render(<Gallery />);

    expect(screen.getByText("Título não disponível")).toBeInTheDocument();
    expect(screen.getByText("Subtítulo não disponível")).toBeInTheDocument();
  });

  it("renders additional gallery images", () => {
    useGalleries.mockReturnValue({
      galleries: [
        {
          title: { rendered: "Main Gallery Title" },
          acf: {
            subtitle: "Main Gallery Subtitle",
            large_image: "main-image-url.jpg",
          },
        },
        {
          title: { rendered: "Second Gallery" },
          acf: { large_image: "second-image-url.jpg" },
        },
        {
          title: { rendered: "Third Gallery" },
          acf: { large_image: "third-image-url.jpg" },
        },
      ],
      error: null,
    });

    render(<Gallery />);

    expect(screen.getByAltText("Second Gallery")).toHaveAttribute(
      "src",
      "second-image-url.jpg"
    );
    expect(screen.getByAltText("Third Gallery")).toHaveAttribute(
      "src",
      "third-image-url.jpg"
    );
  });

  it("handles errors", () => {
    const consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});
    useGalleries.mockReturnValue({
      galleries: [],
      error: "Failed to fetch galleries",
    });

    render(<Gallery />);

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Erro ao carregar galerias:",
      "Failed to fetch galleries"
    );

    consoleErrorSpy.mockRestore();
  });
});
