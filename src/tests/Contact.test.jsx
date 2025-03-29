import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import Contact from "@/components/Contact/Contact";
import { useContactForm } from "@/hooks/useContactForm";

vi.mock("@/hooks/useContactForm", () => ({
  useContactForm: vi.fn(),
}));

describe("Contact Component", () => {
  const mockSubmitForm = vi.fn();

  beforeEach(() => {
    useContactForm.mockReturnValue({
      submitForm: mockSubmitForm,
    });
  });

  it("renders the contact form", () => {
    render(<Contact />);
    expect(screen.getByPlaceholderText("Nome*")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Email*")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Telefone")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Empresa")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Resultado*")).toBeInTheDocument();
  });

  it("disables the submit button when the form is invalid", () => {
    render(<Contact />);
    const submitButton = screen.getByText("Lorem ipsum");
    expect(submitButton).toBeDisabled();
  });

  it("enables the submit button when the form is valid", async () => {
    render(<Contact />);
    fireEvent.change(screen.getByPlaceholderText("Nome*"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("Email*"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Resultado*"), {
      target: { value: "1234" },
    });

    await waitFor(() => {
      expect(screen.getByText("Lorem ipsum")).not.toBeDisabled();
    });
  });

  it("shows an error when the security verification result is incorrect", async () => {
    render(<Contact />);
    fireEvent.change(screen.getByPlaceholderText("Nome*"), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText("Email*"), {
      target: { value: "john@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Resultado*"), {
      target: { value: "wrong" },
    });

    fireEvent.click(screen.getByText("Lorem ipsum"));

    await waitFor(() => {
      expect(screen.getByPlaceholderText("Resultado*")).toHaveClass("invalid");
    });
  });
});
