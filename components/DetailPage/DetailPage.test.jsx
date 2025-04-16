import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/router";
import DetailPage from "@/components/DetailPage/DetailPage";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => <img {...props} />,
}));

jest.mock("../FavoriteButton/FavoriteButton", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="favorite-button" />),
}));

jest.mock("../ColorPalette/ColorPalette", () => ({
  __esModule: true,
  default: jest.fn(() => <div data-testid="color-palette" />),
}));

describe("DetailPage Component", () => {
  const mockElement = {
    slug: "test-art",
    name: "Test Artwork",
    artist: "Test Artist",
    year: "2023",
    genre: "Abstract",
    dimensions: { width: 800, height: 600 },
    imageSource: "https://test.com/image.jpg",
    colors: ["#FF0000", "#00FF00", "#0000FF"],
  };

  const mockPush = jest.fn();

  beforeEach(() => {
    useRouter.mockImplementation(() => ({
      push: mockPush,
    }));

    FavoriteButton.mockClear();
  });

  it("renders all artwork details correctly", () => {
    render(<DetailPage element={mockElement} />);

    expect(screen.getByText("Test Artwork")).toBeInTheDocument();
    expect(screen.getByText("Artist: Test Artist")).toBeInTheDocument();
    expect(screen.getByText("Year: 2023")).toBeInTheDocument();
    expect(screen.getByText("Genre: Abstract")).toBeInTheDocument();
  });

  it("displays the artwork image with correct attributes", () => {
    render(<DetailPage element={mockElement} />);

    const image = screen.getByAltText("Artwork image");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockElement.imageSource);
    expect(image).toHaveAttribute(
      "width",
      mockElement.dimensions.width.toString()
    );
    expect(image).toHaveAttribute(
      "height",
      mockElement.dimensions.height.toString()
    );
  });

  it("renders the ColorPalette component with correct colors", () => {
    render(<DetailPage element={mockElement} />);

    expect(screen.getByTestId("color-palette")).toBeInTheDocument();
  });

  it("renders the FavoriteButton with the correct artPiece", () => {
    render(<DetailPage element={mockElement} />);

    expect(screen.getByTestId("favorite-button")).toBeInTheDocument();
    expect(FavoriteButton).toHaveBeenCalledWith(
      { artPiece: mockElement },
      expect.anything()
    );
  });

  it("navigates back to gallery when back arrow is clicked", async () => {
    render(<DetailPage element={mockElement} />);

    const backArrow = screen.getByTestId("back-to-gallery");

    await userEvent.click(backArrow);

    expect(mockPush).toHaveBeenCalledTimes(1);
    expect(mockPush).toHaveBeenCalledWith("/gallery");
  });

  it("uses fallback image when imageSource is not provided", () => {
    const elementWithoutImage = {
      ...mockElement,
      imageSource: undefined,
    };

    render(<DetailPage element={elementWithoutImage} />);

    const image = screen.getByAltText("Artwork image");
    expect(image).toHaveAttribute("src");
  });
});
