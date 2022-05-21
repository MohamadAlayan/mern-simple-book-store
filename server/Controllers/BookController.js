const Book = require("../Models/Book")

const getAllBooks = async (req, res, next) => {
    let books;
    try {
        books = await Book.find();
    } catch (err) {
        console.error(err)
    }

    if (!books || books.length === 0) {
        return res.status(404).json({
            message: "no books found"
        })
    }
    return res.status(200).json({
        books
    })
}

const addBook = async (req, res, next) => {
    const {name,image, author, description, price, available} = req.body;
    let book;
    try {
        book = new Book(
            {
                name,
                image,
                author,
                description,
                price,
                available
            }
        );
        await book.save();
        return res.status(200).json({
            message: "new book have been saved"
        })
    } catch (err) {
        console.log(err)
    }
}

const getById = async (req, res, next) => {
    const id = req.params.id;
    let book;
    try {
        book = await Book.findById(id);
    } catch (err) {
        console.error(err)
    }

    if (!book) {
        return res.status(404).json({
            message: "no book found"
        })
    }
    return res.status(200).json({
        book
    })
}

const updateBook = async (req, res, next) => {
    const id = req.params.id;
    const {name,image, author, description, price, available} = req.body;
    let book;
    try {
        book = await Book.findByIdAndUpdate(id,{
            name,
            image,
            author,
            description,
            price,
            available
        });

        await book.save();
        return res.status(200).json({
            message: "book have been updated"
        })
    } catch (err) {
        console.log(err)
    }
}

const deleteBook = async (req, res, next) => {
    const id = req.params.id;
    try {
        await Book.findByIdAndRemove(id);
        return res.status(200).json({
            message: "book have been deleted"
        })
    } catch (err) {
        console.log(err)
    }
}

exports.getAllBooks = getAllBooks;
exports.addBook = addBook;
exports.getById = getById;
exports.updateBook = updateBook;
exports.deleteBook = deleteBook;