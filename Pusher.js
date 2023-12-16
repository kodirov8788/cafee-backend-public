// Import the Pusher library
const Pusher = require("pusher");

// Initialize Pusher with the provided keys from environment variables
const pusher = new Pusher({
    appId: process.env.APP_ID, // Replace with your Pusher App ID
    key: process.env.APP_KEY, // Replace with your Pusher API key
    secret: process.env.APP_SECRET, // Replace with your Pusher API secret
    cluster: process.env.APP_CLUSTER, // Replace with your Pusher cluster
    useTLS: true, // Enable TLS encryption
});

// Export the Pusher instance for use in other modules
module.exports = { pusher };