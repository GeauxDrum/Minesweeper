const express = require("express");
const app = express();
const port = 5000;
const cors = require("cors");
//const db;
const path = require("path");

//requirements

// use
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../client/public")));

// server routing
app.get("/api/products/:id", (req, res) => {
  let id = req.params.id;
  db.grabOne(id, (err, product) => {
    if (err) {
      console.log("PROBLEM WITH DB", err);
    } else {
      console.log("QUERY SUCCESSFUL");
      res.send(product);
    }
  });
});

// listening
app.listen(port, () => {
  console.log(`minesweeper listening at ${port}`);
});
