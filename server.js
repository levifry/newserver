import { createServer } from 'node:http';

const host = 'localhost'
const port = '3007'
let path = ''

const server = createServer((request, response) => {
  path = request.path.split('/')
  if (path[0] === undefined) {
    if (request.method === 'GET') {
      response.end("Hello Galvanize!");
    }
  }
  response.statusCode(404);
  response.end();
});


server.listen(3007, "localhost", () => {
  console.log(`Server running at http://${host}:${port}/`);
});