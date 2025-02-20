const express = require("express");
const cors = require("cors");
const users = require("./sample.json");
const fs = require("fs");

const server = express();
const port = 2000;

server.use(cors());

server.get("/users", (req,res) => {
    return res.json(users);
});

server.delete("/users/:id", (req,res) => {
    let id = Number(req.params.id);
    let filteredUsers = users.filter((user) => user.id !== id);
    fs.writeFile("./sample.json", JSON.stringify
        (filteredUsers), (err,data) => {
        return res.json(filteredUsers);
    });
})

server.listen(port, (err) => {
    console.log(`App is running in port ${port}`);
});
























