// Dependencies 
const express = require("express");
const html = require("./routes/html");
const api = require("./routes/api");

// Express
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware, Data Parsing
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.use("/api", api);
app.use("/", html);

// Listener PORT
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});

module.exports = app;
