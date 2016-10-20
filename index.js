var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

console.log('Web Server started, waiting for connections...');

server.listen(8080);

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
  console.log('user connected');

  socket.on('sendMessage',function(message){
    console.log(message);
    socket.emit("pushMessage", message);
  });

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('login', function(data){
      console.log(data);
    });
});