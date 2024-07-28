// import { expect, test } from "vitest";
// import { render, screen } from "@testing-library/react";
// import { Button } from ".";

// test("primary button", () => {
//   render(<Button />);
//   //   const btnText = screen.findByRole("button", { name: "Button" });
//   expect(screen.getByRole("button", { name: "Button" })).toBeDefined();
// });
import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from ".";

test("primary button", () => {
  const handleClick = vi.fn();
  render(<Button label="Button" onClick={handleClick} />);

  const button = screen.getByRole("button", { name: "Button" });
  expect(button).toBeDefined();

  // userEvent.click(button);
  // expect(handleClick).toHaveBeenCalled();
});
