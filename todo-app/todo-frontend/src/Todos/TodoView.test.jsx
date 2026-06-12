import { render, screen, logRoles, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it } from "vitest";
import TodoView from "./TodoView";
import { todos } from "./fixtures";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

const baseUrl = import.meta.env.VITE_BACKEND_URL;
const server = setupServer(
  http.get(`/todos`, () => {
    return HttpResponse.json(todos);
  }),
  http.post("/todos", () => {
    return HttpResponse.json({ _id: "3", text: "new todo", done: false });
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
  it.only("post", async () => {
    render(<TodoView />);
    const bttn = screen.getByTestId("form-button");
    await user.click(bttn);
    const newTodo = await screen.findByText("new todo");
    screen.debug();
    expect(newTodo).toBeTruthy();
  });
});
