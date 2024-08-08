import { render, screen } from "@testing-library/react";
import { Button } from ".";
import { describe, test, expect, vi } from "vitest";

describe("Button component", () => {
  test("renders button with primary variant", () => {
    render(<Button variant="primary" size="lg" />);
    const button = screen.getByRole("button");
    expect(button.className).toMatch(/primary/);
  });

  test("renders button with secondary variant", () => {
    render(<Button variant="secondary" size="lg" />);
    const button = screen.getByRole("button");
    expect(button.className).toMatch(/secondary/);
  });

  test("renders button with default variant", () => {
    render(<Button size="lg" />);
    const button = screen.getByRole("button");
    expect(button.className).toMatch(/default/);
  });
});



describe("Button component", () => {
  test("renders button with small size", () => {
    render(<Button variant="default" size="sm" />);
    const button = screen.getByRole("button");
    expect(button.className).toMatch(/sm/);
  });

  test("renders button with medium size", () => {
    render(<Button variant="default" size="md" />);
    const button = screen.getByRole("button");
    expect(button.className).toMatch(/md/);
  });

  test("renders button with large size", () => {
    render(<Button variant="default" size="lg" />);
    const button = screen.getByRole("button");
    expect(button.className).toMatch(/lg/);

  });
});



describe("Button component", () => {
  test("renders button in disabled state", () => {
    render(<Button variant="default" size="lg" disabled />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  test("renders button in enabled state", () => {
    render(<Button variant="default" size="lg" />);
    const button = screen.getByRole("button");
    expect(button).not.toBeDisabled();
  });
});


describe("Button component", () => {
  test("renders button with text children", () => {
    render(<Button variant="default" size="lg">Click me</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Click me");
  });

  test("renders button with icon and text children", () => {
    render(
      <Button variant="default" size="lg">
        <span>Icon</span>
        <span>Click me</span>
      </Button>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveTextContent("Icon");
    expect(button).toHaveTextContent("Click me");
  });
});


describe("Button component", () => {
  test("renders button with additional className", () => {
    render(<Button variant="default" size="lg" className="custom-class" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
  });
});
