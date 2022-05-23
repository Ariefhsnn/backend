//inisialisai
const express = require("express");
const app = express();

//assign variable
let books = require("./books.json");

app.get("/books", (req, res) => res.json(books));

app.listen(8080, () => console.log("Listening on Port 8080!"));
