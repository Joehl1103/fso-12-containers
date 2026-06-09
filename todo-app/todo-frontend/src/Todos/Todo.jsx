const Todo = ({ todo, onClickDelete, onClickComplete }) => {
  const done = "This todo is done";
  const notDone = "This todo is not done";
  const isDone = todo.done;
  const deleteButton = (todo) => (
    <button onClick={onClickDelete(todo)}>Delete</button>
  );
  const completeButton = (todo) => (
    <button onClick={onClickComplete(todo)}>Set as done</button>
  );
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "70%",
        margin: "auto",
      }}
    >
      <span>{todo.text}</span>
      <span>{isDone ? done : notDone}</span>
      <span>
        {deleteButton(todo)} {todo.done ? completeButton(todo) : null}
      </span>
    </div>
  );
};

export default Todo;
