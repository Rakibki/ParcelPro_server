const express = require("express");
const getAllBLog = require("../../api/blog/getAllBlog");
const getSingleBlog = require("../../api/blog/getSingleBlog");
const router = express.Router();

router.get("/blogs", getAllBLog);
router.get("/blog/:id", getSingleBlog);

module.exports = router;
