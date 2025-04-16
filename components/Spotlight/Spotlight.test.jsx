import { render, screen } from "@testing-library/react";
import Spotlight from "@/components/Spotlight/Spotlight";

const mockArtPiece = {
  slug: "sample-art",
  name: "Sample Artwork",
  artist: "Test Artist",
  dimensions: { width: 400, height: 300 },
  imageSource: "https://via.placeholder.com/400x300",
  colors: ["#ff0000", "#00ff00", "#0000ff"],
};

describe("Spotlight Component", () => {
  it("renders art piece preview correctly", () => {
    render(<Spotlight element={mockArtPiece} />);

    // Check that the title and artist are rendered.
    expect(screen.getByText("Sample Artwork")).toBeInTheDocument();
    expect(screen.getByText("Test Artist")).toBeInTheDocument();

    // Check that the image is rendered and verify the transformed src attribute.
    const imageEl = screen.getByAltText("Artwork image");
    expect(imageEl).toBeInTheDocument();
    expect(imageEl).toHaveAttribute(
      "src",
      expect.stringContaining("via.placeholder.com")
    );

    // Check that a link is present and its href is correctly rendered.
    const linkEl = screen.getByRole("link");
    expect(linkEl).toBeInTheDocument();
    expect(linkEl).toHaveAttribute("href", "/gallery/sample-art");

    // Check that the favorite button is rendered.
    expect(
      screen.getByRole("button", { name: /favorite/i })
    ).toBeInTheDocument();
  });
});
