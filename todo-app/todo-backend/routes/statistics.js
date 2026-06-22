const express = require("express");
const router = express.Router();
const { get } = require("../redis/index.js");

router.get("/", async (_, res) => {
  const response = await get("added_todos");
  const added_todos = Number(response);
  res.send({ added_todos });
});

module.exports = router;
