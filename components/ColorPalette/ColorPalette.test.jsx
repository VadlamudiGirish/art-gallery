import React from "react";
import { render, screen } from "@testing-library/react";
import ColorPalette from "./ColorPalette";

describe("ColorPalette", () => {
  it("renders without crashing", () => {
    render(<ColorPalette colors={["#ff0000", "#00ff00"]} />);
  });

  it("displays the correct title", () => {
    render(<ColorPalette colors={["#ff0000"]} />);
    expect(screen.getByText("Colors:")).toBeInTheDocument();
  });

  it("renders all provided colors", () => {
    const testColors = ["#ff0000", "#00ff00", "#0000ff"];
    render(<ColorPalette colors={testColors} />);

    const colorElements = screen.getAllByTestId("color-swatch");
    expect(colorElements).toHaveLength(testColors.length);
  });

  it("applies the correct background color to each element", () => {
    const testColors = ["#ff0000", "#00ff00"];
    render(<ColorPalette colors={testColors} />);

    const colorElements = screen.getAllByTestId("color-swatch");
    colorElements.forEach((element, index) => {
      expect(element).toHaveStyle(`background-color: ${testColors[index]}`);
    });
  });

  it("renders circular color swatches", () => {
    render(<ColorPalette colors={["#ff0000"]} />);
    const colorElement = screen.getByTestId("color-swatch");
    expect(colorElement).toHaveClass("rounded-full");
  });

  it("handles empty color array gracefully", () => {
    render(<ColorPalette colors={[]} />);
    const colorElements = screen.queryAllByTestId("color-swatch");
    expect(colorElements).toHaveLength(0);
  });

  it("has proper spacing between color swatches", () => {
    render(<ColorPalette colors={["#ff0000", "#00ff00"]} />);
    const container = screen.getByText("Colors:").nextElementSibling;
    expect(container).toHaveClass("space-x-2");
  });
});
