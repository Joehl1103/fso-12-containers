import { render, screen, logRoles } from "@testing-library/react";
import { describe, it } from "vitest";
import Todo from "./Todo";
import { todos } from "./fixtures";

describe("Todos", () => {
  it("done todo says done", () => {
    const { getByTestId } = render(<Todo todo={todos[0]} />);
    const doneStatus = getByTestId("done-status").textContent;
    expect(doneStatus).toEqual("This todo is done");
  });

  it("done todo does not have complete", () => {
    const { queryByRole } = render(<Todo todo={todos[0]} />);
    const bttn = queryByRole("button", { name: "✅" });
    expect(bttn).toBeNull();
  });

  it("done todo has delete button", () => {
    const { queryByRole } = render(<Todo todo={todos[0]} />);
    const bttn = queryByRole("button", { name: "❌" });
    expect(bttn).toBeTruthy();
  });

  it("not done todo says not done", () => {
    const { getByTestId } = render(<Todo todo={todos[1]} />);
    const doneStatus = getByTestId("done-status").textContent;
    expect(doneStatus).toEqual("This todo is not done");
  });
});
