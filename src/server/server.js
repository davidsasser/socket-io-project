var app = require('http').createServer()
var io = module.exports.io = require('socket.io')(app);
require('dotenv').config();

const PORT = process.env.PORT || 3231
const SocketManager = require('./SocketManager')
 
io.on('connection', SocketManager);


app.listen(PORT, function(){
  console.log('listening on *:' + PORT);
  console.log(process.env.REACT_APP_SERVER)
});

