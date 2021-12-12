const {Schema, model, Types} = require("mongoose")

const schema = new Schema({
    title: {type: String, required: true},
    price: {type: Number, required: true},
    rating: {type: Number, required: true},
    types: [
        {
            title: {type: String, required: true},
            volume: [
                {
                    pages: {type: Number, required: true},
                    days: {type: Number, required: true},
                    price: {type: Number, required: true},
                    fast: [
                        {
                            days: {type: Number, required: true},
                            price: {type: Number, required: true},
                        }
                    ]
                } 
            ]
        }
    ],
    feedbacks: [
        {
            owner: {type: Types.ObjectId, ref: "User"},
            body: {type: String, required: true}
        }
    ],
    paragraphs: {
        title: {type: String, required: true},
        text: {type: Array, required: true},
        images: {type: Array}
    },
    specific: {type: String}
})

module.exports = model("Service", schema)