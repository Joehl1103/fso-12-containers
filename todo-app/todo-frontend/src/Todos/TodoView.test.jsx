import { render, screen, logRoles, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { within } from "@testing-library/dom";
import { describe, it } from "vitest";
import TodoView from "./TodoView";
import { todos } from "./fixtures";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

const user = userEvent.setup();

let serverTodos = todos.map((t) => ({ ...t }));
const server = setupServer(
  http.get(`/todos`, () => {
    return HttpResponse.json(todos);
  }),
  http.post("/todos", () => {
    return HttpResponse.json({ _id: "3", text: "new todo", done: false });
  }),
  http.put("/todos/:id", ({ params }) => {
    const id = params.id;
    const target = serverTodos.find((t) => (t._id = id));
    console.log("target", target);
    if (target) {
      target.done = true;
    }
    serverTodos = [...serverTodos, target];
    return HttpResponse.json(target);
  }),
);

describe("List", () => {
  beforeAll(() => server.listen());
  beforeEach(() => (serverTodos = todos.map((t) => ({ ...t }))));
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
  it.only("completing changes status to 'This todo is done'", async () => {
    render(<TodoView />);
    await screen.findAllByTestId("done-status");
    async function getNotDoneTodo() {
      const notDoneSpan = await screen.findByText("not done", { exact: true });
      return notDoneSpan.closest('[data-testid="todo"]');
    }
    const todo1 = await getNotDoneTodo();
    const completeBttn = await within(todo1).findByRole("button", {
      name: "✅",
    });
    console.log(serverTodos);
    await user.click(completeBttn);
    console.log(serverTodos);
    const todo2 = await getNotDoneTodo();
    screen.debug(todo2);
    const status = await within(todo2).findByTestId("done-status").textContent;
    // expect(status).toEqual("This todo is done");
  });
  it("deleting removes data", async () => {
    render(<TodoView />);
    await screen.findAllByTestId("done-status");
  });
});
