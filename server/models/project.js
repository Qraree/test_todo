const {Schema, model, ObjectId} = require("mongoose")

const Project = new Schema({
    name: {type: String, required: true},
})

module.exports = model('Project', Project)