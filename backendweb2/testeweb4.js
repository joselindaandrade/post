const express = require('express');
const bodyParser = require('body-parser');
const port= 3080;

var urlencodedParser = bodyParser.urlencoded({extended:
  false})

const app = express();
app.use(bodyParser.json());

app.post('/player',urlencodedParser, (req, res) => {
  var player = req.body.player;
  var score = req.body.score;
  var level = req.body.level;
  var time_played = req.body.time_played
  var items_collected = req.body.items_collected
  var game_mode = req.body.game_mode


  var player = {
    "player": player,
    "score" : score,
    "level" : level,
    "time_played" : time_played,
    "items_collected" : items_collected,
    "game_mode" : game_mode
  };
  console.log(player);
  res.json(player);
});



app.listen(3080, () => {
  console.log('Server na port 3080:  http://localhost:3080');
});

