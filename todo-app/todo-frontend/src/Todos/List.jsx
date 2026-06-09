import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, deleteTodo, completeTodo }) => {
  const onClickDelete = (todo) => () => {
    deleteTodo(todo);
  };

  const onClickComplete = (todo) => () => {
    completeTodo(todo);
  };
  console.log("todos", todos);

  return (
    <>
      {todos
        .map((todo) => {
          console.log(todo);
          return (
            <div key={todo._id}>
              <Todo
                todo={todo}
                onClickComplete={onClickComplete()}
                onClickDelete={onClickDelete}
              />
            </div>
          );
        })
        .reduce((acc, cur) => [...acc, <hr key={`he=${cur.key}`} />, cur], [])}
    </>
  );
};

export default TodoList;
