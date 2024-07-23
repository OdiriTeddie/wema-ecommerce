import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from ".";

test("primary button", () => {
  render(<Button />);
  //   const btnText = screen.findByRole("button", { name: "Button" });
  expect(screen.getByRole("button", { name: "Button" })).toBeDefined();
});
