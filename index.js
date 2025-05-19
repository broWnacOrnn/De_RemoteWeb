const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('src/index.html', (err, data) => {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.write('Internal Server Error');            // Log the error to the console
            console.error('Error reading index.html:', err);
            return;
        }
        else {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);    // Log the successful read of index.html
            console.log('index.html read successfully');
        } 
        res.end();
    }
    );
});
const PORT = process.env.PORT || 3000;

server.listen(PORT, (error) => {
    if (error) {
        console.error('Error starting server:', error);
        return;
    }
    console.log(`Server running at http://localhost:${PORT}/`);
})