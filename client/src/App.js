import React from 'react';
import Header from "./components/Header";
import {createBrowserHistory} from 'history';
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BooksPage from "./pages/BooksPage";
import AddBookPage from "./pages/AddBookPage";
import BookDetails from "./components/book/BookDetails";
import {
    Routes,
    Route,
} from "react-router-dom";


function App() {
    return (
        <React.Fragment>
            <header>
                <Header/>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<HomePage/>} exact/>
                    <Route path="/add" element={<AddBookPage/>} exact/>
                    <Route path="/books" element={<BooksPage/>} exact/>
                    <Route path="/about" element={<AboutPage/>} exact/>
                    <Route path="/books/:id" element={<BookDetails/>} exact/>
                </Routes>
            </main>
        </React.Fragment>
    );
}

export default App;
