const express = require("express");
require("dotenv").config();

const { PORT } = process.env;

const app = express();

app.get("/words", (req, res) => {
    res.json([
        "hello",
        "world"
    ]);
});

app.listen(PORT);