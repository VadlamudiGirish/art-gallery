import { render, screen } from "@testing-library/react";
import CommentList from "./CommentList";
import { format } from "date-fns";

describe("CommentList Component", () => {
  it("renders heading with comment count", () => {
    render(<CommentList comments={[]} />);
    expect(screen.getByText(/Comments \(0\)/)).toBeInTheDocument();
  });

  it("shows a message when there are no comments", () => {
    render(<CommentList comments={[]} />);
    expect(
      screen.getByText(/No comments yet. Be the first to share your thoughts!/i)
    ).toBeInTheDocument();
  });

  it("renders a list of comments when provided", () => {
    const comments = [
      {
        id: "1",
        text: "This is a test comment",
        date: "2024-05-01T10:30:00Z",
      },
      {
        id: "2",
        text: "Another comment",
        date: "2024-05-02T14:45:00Z",
      },
    ];

    render(<CommentList comments={comments} />);

    expect(screen.getByText("Comments (2)")).toBeInTheDocument();
    expect(screen.getByText("This is a test comment")).toBeInTheDocument();
    expect(screen.getByText("Another comment")).toBeInTheDocument();

    expect(
      screen.getByText(
        format(new Date(comments[0].date), "MMM dd, yyyy - h:mm a")
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        format(new Date(comments[1].date), "MMM dd, yyyy - h:mm a")
      )
    ).toBeInTheDocument();
  });
});
