const Router = require('express')
const router = new Router()
const taskController = require('../controllers/taskController')

router.get('/all', taskController.getAllTasks)
router.post('/', taskController.createTask)
router.post('/comments', taskController.addComment)
// router.put('/tasks')
// router.delete('/tasks')

module.exports = router
