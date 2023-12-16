const router = require("express").Router();
const Order = require("../models/OrderModul"); // Importing the Order model
const { pusher } = require("../Pusher"); // Importing Pusher for real-time updates

// Route to create a new order
router.post("/create", async (req, res) => {
    try {
        // Create a new order based on the request body
        const neworder = await new Order({
            isready: false,
            ordernumber: req.body.ordernumber,
            tablenumber: req.body.tablenumber,
            waitername: req.body.waitername,
            order: req.body.order
        });

        // Save the new order to the database and trigger a pusher event
        await neworder.save()
            .then(order => {
                pusher.trigger('chat-channel', 'new-message', order);
                res.status(201).send(order);
            })
            .catch(error => {
                res.status(500).send(error);
            });
    } catch (error) {
        res.status(500).send("Error creating order");
    }
});

// Route to mark an order as made (isready: true)
router.put("/made/:id", async (req, res) => {
    try {
        const orderId = req.params.id;
        const neworder = await Order.findById(orderId);
        neworder.isready = true;

        // Save the updated order to the database and trigger a pusher event
        await neworder.save()
            .then(order => {
                pusher.trigger('chat-channel', 'new-message', order);
                res.status(200).send(order);
            })
            .catch(error => {
                res.status(500).send(error);
            });
    } catch (error) {
        res.status(500).send("Error updating order");
    }
});

// Route to get all orders
router.get("/get", async (request, response) => {
    try {
        // Retrieve all orders from the database and reverse the order of data
        let data = await Order.find({});
        data.reverse();
        response.status(200).send(data);
    } catch (error) {
        response.status(500).send("Error fetching orders");
    }
});

// Route to delete an order by ID
router.delete("/delete/:id", async (req, res) => {
    try {
        const orderId = req.params.id;
        let deletedOrder = await Order.findByIdAndDelete(orderId);
        res.status(200).send(deletedOrder);
    } catch (error) {
        res.status(500).send("Error deleting order");
    }
});

// Route to update an order by ID (not changing any data)
router.put("/update/:id", async (req, res) => {
    try {
        const orderId = req.params.id;
        const neworder = await Order.findById(orderId);
        await neworder.save(); // This seems to be a redundant operation as it doesn't change any data
        res.status(200).send(neworder);
    } catch (error) {
        res.status(500).send("Error updating order");
    }
});

module.exports = router;
