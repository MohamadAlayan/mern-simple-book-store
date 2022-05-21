const express = require('express');
const mongoose = require('mongoose');
const router = require("./Routes/routes");
const cors = require('cors');
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/",router);

mongoose.connect("mongodb+srv://<username>:<password>@cluster0.r4yp7.mongodb.net/<database_name>?retryWrites=true&w=majority")
    .then(() => console.log("Connected to Database"))
    .then(() => {app.listen(5000)})
    .catch((err) => console.error(err));
