const express = require("express");
const app = express();
const port = 2019;
const cors = require("cors");
const db = require("../database/indexDB")
const path = require('path')

//requirements

// use
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/public')))

// server routing
app.get("/api/products/:id", (req, res) => {
  let id = req.params.id
  db.grabOne(id, (err, product) => {
    if (err) {
      console.log("PROBLEM WITH DB", err)
    } else {
      console.log("QUERY SUCCESSFUL")
      res.send(product);
    }
  })
});

// listening
app.listen(port, () => {
  console.log(`productInfo-photos_service listening at ${port}`);
});
