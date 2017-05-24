/**
 * Created by Yuchao on 8/8/16.
 */

var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

router.get('*', function(req, res) {
    var shortUrl = req.originalUrl.slice(1);
    var longUrl = ""; // implement this
    res.redirect(longUrl);
});

module.exports = router;