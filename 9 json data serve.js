var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){

    res.writeHead(200, {'Content-Type': 'application/json'});
    var obj ={
        name: 'Anshita',
        age: '23',
        gender: 'female'
    };

    res.end(JSON.stringify(obj));

});

server.listen(3000, '127.0.0.1');


