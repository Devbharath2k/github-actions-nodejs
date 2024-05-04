const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;
const routes = require('./Router/Route.js');

app.use(express.json());
app.use(cors());
app.use(routes);



mongoose.connect(process.env.MONGODB_URL).then(() => {
  app.listen(PORT, () => {
    console.log("mongodb is connected on listening on port " + PORT);
  });
});
