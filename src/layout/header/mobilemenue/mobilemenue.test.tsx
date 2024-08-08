import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { NavLink } from "..";
import { MobileMenu } from "./mobileMenu";

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

describe("MobileMenu", () => {
  it("renders correctly when open", () => {
    render(
      <MobileMenu isOpen={true} toggleMenu={vi.fn()} navLinks={navLinks} />
    );
    expect(screen.getByText("Home")).toBeVisible();
  });

  it("calls toggleMenu on link click", () => {
    const toggleMenuMock = vi.fn();
    render(
      <MobileMenu
        isOpen={true}
        toggleMenu={toggleMenuMock}
        navLinks={navLinks}
      />
    );
    const homeLink = screen.getByText("Home");
    fireEvent.click(homeLink);
    expect(toggleMenuMock).toHaveBeenCalledTimes(1);
  });
});
