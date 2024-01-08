const Task = require('../models/Task')

module.exports = {

    async createTask(req, res){
        res.render('tasks/create')
    },

    async showTasks(req,res) {
        console.log('ok showTask')
        res.render('tasks/all')

    }
}