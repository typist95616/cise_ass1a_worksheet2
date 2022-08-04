const express = require("express");
const articles = require("./dummydata/articles")
const server = express();
const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 8080;

server.get("/", (req, res) => {
    res.send("Change Message~");
})

server.get("/api/articles", (req, res) => {
    res.json(articles);
})

server.get("/api/articles/:id", (req, res) => {
    const article = articles.find((n) => n. id === req.params.id);
    res.send(article);
    console.log(req.params);
})

server.listen(PORT, console.log("server is working and listeneing PORT ${PORT}"));