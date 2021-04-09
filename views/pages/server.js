var http = require('http');
//var url = require('url');

http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});

/*
	if (req.method === 'GET' && path === '/index' ) {
		//if (path === '/index') {
			fs.readFile('http://localhost:8081', function(err, data) {
        			if (err) console.log(err);
		        	response.write(data);
      			});
		//}
	}
*/
	res.write('</br> <a href="http://terryconsulting.zapto.org/">Sails Profile App</a>');
	res.write('</br></br> <a href="/index">Route Profile</a> -- Trying to add route to server, but fails...');
	res.write('</br></br> <a href="http://terryconsulting.zapto.org:8081">Legacy Profile</a>');
	res.end('</br>');
}).listen(3000, "127.0.0.1");
console.log('Server running on 3000');

