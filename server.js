var path = require('path');
const express = require("express");
const app = express();
const PORT = process.env.PORT = 3000;

app.use(express.static("web"));
app.get('/',function(req, res){
  //res.send('Hello world');
  res.sendFile(path.join(__dirname + '/web/index.html'));
  
})

app.get('/login.html',function(req, res){
  //res.send('Hello world');
  res.sendFile(path.join(__dirname + '/web/login.html'));
})



app.listen(PORT,function(){
  console.log('Server is running at PORT:',PORT);
});

/////////////Broker///////////
var mosca = require('mosca');
var settings = {
		port:1883
		}

var server = new mosca.Server(settings);

server.on('ready', function(){
console.log("ready");
});


