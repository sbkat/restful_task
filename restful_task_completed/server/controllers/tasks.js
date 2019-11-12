const mongoose = require('mongoose');

const Task = mongoose.model('Task');

module.exports = {
    index(req, res) {
        Task.find()
            .then(allTasks => res.json({tasks:allTasks, msg: 'Please do your tasks'}))
            .catch(err => res.json(err))
    },
    findOne(req, res) {
        Task.find({_id: req.params.id})
            .then(task => res.json(task))
            .catch(err => res.json(err))
    },
    create(req, res) {
        Task.create(req.body)
            .then(task => res.json(task))
            .catch(err => res.json(err))
    },
    update(req, res) {
        Task.updateOne({_id: req.params.id}, req.body)
            .then(task => res.json(task))
            .catch(err => res.json(err))
    },
    delete(req, res) {
        Task.deleteOne({_id: req.params.id})
            .then(task => res.json(task))
            .catch(err => res.json(err))
    },
}