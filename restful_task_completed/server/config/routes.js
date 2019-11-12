const tasksController = require('../controllers/tasks');

module.exports = function (app) {
    app.get('/api/tasks', tasksController.index);
    app.get('/api/tasks/:id', tasksController.findOne);
    app.post('/api/task', tasksController.create);
    app.put('/api/tasks/:id', tasksController.update);
    app.delete('/api/tasks/:id', tasksController.delete);
}