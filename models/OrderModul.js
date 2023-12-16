const mongoose = require("mongoose");

// Define the schema for the Order model
const OrderSchema = new mongoose.Schema({
    isready: {
        type: Boolean,
        required: true
    },
    ordernumber: {
        type: Number,
        required: true
    },
    tablenumber: {
        type: String,
        required: true
    },
    waitername: {
        type: String,
        required: true
    },
    order: [
        {
            type: Object,
            required: true
        }
    ]
});

// Create and export the Order model using the defined schema
module.exports = mongoose.model("Order", OrderSchema);
