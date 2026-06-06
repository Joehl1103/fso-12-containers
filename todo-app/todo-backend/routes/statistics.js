const express = require("express");
const { Todo } = require("../mongo");
const router = express.Router();
const { get, set } = require("../redis/index.js");

router.get("/", async (_, res) => {
  const added_todos = await get("added_todos");
  res.send({ added_todos });
});

module.exports = router;
