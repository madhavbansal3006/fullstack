const express = require("express");
const fs = require("fs");
const multer = require("multer");
const path = require("path");

const router = express.Router();

const dbFile = path.join(__dirname, "../../database/db.json");


// File storage
const storage = multer.diskStorage({

    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../uploads"));
    },

    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname);
    }

});

const upload = multer({ storage: storage });


// UPLOAD NOTE
router.post("/upload", upload.single("file"), (req, res) => {

    const data = JSON.parse(fs.readFileSync(dbFile));

    const newNote = {
        id: Date.now(),
        title: req.body.title,
        subject: req.body.subject,
        description: req.body.description,
        uploadedBy: req.body.uploadedBy,
        file: req.file.filename
    };

    data.notes.push(newNote);

    fs.writeFileSync(
        dbFile,
        JSON.stringify(data, null, 2)
    );

    res.json({
        message: "Note uploaded successfully",
        note: newNote
    });
});


// VIEW ALL NOTES
router.get("/", (req, res) => {

    const data = JSON.parse(fs.readFileSync(dbFile));

    res.json(data.notes);
});


module.exports = router;