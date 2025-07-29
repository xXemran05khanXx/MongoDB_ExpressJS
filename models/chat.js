const mongoose = require('mongoose');

// Define the schema for a chat message
const chatSchema = new mongoose.Schema ({
    sender : {
        type: String,
        required: true
    },
    receiver : {
        type: String,
        required: true
    },
    message : {
        type: String,
        maxLength: 50,
    },
    timestamp : {
        type: Date,
        required: true,
        default: Date.now
    }
});

// Create a model from the schema
const Chat = mongoose.model('Chat', chatSchema);

// Export the Chat model
module.exports = Chat;
