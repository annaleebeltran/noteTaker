// Dependencies 
const express = require("express");
const html = require("./routes/html");
const api = require("./routes/api");

// Express

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware, Data Parsing

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

app.use(express.static("public"));

// Routes
app.use("/api", api);
app.use("/", html);

// Listener PORT
app.listen(PORT, () => {
  console.log(`App listening on http://127.0.0.1:${PORT}`);
});

module.exports = app;
