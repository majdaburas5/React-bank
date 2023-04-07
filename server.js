const express = require("express");
const app = express();
const bankApi = require("./server/routes/bankApi");
const path = require("path");
const port = 3001;

const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/bankDB", {
    useNewUrlParser: true,
  })
  .then(() => console.log("conneted to DB"))
  .catch((err) => console.log(err));

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization, Content-Length, X-Requested-With"
  );

  next();
});
app.use(express.static(path.join(__dirname, "node_modules")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", bankApi);

app.listen(port, function () {
  console.log(`Running on port ${port}`);
});
