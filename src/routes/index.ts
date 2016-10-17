import express = require("express")
import * as db from "../db";

export function index(req: express.Request, res: express.Response) {
    res.json([
        "http://localhost:3000/users/test"
    ])
};

export function getUser(req: express.Request, res: express.Response) {
    var userid = req.params.userid;
    db.getUser(userid, function(user) {
        console.dir(user);
        res.send(user);
    });
};