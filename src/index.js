const path = require("path");
const express = require("express");
const morgan = require("morgan");
const hbs = require("express-handlebars");
const app = express();
const port = 3000;

// Đọc ảnh
app.use(express.static(path.join(__dirname, "public")));

// Add middleware
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// HTTP logger
// app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  hbs.engine({
    extname: ".hbs",
    encoding: "utf8",
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// function(req,res){res.send("Hello World!")};

// main path
app.get("/", (req, res) => {
  res.render("home");
});

// news path
app.get("/news", (req, res) => {
  res.render("news");
});

// search path
app.get("/search", (req, res) => {
  res.render("search");
});

app.post("/search", (req, res) => {
  console.log(req.body);
  res.send("");
});

// 127.0.0.1 : localhost

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
