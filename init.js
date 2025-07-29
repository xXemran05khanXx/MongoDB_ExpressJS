const Chats = require('./models/chat');
const mongoose = require('mongoose');
const port = 8080;

// Connect to MongoDB and log result
main().then(() => {
    console.log("Connected to MongoDB")
}).catch(err => console.log(err));

// Async function to connect to MongoDB
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/chatbit');
}

// Create a new chat messages array
let allChats = [
    { 
        sender: "sarah",
        receiver: "imran",
        message: "hmm, I'm good. How about you?",
        timestamp: new Date()
    },
    { 
        sender: "imran",
        receiver: "sarah",
        message: "I'm doing well, thanks for asking!",
        timestamp: new Date()
    },
    { 
        sender: "sarah",
        receiver: "imran",
        message: "That's great to hear!",
        timestamp: new Date()
    },
    { 
        sender: "imran",
        receiver: "sarah",
        message: "What are you up to today?",
        timestamp: new Date()
    },
    { 
        sender: "sarah",
        receiver: "imran",
        message: "Just working on some projects. You?",
        timestamp: new Date()
    },
    { 
        sender: "imran",
        receiver: "sarah",
        message: "Same here, just trying to stay productive.",
        timestamp: new Date()
    }
]

// Save all chat messages to the database
Chats.insertMany(allChats)


