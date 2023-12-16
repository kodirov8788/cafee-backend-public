const router = require("express").Router();
const User = require("../models/UserModel");

// Route to retrieve all users
router.get("/get", async (request, response) => {
    try {
        let data = await User.find({});
        response.status(200).send(data);
    } catch (error) {
        response.status(500).send("Error retrieving users");
    }
});

// Route to create a new user
router.post("/create", async (req, res) => {
    try {
        const newUser = new User({
            name: req.body.name,
            lastname: req.body.lastname,
            age: req.body.age,
            username: req.body.username,
            role: req.body.role,
            gender: req.body.gender
        });
        let user = await newUser.save();
        res.status(201).send(user);
    } catch (error) {
        res.status(500).send("Error creating user");
    }
});

// Route to update a user by ID
router.put("/update/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const updatedFields = {
            name: req.body.name,
            lastname: req.body.lastname,
            age: req.body.age
        };

        const updatedUser = await User.findByIdAndUpdate(userId, updatedFields, { new: true });
        if (!updatedUser) {
            return res.status(404).send("User not found");
        }
        res.status(200).send(updatedUser);
    } catch (error) {
        res.status(500).send("Error updating user");
    }
});

// Route to delete a user by ID
router.delete("/delete/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        let deletedUser = await User.findByIdAndDelete(userId);
        if (!deletedUser) {
            return res.status(404).send("User not found");
        }
        res.status(200).send(deletedUser);
    } catch (error) {
        res.status(500).send("Error deleting user");
    }
});

module.exports = router;
