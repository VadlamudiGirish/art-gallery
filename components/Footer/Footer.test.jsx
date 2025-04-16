import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer/Footer";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

describe("Footer Component", () => {
  const mockRouter = (pathname = "/") => {
    useRouter.mockImplementation(() => ({
      pathname,
      asPath: pathname,
      push: jest.fn(),
    }));
  };

  it("renders all navigation items", () => {
    mockRouter();
    render(<Footer />);

    expect(screen.getByText("Spotlight")).toBeInTheDocument();
    expect(screen.getByText("Gallery")).toBeInTheDocument();
    expect(screen.getByText("Favorites")).toBeInTheDocument();
  });

  it("highlights Spotlight link when on home page", () => {
    mockRouter("/");
    render(<Footer />);

    const spotlightLink = screen.getByText("Spotlight");
    expect(spotlightLink).toHaveClass("bg-blue-600");
    expect(spotlightLink).toHaveClass("text-white");
  });

  it("highlights Gallery link when on gallery page", () => {
    mockRouter("/gallery");
    render(<Footer />);

    const galleryLink = screen.getByText("Gallery");
    expect(galleryLink).toHaveClass("bg-blue-600");
    expect(galleryLink).toHaveClass("text-white");
  });

  it("highlights Gallery link when on nested gallery pages", () => {
    mockRouter("/gallery/artwork-1");
    render(<Footer />);

    const galleryLink = screen.getByText("Gallery");
    expect(galleryLink).toHaveClass("bg-blue-600");
    expect(galleryLink).toHaveClass("text-white");
  });

  it("highlights Favorites link when on favorites page", () => {
    mockRouter("/favorites");
    render(<Footer />);

    const favoritesLink = screen.getByText("Favorites");
    expect(favoritesLink).toHaveClass("bg-blue-600");
    expect(favoritesLink).toHaveClass("text-white");
  });

  it("applies inactive styling to non-active links", () => {
    mockRouter("/");
    render(<Footer />);

    const galleryLink = screen.getByText("Gallery");
    expect(galleryLink).toHaveClass("text-gray-300");
    expect(galleryLink).toHaveClass("hover:bg-gray-800");
    expect(galleryLink).not.toHaveClass("bg-blue-600");
  });
});
