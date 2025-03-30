import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Card from "@/components/CardsSection/Card.jsx";

describe("Card component", () => {
  it("renders without crashing", () => {
    render(
      <Card
        title="Test Title"
        content="Test Content"
        buttonText="Test Button"
      />
    );

    const title = screen.getByText("Test Title");
    const content = screen.getByText("Test Content");
    const button = screen.getByText("Test Button");

    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it("renders fallback content when card data is missing", () => {
    render(<Card title={null} content={null} buttonText={null} />);

    const title = screen.queryByText(/Test Title/i);
    const content = screen.queryByText(/Test Content/i);
    const button = screen.queryByText(/Test Button/i);

    expect(title).not.toBeInTheDocument();
    expect(content).not.toBeInTheDocument();
    expect(button).not.toBeInTheDocument();
  });
});
