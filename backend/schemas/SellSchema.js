const { Schema } = require("mongoose");
const SellSchema = new Schema({
    name: String,
    qty: Number,
    price: Number,
    sellDate: { type: Date, default: Date.now },
});

module.exports = { SellSchema };