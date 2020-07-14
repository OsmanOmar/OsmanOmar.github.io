var express = require('express');
var app = express();

var server = require('http').createServer(app);
server.listen(process.env.PORT || 3000);
console.log('server is running')

var io = require('socket.io')(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

var connections = [];

io.on('connection', socket => {
  console.log(socket.id);

  connections.push(socket);
  console.log('%s sockets connected', connections.length);


  socket.on('emit_method', data => {
    console.log(data);
    socket.emit('customEmit', '你也好吗 client')
  });

  // disconnect
  socket.on('disconnect', () => {
    connections.splice(connections.indexOf(socket), 1);
    console.log('%s sockets connected', connections.length);
  })

})
