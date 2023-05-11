const path = require("path");
const router = require("express").Router();

// GET notes request
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../assets/public/index.html"));
});

// GET * request
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../assets/public/notes.html"));
});

module.exports = router;

