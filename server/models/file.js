const {Schema, model, ObjectId} = require("mongoose")

const File = new Schema({
    name: {type: String, required: true},
})

module.exports = model('File', File)