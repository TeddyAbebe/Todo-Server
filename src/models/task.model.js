'use strict';
var dbConn = require('../config/db.config');

//Collection object create
var Task = function(task){
  this.id = task.id;
  this.title = task.title;
  this.date = task.date;
  this.completed = task.completed;
  this.colid = task.colid;
};

Task.create = function (newCol, result) {
    dbConn.query("INSERT INTO tasks set ?", newCol, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Task.findById = function (id, result) {
    dbConn.query("Select * from tasks where id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};


Task.findByColId = function (id, result) {
    dbConn.query("Select tasks.id, tasks.title, tasks.date, tasks.completed, tasks.colid, collections.name from tasks inner join collections on tasks.colid = collections.id where colid = ?", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Task.findAll = function (result) {
    dbConn.query("Select tasks.id, tasks.title, tasks.date, tasks.completed, tasks.colid, collections.name from tasks inner join collections on tasks.colid=collections.id", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('employees : ', res);
            result(null, res);
        }
    });
};

Task.update = function(id, task, result){
    dbConn.query("UPDATE tasks SET title=? WHERE id = ?", [task.title, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });s
};

Task.completeTask = function(id, task, result){
    dbConn.query("UPDATE tasks SET completed=? WHERE id = ?", [task.completed, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

Task.delete = function(id, result){
    dbConn.query("DELETE FROM tasks WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports= Task;