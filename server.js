const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("hello renton");
});

app.listen(3001);