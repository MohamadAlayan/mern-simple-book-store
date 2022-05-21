import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {Button} from "@mui/material";
import axios from "axios";


const Book = (props) => {
    const navigate = useNavigate();
    const {_id, name, author, description, price, image} = props.book;

    const deleteHandler = async () => {
        await axios.delete(`http://localhost:5000/api/books/${_id}`).then(res => res.data).then(() => navigate("/books"))
        navigate('/')
        navigate('/books')
    }

    return (
        <div className="card">
            <img src={image} alt={name}/>
            <div className="card-content">
                <article>By {author}</article>
                <h3>{name}</h3>
                <p>{description}</p>
                <h2>$ {price}</h2>
                <Button LinkComponent={Link} to={`/books/${_id}`} sx={{mt: "auto"}}>Update</Button>
                <Button onClick={deleteHandler}>Delete</Button>
            </div>

        </div>
    );
};

export default Book;