var express = require('express');
var Promise = require('bluebird');
var mongoose = Promise.promisifyAll(require('mongoose'));


(function(dataController) {
  dataController.init = function(app) {

    var db = 'mongodb://chocaholic:Brutus5hep@ds041633.mongolab.com:41633/fertiliser';
    var dataRouter = express.Router();
    var userModel = require('../models/setModel');
    var hasher = require("../data/hasher");

    var connectWithRetry = function() {
      return mongoose.connect(db, function(err) {
        if (err) {
          setTimeout(connectWithRetry, 5000);
        }

        dataRouter.route('/verify/')
          .get(function(req, res) {

          });

        app.use('/api', dataRouter);

      });
    };
    connectWithRetry();
  };

})(module.exports);