import { render } from "@testing-library/react";
import { describe, it } from "vitest";
import Todo from "./Todo";
import { todos } from "./fixtures";

describe("Todos", () => {
  function makeProps(overrides) {
    const noOp = () => () => {};
    const defaults = {
      todo: todos[0],
      onClickDelete: noOp,
      onClickComplete: noOp,
    };
    return { ...defaults, ...overrides };
  }
  it("done todo says done", () => {
    const { getByTestId } = render(<Todo {...makeProps()} />);
    const doneStatus = getByTestId("done-status").textContent;
    expect(doneStatus).toEqual("This todo is done");
  });

  it("done todo does not have complete", () => {
    const { queryByRole } = render(<Todo {...makeProps()} />);
    const bttn = queryByRole("button", { name: "✅" });
    expect(bttn).toBeNull();
  });

  it("done todo has delete button", () => {
    const { queryByRole } = render(<Todo {...makeProps()} />);
    const bttn = queryByRole("button", { name: "❌" });
    expect(bttn).toBeTruthy();
  });

  it("not done todo says not done", () => {
    const { getByTestId } = render(<Todo {...makeProps({ todo: todos[1] })} />);
    const doneStatus = getByTestId("done-status").textContent;
    expect(doneStatus).toEqual("This todo is not done");
  });
});
