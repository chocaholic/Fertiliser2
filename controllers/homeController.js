(function(homeController) {
    homeController.init = function(app) {

        var Promise = require('bluebird');
        var mongoose = Promise.promisifyAll(require('mongoose'));
        var settings = require('../models/setModel');

        var db = mongoose.connect('mongodb://chocaholic:Brutus5hep@ds041633.mongolab.com:41633/fertiliser');

        app.get('/', function(req, res) {
            res.render("index.html", {
                title: "Woden Fertiliser Calculator"
            });
        });

        app.get('/settings', function(req, res) {
            res.render("settings.html", {
                title: "Woden Fertiliser Calculator"
            });
        });

        app.post('/calc', function(req, res) {
            var nitrogen = req.body.nitrogen;
            var phosphorus = req.body.phosphorus;
            var potash = req.body.potash;
            var pricea = req.body.pricea;
            settings.findOne({}, function(err, result){
                if(!err){
                    var totnitrogen = result.nitrogen;
                    var totphosphorus = result.phosphorus;
                    var totpotash = result.potash;
                    var priceNitrogen = (nitrogen * totnitrogen).toFixed(2);
                    var pricePhosphorus = (phosphorus * totphosphorus).toFixed(2);
                    var pricePotash = (potash * totpotash).toFixed(2);
                    var expectedPrice = (parseInt(priceNitrogen, 10) + parseInt(pricePhosphorus, 10) + parseInt(pricePotash,10));
                    res.send(expectedPrice.toString());
                } else {
                    console.log("error");
                }
            });
        });

        app.post('/savesettings', function(req, res) {
            mongoose.connection.db.dropCollection('settings', function(err, result) {
                if (!err) {
                    var nitrogen = req.body.nitrogen;
                    var phosphorus = req.body.phosphorus;
                    var potash = req.body.potash;
                    var pricea = req.body.pricea;
                    
                    var elementa = (req.body.elementa / 27).toFixed(2);
                    var elementb = (req.body.elementb / 50).toFixed(2);
                    
                    var totNitrogen = nitrogen * elementa;
                    var totPotash = potash * elementb;
                    var totPhosphorus = ((pricea - (totNitrogen + totPotash)) / phosphorus).toFixed(2);
                
                    var sett = new settings();
                    sett.nitrogen = elementa;
                    sett.phosphorus = totPhosphorus;
                    sett.potash = elementb;
                    sett.save(function(err, result) {
                        if (!err) {
                            res.redirect("/");
                        }
                        else {
                            console.log("saved");
                        }
                    });
                }
                else {
                    console.log("error");
                }
            });
        });
    };
})(module.exports);