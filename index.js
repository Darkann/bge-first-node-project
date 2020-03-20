const express = require("express");
const fs = require("fs");
const app = express();
app.listen(3000, () => {
    console.log("server started...");
});
app.get("/", (request, response) => {
    console.log("access to / path");
    const html = fs
        .readFileSync("./src/index.html");
        
    response.send(html);
});
app.get("/about", (req, res) => {
    res.send("About");
});