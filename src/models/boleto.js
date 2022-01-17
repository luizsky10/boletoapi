const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boletoSchema = new Schema({
  barCode: {
    type: String,
    required: true,
  },
  amount: {
    type: String,
    required: true,
  },
  expirationDate: {
    type: Date,
    required: true,
  },
});

module.exports = mongoose.model("Boleto", boletoSchema);
