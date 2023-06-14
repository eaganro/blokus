var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs');
var app = express();

app.use(express.static(__dirname + '/public/'))
app.use(bodyParser.json());

var currentPlayers = 0;
var board = [
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
];
var turn = 1;
var skips = []

app.get('/play', function(req, res){
  console.log(currentPlayers);
  if(currentPlayers < 4){
    currentPlayers++;
    res.send('./game.html?' + currentPlayers);
  } else{
    res.send();
  }
});

app.post('/data', function(req, res){
  board = req.body.board;
  turn = turn < 4 ? turn + 1 : 1;
  res.send();
});

app.post('/skip', function(req, res){
  num = req.body.num;
  console.log(num);
  skips.push(Number(num));
  res.send();
});

app.get('/data', function(req, res){
  console.log(turn, skips);
  while(skips.indexOf(turn) !== -1){
    console.log(turn);
    turn = turn < 4 ? turn + 1 : 1;
  }
  var data = {
    board: board,
    turn: turn
  }
  res.send(data);
});

app.listen(8083, function(){
  console.log('listening on port 8083');
});
