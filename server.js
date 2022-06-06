import { createServer } from 'node:http';
const host = 'localhost'
const port = '3001'
const server = createServer((request, response) => {
let path = request.url.split('/')
  response.end('Hello, Galvanize!');
});
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});