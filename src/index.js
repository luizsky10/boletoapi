//#region Imports
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3000;
const boletoRoutes = require("./Routes/boletoRoute");
require("dotenv").config();

//#endregion

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use("/boleto", boletoRoutes);

mongoose
  .connect(process.env.MONGO_CREDENTIALS)
  .then((result) => {
    app.listen(port, () => {
      console.log(`Server listening at http://localhost:${port}`);
    });
  })
  .catch((err) => console.log(err));
