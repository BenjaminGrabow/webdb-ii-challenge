const server = require('./server.js');

server.listen(3999, () => {
  console.log('server is running on http://localhost:3999')
});