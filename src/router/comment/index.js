const express = require("express");
const getComment = require("../../api/comment/getComment");
const router = express.Router();

router.get("/comments/:id", getComment);

module.exports = router;
