const express = require("express");
const fs = require("fs");
const bcrypt = require("bcryptjs");
const path = require("path");

const router = express.Router();

const dbFile = path.join(__dirname, "../../database/db.json");

// REGISTER
router.post("/register", async (req, res) => {

    const { name, email, password } = req.body;

    const data = JSON.parse(fs.readFileSync(dbFile));

    const existingUser = data.users.find(
        user => user.email === email
    );

    if (existingUser) {
        return res.status(400).json({
            message: "User already exists"
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
        id: Date.now(),
        name: name,
        email: email,
        password: hashedPassword
    };

    data.users.push(newUser);

    fs.writeFileSync(
        dbFile,
        JSON.stringify(data, null, 2)
    );

    res.json({
        message: "Registration successful"
    });
});


// LOGIN
router.post("/login", async (req, res) => {

    const { email, password } = req.body;

    const data = JSON.parse(fs.readFileSync(dbFile));

    const user = data.users.find(
        user => user.email === email
    );

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    const validPassword = await bcrypt.compare(
        password,
        user.password
    );

    if (!validPassword) {
        return res.status(401).json({
            message: "Incorrect password"
        });
    }

    res.json({
        message: "Login successful",
        user: {
            id: user.id,
            name: user.name,
            email: user.email
        }
    });
});

module.exports = router;