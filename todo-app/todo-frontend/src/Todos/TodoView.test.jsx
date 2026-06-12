import { render, screen, logRoles, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { within } from "@testing-library/dom";
import { describe, it } from "vitest";
import TodoView from "./TodoView";
import { todos } from "./fixtures";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  http.get(`/todos`, () => {
    return HttpResponse.json(todos);
  }),
  http.post("/todos", () => {
    return HttpResponse.json({ _id: "3", text: "new todo", done: false });
  }),
  http.put("/todos/2", () => {
    console.log("hello");
  }),
);

describe("List", () => {
  const user = userEvent.setup();
  beforeAll(() => {
    server.listen();
  });
  beforeEach(() => server.resetHandlers());
  afterAll(() => server.close());
  it("renders", async () => {
    render(<TodoView />);
    const all = await screen.findAllByTestId("todo");
    expect(all.length).toEqual(2);
  });
  it("post", async () => {
    render(<TodoView />);
    const bttn = screen.getByTestId("form-button");
    await user.click(bttn);
    const newTodo = await screen.findByText("new todo");
    expect(newTodo).toBeTruthy();
  });
  it("completing changes status to 'This todo is done'", async () => {
    render(<TodoView />);
    await screen.findAllByTestId("done-status");
    const notDoneSpan = await screen.findByText("This todo is not done");
    const todo = notDoneSpan.closest('[data-testid="todo"]');
    const completeBttn = await within(todo).findByRole("button", {
      name: "✅",
    });
    screen.debug(completeBttn);
    await user.click(completeBttn);
    // const notDoneSpan = await screen.findByText("not done");
    // const row = notDoneSpan.closest('[data-testid="todo"]');
    // const status = within(row).getByTestId("done-status").textContent;
    // expect(status).toEqual("This todo is done");
  });
});
