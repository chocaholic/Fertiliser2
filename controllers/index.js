(function(controllers) {

    var homeController = require("./homeController");
    var dataController = require("./dataController");

    controllers.init = function(app) {
        homeController.init(app);
        dataController.init(app);
    };

})(module.exports);