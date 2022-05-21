import React, {useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {Box, Button, Checkbox, FormControlLabel, FormLabel, TextField} from "@mui/material";

const BookDetails = () => {
    const history = useNavigate()
    const id = useParams().id;
    const [inputs, setInputs] = useState({});
    const getBookDetails = async () => {
        return await axios.get(`http://localhost:5000/api/books/${id}`).then((res) => res.data)
    }

    useEffect(async () => {

        let data = await getBookDetails();
        setInputs(data.book);
        setChecked(data.book.available)
    }, [])

    const [checked, setChecked] = useState(false);
    const handleChange = (e) => {
        setInputs((prevState) => (
            {
                ...prevState,
                [e.target.name]: e.target.value,
            }
        ));

    }
    const sendRequest = async () => {
        await axios.put(`http://localhost:5000/api/books/${id}`, {
            name: String(inputs.name),
            author: String(inputs.author),
            description: String(inputs.description),
            price: Number(inputs.price),
            image: String(inputs.image),
            available: Boolean(checked),
        }).then(res => res.data)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        await sendRequest()
        history('/books')
    }
    return (
        <>

            <from>
                <Box display={"flex"} flexDirection={"column"} justifyContent={'center'} maxWidth={700}
                     alignContent={"center"} alignSelf={"center"} margin={"auto"} marginTop={5}>
                    <FormLabel>Name</FormLabel>
                    <TextField margin={"normal"} fullWidth variant={"outlined"} name={"name"} value={inputs.name}
                               onChange={handleChange}/>
                    <FormLabel>Author</FormLabel>
                    <TextField margin={"normal"} fullWidth variant={"outlined"} name={"author"} value={inputs.author}
                               onChange={handleChange}/>
                    <FormLabel>Description</FormLabel>
                    <TextField margin={"normal"} fullWidth variant={"outlined"} name={"description"}
                               value={inputs.description} onChange={handleChange}/>
                    <FormLabel>Price</FormLabel>
                    <TextField type={"number"} margin={"normal"} fullWidth variant={"outlined"} name={"price"}
                               value={inputs.price} onChange={handleChange}/>
                    <FormLabel>Image Url</FormLabel>
                    <TextField margin={"normal"} fullWidth variant={"outlined"} name={"image"}
                               value={inputs.image} onChange={handleChange}/>
                    <FormControlLabel control={<Checkbox checked={checked} onChange={() => {
                        setChecked(!checked);
                        inputs.available = checked;
                    }
                    }/>} label={"Available"}/>

                    <Button onClick={handleSubmit} variant={"contained"} type={'submit'}>Update</Button>
                </Box>
            </from>
        </>
    );
};

export default BookDetails;