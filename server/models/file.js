const {Schema, model, ObjectId} = require("mongoose")

const File = new Schema({
    name: {type: String, required: true},
})

// todo add new field "added"

module.exports = model('File', File)