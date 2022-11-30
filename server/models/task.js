const {Schema, model, ObjectId} = require("mongoose")

const Task = new Schema({
    name: {type: String, required: true},
    description: {type: String},
    createdAt: {type: Date, default: Date.now()},
    deadline: {type: String},
    priority: {type: Number, default: 1},
    files: [{type: ObjectId, ref: 'File'}],
    status: {type: String, required: true},
    checklist: [{type: ObjectId, ref: 'CheckListItem'}],
    projectId: {type: ObjectId, ref: 'Project'},
    comments: [{type: ObjectId, ref: 'Comment'}],
})

module.exports = model('Task', Task)