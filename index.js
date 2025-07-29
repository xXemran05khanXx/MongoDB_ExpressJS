const express = require ("express");;
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js"); 
const port = 8080;

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Connect to MongoDB and log result
main().then(() => {
    console.log("Connected to MongoDB")
}).catch(err => console.log(err));

// Async function to connect to MongoDB
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/chatbit');
}

// Create a new chat message instance
let chat1 = new Chat({
    sender: "imran",
    receiver: "sarah",
    message: "Hello, how are you?",
    timestamp: new Date()
});
// Save the chat message to the database
chat1.save()
    .then(() => console.log("Chat message saved"))
    .catch(err => console.log(err));

// Express app route and server setup 

// Define route for root URL
app.get("/", (req, res) => {        
    // Send response text  
    res.send("Hello, World!");        
});

// Define route for /chat URL
app.get("/chat", (req, res) => {

});

// Start server on specified port
app.listen(port, () => {              
    console.log(`Server is running on http://localhost:${port}`);
});
