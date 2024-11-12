const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoute = require("./routes/product.route.js");

const app = express();
const PORT = 3000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello fron Node API Server Updated!");
});

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);

// Connection to mongodb
mongoose
  .connect(
    "mongodb+srv://nanami:nanami123@backenddb.8ejr5.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => console.log("Connected to database!"))
  .catch(() => console.log("Connected failed!"));
