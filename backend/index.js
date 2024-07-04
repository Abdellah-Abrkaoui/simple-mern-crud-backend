const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route");

const app = express();

//middleware
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hell from node API !!!");
});

// routes

app.use("/api/products", productRoute);

// connect to DB
mongoose
  .connect(
    "mongodb+srv://admin:admin1234@backenddb.2erijsx.mongodb.net/Node-Api-collection?retryWrites=true&w=majority&appName=backendDb"
  )
  .then(() => {
    console.log("connected to db");
    app.listen(process.env.PORT, () => {
      console.log("hello from server side !!!", process.env.PORT);
    });
  })
  .catch(() => console.log("connection failed"));
