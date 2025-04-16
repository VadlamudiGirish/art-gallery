import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CommentForm from "./CommentForm";

describe("CommentForm", () => {
  const mockOnSubmit = jest.fn();

  beforeEach(() => {
    mockOnSubmit.mockClear();
  });

  test("renders form with input and submit button", () => {
    render(<CommentForm onSubmit={mockOnSubmit} />);

    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /send/i })).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/share your thoughts/i)
    ).toBeInTheDocument();
  });

  test("updates input value when user types", async () => {
    const user = userEvent.setup();
    render(<CommentForm onSubmit={mockOnSubmit} />);

    const input = screen.getByRole("textbox");
    await user.type(input, "Test comment");

    expect(input).toHaveValue("Test comment");
  });

  test("calls onSubmit with comment text when form is submitted", async () => {
    const user = userEvent.setup();
    render(<CommentForm onSubmit={mockOnSubmit} />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: /send/i });

    await user.type(input, "Test comment");
    await user.click(button);

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith("Test comment");
  });

  test("clears input after successful submission", async () => {
    const user = userEvent.setup();
    render(<CommentForm onSubmit={mockOnSubmit} />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: /send/i });

    await user.type(input, "Test comment");
    await user.click(button);

    expect(input).toHaveValue("");
  });

  test("does not submit empty comment", async () => {
    const user = userEvent.setup();
    render(<CommentForm onSubmit={mockOnSubmit} />);

    const button = screen.getByRole("button", { name: /send/i });
    await user.click(button);

    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  test("does not submit whitespace-only comment", async () => {
    const user = userEvent.setup();
    render(<CommentForm onSubmit={mockOnSubmit} />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button", { name: /send/i });

    await user.type(input, "   ");
    await user.click(button);

    expect(mockOnSubmit).not.toHaveBeenCalled();
  });

  test("submits when pressing enter", async () => {
    const user = userEvent.setup();
    render(<CommentForm onSubmit={mockOnSubmit} />);

    const input = screen.getByRole("textbox");
    await user.type(input, "Test comment{enter}");

    expect(mockOnSubmit).toHaveBeenCalledTimes(1);
    expect(mockOnSubmit).toHaveBeenCalledWith("Test comment");
  });

  test("has proper accessibility attributes", () => {
    render(<CommentForm onSubmit={mockOnSubmit} />);

    const input = screen.getByRole("textbox");
    expect(input).toBeRequired();
    expect(input).toHaveAttribute("type", "text");
  });
});
