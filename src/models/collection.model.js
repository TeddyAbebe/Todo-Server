'use strict';
var dbConn = require('../config/db.config');

//Collection object create
var Collection = function(collection){
  this.id = collection.id;
  this.name = collection.name;
};

Collection.create = function (newCol, result) {
    dbConn.query("INSERT INTO collections set ?", newCol, function (err, res) {
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

Collection.findById = function (id, result) {
    dbConn.query("Select * from collections where id = ? ", id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Collection.findAll = function (result) {
    dbConn.query("Select * from collections", function (err, res) {
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

Collection.update = function(id, collection, result){
    dbConn.query("UPDATE collections SET name=? WHERE id = ?", [collection.name, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{
            result(null, res);
        }
    });
};

Collection.delete = function(id, result){
    dbConn.query("DELETE FROM collections WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports= Collection;