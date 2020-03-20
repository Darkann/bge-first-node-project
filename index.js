const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log("server started...");
});

app.get("/", (req, res) => {
    console.log("access to / path");
    res.send(`<!DOCTYPE html>
        < html >
            <head>
                <title>Project-2</title>
            </head>
            <body>
                <h1>hello world!</h1>
            </body>
        </html >
        `);
});

app.get("/about",(req, res) => {
    res.send("about");
});