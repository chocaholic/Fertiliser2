var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
	
var callModel = new Schema({
	elementa: {type: Number},
	elementb: {type: Number},
	nitrogen: {type: String},
	phosphorus: {type: String},
	potash: {type: String},
	pricea: {type: String}
});

module.exports = mongoose.model('settings', callModel);