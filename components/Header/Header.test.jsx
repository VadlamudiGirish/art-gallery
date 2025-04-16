import { render, screen } from "@testing-library/react";
import Header from "@/components/Header/Header";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Header Component", () => {
  it("renders Gallery title for /gallery route", () => {
    useRouter.mockImplementation(() => ({
      pathname: "/gallery",
      asPath: "/gallery",
    }));

    render(<Header />);
    expect(screen.getByText("Gallery")).toBeInTheDocument();
  });

  it("renders Spotlight title for / route", () => {
    useRouter.mockImplementation(() => ({
      pathname: "/",
      asPath: "/",
    }));

    render(<Header />);
    expect(screen.getByText("Spotlight")).toBeInTheDocument();
  });

  it("renders Favorites title for /favorites route", () => {
    useRouter.mockImplementation(() => ({
      pathname: "/favorites",
      asPath: "/favorites",
    }));

    render(<Header />);
    expect(screen.getByText("Favorites")).toBeInTheDocument();
  });

  it("renders default title for unknown routes", () => {
    useRouter.mockImplementation(() => ({
      pathname: "/unknown",
      asPath: "/unknown",
    }));

    render(<Header />);
    expect(screen.getByText("Art Gallery")).toBeInTheDocument();
  });
});
