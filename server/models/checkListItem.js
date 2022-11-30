const {Schema, model, ObjectId} = require("mongoose")

const CheckListItem = new Schema({
    name: {type: String, required: true},
    done: {type: Boolean, required: true},
})

module.exports = model('CheckListItem', CheckListItem)