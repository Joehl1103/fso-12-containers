const Todo = ({ todo, onClickDelete, onClickComplete }) => {
  const done = "This todo is done";
  const notDone = "This todo is not done";
  const isDone = todo.done;
  const deleteButton = (todo) => (
    <button onClick={() => onClickDelete(todo)}>❌</button>
  );
  const completeButton = (todo) => (
    <button onClick={() => onClickComplete(todo)}>✅</button>
  );
  if (!todo || !todo._id) {
    return null;
  }
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        maxWidth: "70%",
        margin: "auto",
      }}
    >
      <span style={{ flex: 1, textAlign: "left" }}>{todo.text}</span>
      <span style={{ flex: 1, textAlign: "center" }}>
        {isDone ? done : notDone}
      </span>
      <span style={{ flex: 1, textAlign: "right" }}>
        {deleteButton(todo)} {!todo.done ? completeButton(todo) : null}
      </span>
    </div>
  );
};

export default Todo;
