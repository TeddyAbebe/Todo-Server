const Task = require('../models/task.model');

exports.getTodos = function(req, res) {
  Task.findAll(function(err, task) {
    if (err) res.send(err);
    console.log('res', task);
    res.send(task);
  });
};

exports.getTodoByColId = function(req, res) {
  Task.findByColId(req.params.id, function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};

exports.createTodo = function(req, res) {
  const new_task = new Task(req.body);
  //handles null error
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Task.create(new_task, function(err, task) {
      if (err) res.send(err);
      res.json({error:false,message:"Task added successfully!", data:task});
    });
  }
};

exports.getById = function(req, res) {
  Task.findById(req.params.id, function(err, task) {
    if (err) res.send(err);
    res.json(task);
  });
};


exports.updateTodo = function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Task.update(req.params.id, new Task(req.body), function(err, task) {
      if (err) res.send(err);
      res.json({ error:false, message: 'Task successfully updated' });
    });
  }
};

exports.completeTask= function(req, res) {
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(400).send({ error:true, message: 'Please provide all required field' });
  }else{
    Task.completeTask(req.params.id, new Task(req.body), function(err, task) {
      if (err) res.send(err);
      res.json({ error:false, message: 'Task completion successfully updated' });
    });
  }
};


exports.deleteTodo = function(req, res) {
  Task.delete( req.params.id, function(err, task) {
    if (err) res.send(err);
    res.json({ error:false, message: 'Task successfully deleted' });
  });
};