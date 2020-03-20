const express = require("express");
const fs = require("fs");
const app = express();
app.listen(3000, () => {
    console.log("server started...");
});

app.use(express.static("./public"));

app.get("/get_text", (req ,rest) => {
    rest.send({
        title : "mon article",
        content : "le super contenu de mon article :)",
        author: "Darkann",
    });
});
