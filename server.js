/**
 * Created by Yuchao on 8/8/16.
 */

var http = require('http');
var fs = require('fs');

http.createServer(function(req, res) {
    console.log("server started");

    if(req.url == '/') {
        res.writeHead(200, {"Content-Type": "text-html"});
        var html = fs.readFileSync(__dirname + '/index.html');
        res.end(html);
    }

    if(req.url == '/api') {
        res.writeHead(200, {"Content-Type": "text-html"});
        var obj  = {
            name:'yuchao',
            age: 20
        };
        res.end(JSON.stringify(obj));
    }

}).listen(3000);