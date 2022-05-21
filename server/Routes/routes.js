const express = require("express");
const router = express.Router();
const bookController = require("../Controllers/BookController")

router.get("/api/books",bookController.getAllBooks );
router.get("/api/books/:id",bookController.getById );
router.post("/api/books",bookController.addBook );
router.put("/api/books/:id",bookController.updateBook );
router.delete("/api/books/:id",bookController.deleteBook );

module.exports = router;
