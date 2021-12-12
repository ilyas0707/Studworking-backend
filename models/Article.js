const {Schema, model} = require("mongoose")

const schema = new Schema({
    title: {type: String, required: true},
    paragraphs: {
        title: {type: String, required: true},
        text: {type: Array, required: true},
        images: {type: Array}
    },
    specific: {type: String}
})

module.exports = model("Article", schema)