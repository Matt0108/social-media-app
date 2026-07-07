const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcryptjs");

router.post("/register", async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(req.body.password, salt);

        const user = await User.create({
            username: req.body.username,
            email: req.body.email,
            password: hashed
        });

        res.send({
            _id: user._id,
            username: user.username,
            email: user.email
        });

    } catch (error) {
        res.status(400).send({ message: error.message });
    }
});

router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.body.username
        });

        if (!user) {
            return res.status(400).send({
                message: "User not found"
            });
        }

        const isMatch = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!isMatch) {
            return res.status(400).send({
                message: "Wrong password"
            });
        }

        res.send({
            _id: user._id,
            username: user.username,
            email: user.email
        });

    } catch (error) {
        res.status(400).send({
            message: error.message
        });
    }
});

router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        res.status(400).send({
            message: error.message
        });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.send(user);
    } catch (error) {
        res.status(400).send({
            message: error.message
        });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);

        res.send({
            message: "User deleted"
        });
    } catch (error) {
        res.status(400).send({
            message: error.message
        });
    }
});

module.exports = router;