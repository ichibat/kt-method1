const express = require("express");

// paste this under var (const) express = require("express");
const exphbs = require("express-handlebars");

const app = express();

//Handlebars middleware
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);
app.set("view engine", "handlebars");

//Index Route
app.get("/", (req, res) => {
  res.send("INDEX");
});

//About Route
app.get("/about", (req, res) => {
  res.send("ABOUT");
});

const port = 8000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
