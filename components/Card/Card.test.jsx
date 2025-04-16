import { render, screen } from "@testing-library/react";
import Card from "@/components/Card/Card";

const mockArtPiece = {
  slug: "sample-art",
  name: "Sample Artwork",
  artist: "Test Artist",
  dimensions: { width: 400, height: 300 },
  imageSource: "https://via.placeholder.com/400x300",
  colors: ["#ff0000", "#00ff00", "#0000ff"],
};

describe("Card Component", () => {
  it("renders a single art piece preview correctly", () => {
    render(<Card element={mockArtPiece} elementName="gallery" />);

    expect(screen.getByText("Sample Artwork")).toBeInTheDocument();
    expect(screen.getByText("Test Artist")).toBeInTheDocument();
    expect(screen.getByAltText("Artwork image")).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /favorite|unfavorite/i })
    ).toBeInTheDocument();
  });
});
