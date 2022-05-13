const express = require("express");

const app = express();
let books = require("./books.json");

app.get("/books", (req, res) => res.json(books));

app.listen(8080, () => console.log("listening"));
