const mongoose = require("mongoose");

// Define the schema for the User model
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true // Ensures uniqueness of usernames
    },
    role: {
        type: String,
        default: "user" // Sets a default value of "user" for the role
    },
    gender: {
        type: String,
        required: true
    }
});

// Create and export the User model using the defined schema
module.exports = mongoose.model("User", UserSchema);
