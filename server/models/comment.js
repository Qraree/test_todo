const {Schema, model, ObjectId} = require("mongoose")

const Comment = new Schema({
    content: {type: String, required: true},
    replies: [{type: ObjectId, ref: 'Comment'}],
})

module.exports = model('Comment', Comment)