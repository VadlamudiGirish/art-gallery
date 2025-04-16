import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FavoriteButton from "@/components/FavoriteButton/FavoriteButton";
import useFavoritesStore from "@/store/favoritesStore";

jest.mock("../../store/favoritesStore", () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe("FavoriteButton Component", () => {
  const mockArtPiece = {
    slug: "test-art",
    name: "Test Art",
    artist: "Test Artist",
  };

  beforeEach(() => {
    useFavoritesStore.mockImplementation(() => ({
      favorites: {},
      toggleFavorite: jest.fn(),
    }));
  });

  it("renders the favorite button with outline heart when not favorited", () => {
    render(<FavoriteButton artPiece={mockArtPiece} />);

    const button = screen.getByRole("button", { name: /favorite/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-gray-200");
    expect(button).toHaveClass("text-gray-800");
  });

  it("renders the favorite button with filled heart when favorited", () => {
    useFavoritesStore.mockReturnValue({
      favorites: { "test-art": mockArtPiece },
      toggleFavorite: jest.fn(),
    });

    render(<FavoriteButton artPiece={mockArtPiece} />);

    const button = screen.getByRole("button", { name: /unfavorite/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveClass("bg-red-600");
    expect(button).toHaveClass("text-white");

    const svg = button.querySelector("svg");
    expect(svg).toHaveAttribute("fill", "currentColor");
  });

  it("calls toggleFavorite when clicked", async () => {
    const mockToggleFavorite = jest.fn();

    useFavoritesStore.mockReturnValue({
      favorites: {},
      toggleFavorite: mockToggleFavorite,
    });

    render(<FavoriteButton artPiece={mockArtPiece} />);
    const user = userEvent.setup();

    const button = screen.getByRole("button", { name: /favorite/i });
    await user.click(button);

    expect(mockToggleFavorite).toHaveBeenCalledTimes(1);
    expect(mockToggleFavorite).toHaveBeenCalledWith(mockArtPiece);
  });

  it("prevents default event behavior when clicked", async () => {
    const mockToggleFavorite = jest.fn();

    useFavoritesStore.mockReturnValue({
      favorites: {},
      toggleFavorite: mockToggleFavorite,
    });

    const originalPreventDefault = jest.fn();
    const mockClickHandler = jest.fn((e) => {
      originalPreventDefault(e);
    });

    render(
      <FavoriteButton artPiece={mockArtPiece} onClick={mockClickHandler} />
    );

    const button = screen.getByRole("button", { name: /favorite/i });

    await userEvent.click(button);

    expect(mockToggleFavorite).toHaveBeenCalledTimes(1);

    expect(mockClickHandler).not.toHaveBeenCalled();
  });

  it("updates from favorite to unfavorite when clicked", async () => {
    const mockToggleFavorite = jest.fn();

    useFavoritesStore.mockReturnValue({
      favorites: {},
      toggleFavorite: mockToggleFavorite,
    });

    const { rerender } = render(<FavoriteButton artPiece={mockArtPiece} />);

    expect(
      screen.getByRole("button", { name: /favorite/i })
    ).toBeInTheDocument();

    const user = userEvent.setup();
    await user.click(screen.getByRole("button", { name: /favorite/i }));

    useFavoritesStore.mockReturnValue({
      favorites: { "test-art": mockArtPiece },
      toggleFavorite: mockToggleFavorite,
    });

    rerender(<FavoriteButton artPiece={mockArtPiece} />);

    expect(
      screen.getByRole("button", { name: /unfavorite/i })
    ).toBeInTheDocument();
  });
});
