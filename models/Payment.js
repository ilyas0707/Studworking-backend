const {Schema, model} = require("mongoose")

const schema = new Schema({
    paymentId: {type: String, required: true},
    title: {type: String, required: true},
    value: {type: Number, required: true}
})

module.exports = model("Payment", schema)