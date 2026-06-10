import { render, screen, logRoles } from "@testing-library/react";
import { describe, it } from "vitest";
import TodoView from "./TodoView";
import { todos } from "./fixtures";
import { http, HttpResponse } from "msw";
import { setupServer } from "msw/node";

const baseUrl = import.meta.env.VITE_BACKEND_URL;
const server = setupServer(
  http.get(`/todos`, () => {
    console.log("todos", todos);
    return HttpResponse.json(todos);
  }),
  http.post(`${baseUrl}/todos`, () => {
    const newTodo = { _id: "3", text: "new todo", done: false };
    const newTodos = [...todos, newTodo];
    return HttpResponse.json(newTodos);
  }),
);

describe("List", () => {
  beforeAll(() => server.listen());
  beforeEach(() => server.resetHandlers());
  afterAll(() => server.close());
  it("renders", async () => {
    render(<TodoView />);
    const all = await screen.findAllByTestId("todo");
    screen.debug(all);
    expect(all.length).toEqual(2);
  });
});
