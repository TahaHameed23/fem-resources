import http from 'node:http';
import fs from 'node:fs';


const hostname = process.env.HOSTNAME || '127.0.0.1';
const port =process.env.PORT || 3004;

const data = fs.readFileSync('./resources.json');
const resources = JSON.parse(data);

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json'); // Set the content type to JSON
    res.end(JSON.stringify({ resources })); // Serve a JSON response
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});