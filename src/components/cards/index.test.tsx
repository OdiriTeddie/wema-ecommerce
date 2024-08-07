import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Card } from "./index";
import { describe, test, expect, it } from "vitest";

describe("Card Component", () => {
  const defaultProps = {
    imageSrc:
      "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h4-product-26-1100x730.jpg",
    link: "#",
    linkText: "Learn More",
    productTitle: "Sample Product",
    price: "29.99",
    rate: "https://depot.qodeinteractive.com/wp-content/uploads/2017/01/h4-product-26-1100x730.jpg",
  };

  it("renders with two texts", () => {
    render(
      <Card {...defaultProps} topLeftText="Top Left" topRightText="Top Right" />
    );

    expect(screen.getByText("Top Left")).toBeInTheDocument();
    expect(screen.getByText("Top Right")).toBeInTheDocument();
    expect(screen.getByText("Learn More")).toBeInTheDocument();
    expect(screen.getByText("Sample Product")).toBeInTheDocument();
    expect(screen.getByText("$29.99")).toBeInTheDocument();
  });

  it("renders with one top left text", () => {
    render(<Card {...defaultProps} topLeftText="Top Left" />);

    expect(screen.getByText("Top Left")).toBeInTheDocument();
    expect(screen.queryByText("Top Right")).toBeNull();
    expect(screen.getByText("Learn More")).toBeInTheDocument();
    expect(screen.getByText("Sample Product")).toBeInTheDocument();
    expect(screen.getByText("$29.99")).toBeInTheDocument();
  });

  it("renders with one top right text", () => {
    render(<Card {...defaultProps} topRightText="Top Right" />);

    expect(screen.queryByText("Top Left")).toBeNull();
    expect(screen.getByText("Top Right")).toBeInTheDocument();
    expect(screen.getByText("Learn More")).toBeInTheDocument();
    expect(screen.getByText("Sample Product")).toBeInTheDocument();
    expect(screen.getByText("$29.99")).toBeInTheDocument();
  });

  it("displays the image", () => {
    render(<Card {...defaultProps} />);

    const image = screen.getByAltText("Card Image");
    expect(image).toBeInTheDocument();
    // expect(image).toHaveAttribute("src", defaultProps.imageSrc);
    expect(image).toHaveAttribute("src", expect.stringMatching(/\/_next\/image\?url=.*&w=\d+&q=\d+/));

  });

  it("displays the rate image", () => {
    render(<Card {...defaultProps} />);

    const rateImage = screen.getByAltText("Card rate");
    expect(rateImage).toBeInTheDocument();
    // expect(rateImage).toHaveAttribute("src", defaultProps.rate);
    expect(rateImage).toHaveAttribute("src", expect.stringMatching(/\/_next\/image\?url=.*&w=\d+&q=\d+/));

  });
});
