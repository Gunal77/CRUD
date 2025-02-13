const express = require("express");
const users = require("./sample.json");

const server = express();
const port = 2000;

server.get("/users", (req,res) => {
    return res.json(users);
});

server.listen(port, (err) => {
    console.log(`App is running in port ${port}`);
});
























