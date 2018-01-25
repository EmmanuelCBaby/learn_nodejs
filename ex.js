var http = require('http');
var fs = require('fs');
http.createServer(function(req,res){
    var theFile = fs.readFileSync('./Hangman','utf8');
    res.write(theFile);
    res.end();
}).listen(8080);