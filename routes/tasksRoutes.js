const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaskController')


// router.get('')
router.get('/add', TaskController.createTask)
router.get('/',
 (req, res, next)=>{console.log('ok'); next()},
 TaskController.showTasks
)

module.exports = router