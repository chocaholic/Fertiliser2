//Requirements
var express = require('express');
var bodyParser = require('body-parser');
var ejsEngine = require("ejs-locals");
var cookieParser = require('cookie-parser');
var session = require('express-session');
var flash = require('req-flash');
var forceSSL = require('express-force-ssl');

//Declarations
var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    secret: '198198981',
    resave: true,
    saveUninitialized: true
}));
app.use(flash({
    locals: 'flash'
}));

var controllers = require("./controllers");

//View Engine
app.engine("html", ejsEngine);
app.set("view engine", "ejs");

//Controllers
controllers.init(app);

//Set Static Routes
app.use(express.static(__dirname + "/public"));
app.use(forceSSL);
app.listen(port, function() {
    console.log('Running Running on PORT: ' + port);
});