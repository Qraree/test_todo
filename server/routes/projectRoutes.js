const Router = require('express')
const router = new Router()
const projectController = require('../controllers/projectController')

router.get('/all', projectController.getAllProjects)
router.post('/', projectController.createProject)
// router.put('/tasks')
// router.delete('/tasks')

module.exports = router
