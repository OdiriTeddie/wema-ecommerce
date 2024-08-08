import React from "react";
import { render, screen } from "@testing-library/react";
import HeaderBanner, { HeaderBannerProps } from "./index";
// import { expect } from 'chai';
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";

const renderHeaderBanner = (props: HeaderBannerProps) => {
  render(<HeaderBanner {...props} />);
};

describe("HeaderBanner Component", () => {
  it("renders correctly with fullWidthImage type", () => {
    renderHeaderBanner({
      type: "fullWidthImage",
      backgroundImage: "url(test-image.jpg)",
      title: "Test Title",
    });

    const banner = screen.getByRole("banner");
    // expect(banner).toHaveClass({
    //   backgroundImage: 'url(test-image.jpg)',
    // });

    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders correctly with fullWidthNoImage type", () => {
    renderHeaderBanner({
      type: "fullWidthNoImage",
      title: "Test Title",
      subtitle: "Test Subtitle",
    });

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
  });

  it("renders correctly with fullHeightImage type", () => {
    renderHeaderBanner({
      type: "fullHeightImage",
      backgroundImage: "url(test-image.jpg)",
      title: "Test Title",
    });

    const banner = screen.getByRole("banner");
    // expect(banner).toHaveStyle({
    //   backgroundImage: 'url(test-image.jpg)',
    // });

    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders correctly with halfWidthImage type", () => {
    renderHeaderBanner({
      type: "halfWidthImage",
      backgroundImage: "url(test-image.jpg)",
      title: "Test Title",
    });

    const banner = screen.getByRole("banner");
    // expect(banner).toHaveStyle({
    //   backgroundImage: 'url(test-image.jpg)',
    // });

    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders title and subtitle correctly", () => {
    renderHeaderBanner({
      type: "fullWidthImage",
      title: "Test Title",
      subtitle: "Test Subtitle",
    });

    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
  });

  it("applies correct styles based on type", () => {
    renderHeaderBanner({
      type: "fullWidthImage",
      title: "Test Title",
    });
    const banners = screen.getAllByRole("banner");
    expect(banners[0].className).toMatch(/fullWidthImage/);

    renderHeaderBanner({
      type: "fullWidthNoImage",
      title: "Test Title",
    });
    const newBanners = screen.getAllByRole("banner");
    expect(newBanners[1].className).toMatch(/fullWidthNoImage/);

    renderHeaderBanner({
      type: "fullHeightImage",
      title: "Test Title",
    });
    const updatedBanners = screen.getAllByRole("banner");
    expect(updatedBanners[2].className).toMatch(/fullHeightImage/);

    renderHeaderBanner({
      type: "halfWidthImage",
      title: "Test Title",
    });
    const finalBanners = screen.getAllByRole("banner");
    expect(finalBanners[3].className).toMatch(/halfWidthImage/);
  });
});
