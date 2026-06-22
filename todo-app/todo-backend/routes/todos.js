const express = require("express");
const { Todo } = require("../mongo");
const router = express.Router();
const { get, set } = require("../redis/index.js");

async function changeCurrentTodos(operation) {
  let todoCount = await get("added_todos");
  switch (operation) {
    case "increment":
      todoCount++;
      await set("added_todos", todoCount);
      break;
    case "decrement":
      todoCount--;
      await set("added_todos", todoCount);
      break;
    default:
      throw new Error(
        `operation is neither increment nor decrement: ${operation}`,
      );
  }
}

/* GET todos listing. */
router.get("/", async (_, res) => {
  const todos = await Todo.find({});
  res.send(todos);
});

/* POST todo to listing. */
router.post("/", async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false,
  });
  changeCurrentTodos("increment");
  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params;
  console.log("id", id);
  req.todo = await Todo.findById(id);
  console.log(req.todo);
  if (!req.todo) return res.sendStatus(404);

  next();
};

/* DELETE todo. */
singleRouter.delete("/", async (req, res) => {
  await Todo.deleteOne(req.todo);
  changeCurrentTodos("decrement");
  await res.sendStatus(200);
});

/* GET todo. */
singleRouter.get("/", async (req, res) => {
  res.json(req.todo);
});

/* PUT todo. */
singleRouter.put("/", async (req, res) => {
  const todo = req.todo;
  const body = req.body;
  const updatedTodo = await Todo.findByIdAndUpdate(todo._id, body, {
    returnDocument: "after",
  });
  res.status(200).send(updatedTodo);
});

router.use("/:id", findByIdMiddleware, singleRouter);

module.exports = router;
