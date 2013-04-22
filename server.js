var http = require('http');

var qs = require('querystring');

var url = require('url');



http.createServer(function (req, res) {

        var query = require('url').parse(req.url,true).query;

          res.writeHead(200, {'Content-Type': 'text/plain'});

            console.log(query.msg);

              res.end('Hello World\n');

}).listen(1337, '127.0.0.1');

console.log('Server running at http://127.0.0.1:1337/');
