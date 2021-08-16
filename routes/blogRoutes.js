const express = require("express");
const {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_delete,
} = require("../controllers/blogController");

const router = express.Router();

// all blogs
router.get("/", blog_index);

// new blog post request
router.post("/", blog_create_post);

// new blog get request
router.get("/create", blog_create_get);

// getting a single blog using blog id
router.get("/:id", blog_details);

// deleting a blog using blog id
router.delete("/:id", blog_delete);

module.exports = router;