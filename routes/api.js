const fs = require("fs");
const util = require("util");
const writetoFile = util.promisify(fs.writeFile);
const readFromFile = util.promisify(fs.readFile);

const app = require("express").Router();
var dataNotes;

// Get Api Notes Request
app.get("/api/notes", (req, res) => {
  readFromFile("./db/db.json", "utf8").then(function (data) {
    dataNotes = JSON.parse(data);
    res.json(dataNotes);
  });
});

// Post Api Notes Request
app.post("/api/notes", (req, res) => {
  readFromFile("./db/db.json", "utf8").then(function (data) {
    dataNotes = JSON.parse(data);

    const newNote = req.body;
    const currentNote = dataNotes.length;
    currentNote = currentNote + 1;

    dataNotes.push(newNote);
    dataNotes = JSON.stringify(dataNotes);

    writetoFile("./db/db.json", JSON.stringify(dataNotes));
    res.json(dataNotes);
  });
});

// Delete Api Notes Request
app.delete("/api/notes/:id", (req, res) => {
  const id = req.params.id;
  readFromFile("./db/db.json", "utf8").then(function (data) {
    dataNotes = JSON.parse(data);
    dataNotes = dataNotes.filter(function (note) {
      return note.id != id;
    });
    dataNotes = JSON.stringify(dataNotes);
    writetoFile("./db/db.json", JSON.stringify(dataNotes));
    res.json(dataNotes);
  });
});

module.exports = app;
