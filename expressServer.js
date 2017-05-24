/**
 * Created by Yuchao on 8/8/16.
 */

var express = require('express');
var app = express();
var restRouter = require('./routes/api');
var redirectRouter = require('./routes/redirect');

app.use('/api/v1', restRouter);

app.use('/:shortUrl', redirectRouter);

/*
app.get('/', function (req, res) {
    //res.send("express server");
    res.json({
        name: "yuchao",
        age: 20
    });
});
*/

app.listen(3000);