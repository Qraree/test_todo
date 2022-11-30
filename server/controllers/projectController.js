const Project = require('../models/project')

class ProjectController {
    async getAllProjects(req, res) {
        try {
            let projects = await Project.find({})
            return res.json(projects)
        } catch (e) {
            console.log(e)
        }
    }

    async createProject(req, res) {
        try {
            const {name} = req.body
            const project = await Project.create({name})
            return res.json(project)
        } catch(e) {
            console.log(e)
            return res.status(400).json(e)
        }
    }

    async changeProject(req, res) {
        try {

        } catch(e) {

        }
    }

    async deleteProject(req, res) {
        try {

        } catch(e) {

        }
    }

}

module.exports  = new ProjectController()