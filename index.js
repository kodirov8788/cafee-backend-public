const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const UserRoute = require("./routers/UserRouter");
const OrderRoute = require("./routers/OrderRoute");
require("dotenv").config();

const app = express();

// Middleware
app.use(express.json()); // Parse incoming JSON requests
app.use(cors()); // Enable Cross-Origin Resource Sharing

// MongoDB connection
const url = process.env.MONGO_URL;
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to MongoDB"))
    .catch(error => console.error("Error connecting to MongoDB:", error));

// Routes
app.use("/user", UserRoute); // User-related routes
app.use("/order", OrderRoute); // Order-related routes

// Server setup
const PORT = process.env.PORT || 5001; // Use process.env.PORT if defined, otherwise default to 5001
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
