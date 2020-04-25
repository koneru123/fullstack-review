const { getReposByUsername }  = require('../helpers/github');
const express = require('express');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

let port = 1128;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});


app.post('/repos', function (req, res) {
  // TODO - your code here!
  // This route should take the github username provided
  // and get the repo information from the github API, then
  // save the repo information in the database


  //res.send(getReposByUsername(req.body));
  // get the data of the payload
   const data = req.body;
  // make a call to the github api
  getReposByUsername(data)
  .then((res) => {

  })
  // get response from the api
  // once response is back, it should save to the database
  // respond to the client
});

app.get('/repos', function (req, res) {
  // TODO - your code here!
  // This route should send back the top 25 repos
});



