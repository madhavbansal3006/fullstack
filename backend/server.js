const express = require("express");
const cors = require("cors");
const path = require("path");

const userRoutes = require("./routes/userRoutes");
const noteRoutes = require("./routes/noteRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api/users", userRoutes);
app.use("/api/notes", noteRoutes);

app.get("/", (req, res) => {
    res.send("Student Notes Sharing Backend is Running");
});

app.listen(5000, () => {
    console.log("Server running at http://localhost:5000");
});