import * as http from "http";
import * as url from "url";
import * as express from "express";
import * as bodyParser from "body-parser";
import errorHandler = require("errorhandler");
import methodOverride = require("method-override");

import * as routes from "./routes/index";
import * as db from "./db";

var app = express();

// Configuration
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var env = process.env.NODE_ENV || 'development';
if (env === 'development') {
    app.use(errorHandler());
}

// Routes
app.get('/', routes.index);
app.get('/users/:userid', routes.getUser);

//use environment variable PORT if available, else use 3000 as default
var port = process.env.PORT || 3000; 

app.listen(port, function(){
    console.log("express.ts started. Open http://localhost:%d/ (%s mode)", port, app.settings.env);
});

export var App = app;
