const Task = require('../models/task')
const Comment = require('../models/comment')

class TaskController {
    async getAllTasks(req, res) {
        try {
            let tasks = await Task.find({})
            return res.json(tasks)
        } catch (e) {
            console.log(e)
        }
    }

    async createTask(req, res) {
        try {
            const {name, status, projectId} = req.body
            const task = await Task.create({name, status, projectId})
            return res.json(task)
        } catch(e) {
            console.log(e)
            return res.status(400).json(e)
        }
    }

    async addComment(req, res) {
        try {
            const {_id} = req.query
            const {content} = req.body
            const comment = await Comment.create({content})
            const task = await Task.findById({_id})
            await Task.updateOne({_id: _id}, {$push: {comments: comment}})
            return res.json(comment)
        } catch(e) {
            console.log(e)
            return res.status(400).json(e)
        }
    }

    async changeTask(req, res) {
        try {

        } catch(e) {

        }
    }

    async deleteTask(req, res) {
        try {

        } catch(e) {

        }
    }

}

module.exports  = new TaskController()