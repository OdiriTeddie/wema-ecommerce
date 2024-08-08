import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { NavLink, Header } from ".";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Web Development", href: "/services/web-dev" },
      { label: "Design", href: "/services/design" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

describe("Header", () => {
  it("renders correctly", () => {
    render(<Header logoSrc="/path/to/logo.png" navLinks={navLinks} />);
    expect(screen.getByAltText("Logo")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
  });

  it("toggles mobile menu", () => {
    render(<Header logoSrc="/path/to/logo.png" navLinks={navLinks} />);
    const menuButton = screen.getByText("MENU");
    fireEvent.click(menuButton);
    expect(screen.getByText("Home")).toBeVisible();
  });

  it("displays dropdown on hover", () => {
    render(<Header logoSrc="/path/to/logo.png" navLinks={navLinks} />);
    const servicesLink = screen.getByText("Services");
    fireEvent.mouseOver(servicesLink);
    expect(screen.getByText("Web Development")).toBeVisible();
    expect(screen.getByText("Design")).toBeVisible();
  });
});
