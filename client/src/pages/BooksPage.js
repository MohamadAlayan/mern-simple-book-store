import React, {useEffect, useState} from 'react';
import axios from "axios";
import Book from "../components/book/Book";
import "../components/book/Book.css"

const fetchHandler = async () => {
    return await axios.get("http://localhost:5000/api/books").then((res) => res.data)
}

const BooksPage = () => {
    const [books, setBooks] = useState();

    useEffect(() => {
            fetchHandler().then((data) => setBooks(data.books));
        }
        , [])

    return (
        <div>
            <ul>
                {books && books.map((book, i) => (
                    <li key={i}>
                        <Book book={book}/>
                    </li>
                ))
                }
            </ul>
        </div>
    );
};

export default BooksPage;