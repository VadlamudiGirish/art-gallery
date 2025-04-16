import { render, screen } from "@testing-library/react";
import CardList from "@/components/CardList/CardList";

const mockArtPieces = [
  {
    slug: "sample-art-1",
    name: "Sample Artwork 1",
    artist: "Test Artist 1",
    dimensions: { width: 400, height: 300 },
    imageSource: "https://via.placeholder.com/400x300",
    colors: ["#ff0000", "#00ff00", "#0000ff"],
  },
  {
    slug: "sample-art-2",
    name: "Sample Artwork 2",
    artist: "Test Artist 2",
    dimensions: { width: 500, height: 400 },
    imageSource: "https://via.placeholder.com/500x400",
    colors: ["#ffff00", "#ff00ff", "#00ffff"],
  },
];

describe("CardList Component", () => {
  it("renders a list of art pieces correctly", () => {
    render(<CardList elements={mockArtPieces} elementName="gallery" />);

    mockArtPieces.forEach((artPiece) => {
      expect(screen.getByText(artPiece.name)).toBeInTheDocument();
      expect(screen.getByText(artPiece.artist)).toBeInTheDocument();
      const images = screen.getAllByAltText("Artwork image");

      images.forEach((image) => {
        expect(image).toHaveAttribute(
          "src",
          expect.stringContaining("via.placeholder.com")
        );
      });
    });
  });

  it("renders the correct number of Card components", () => {
    render(<CardList elements={mockArtPieces} elementName="gallery" />);

    const cardTitles = screen.getAllByText((content) =>
      mockArtPieces.some((artPiece) => artPiece.name === content)
    );
    expect(cardTitles.length).toBe(mockArtPieces.length);
  });

  it("handles empty art pieces array gracefully", () => {
    render(<CardList elements={[]} elementName="gallery" />);

    expect(screen.getByText("No art pieces available.")).toBeInTheDocument();
  });
});
