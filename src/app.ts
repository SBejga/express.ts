import * as http from "http";
import * as url from "url";
import * as express from "express";
import * as bodyParser from "body-parser";
import errorHandler = require("errorhandler");
import methodOverride = require("method-override");

import * as routes from "./routes/index";
import * as db from "./db";

var app = express();

//Views
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.set('view options', { layout: false });

// Configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

var env = process.env.NODE_ENV || 'development';
if (env === 'development') {
    app.use(errorHandler());
}

// Routes
app.get('/', routes.index);

app.get('/user/:userid', (req, res) => {
    console.log('getting user ' + req.params.userid);
    db.getUser(req.params.userid, user => {
        res.render('user', {
            title: user._id,
            username: user._id
       });
    });
});

app.listen(3000, function(){
    console.log("server listening on port %d in %s mode", 3000, app.settings.env);
});

export var App = app;