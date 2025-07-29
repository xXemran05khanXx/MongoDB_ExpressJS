const express = require ("express");;
const app = express();
const mongoose = require("mongoose");
const port = 8080;

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/chatbit');
}

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});