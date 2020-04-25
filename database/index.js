const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/fetcher');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('db connected');
});

let repoSchema = mongoose.Schema({
  // TODO: your schema here!
  id: Number,
  name: String,
  repos_url: String,
  repo_description: String,
  forks: Number,
  watchers: Number
});

let Repo = mongoose.model('Repo', repoSchema);

let testRepo = new Repo({id: 2, name:"priyanka", repos_url: 'hello.com', repo_description: 'gjshgfjsgf', forks: 20, watchers: 12});

/* testRepo.save()
.then(() => {console.log('saved')}); */



let save = (repos, callback) => {
  // TODO: Your code here
  // This function should save a repo or repos to
  // the MongoDB
  if(!repos) {
    return;
  }
  Repo.insertMany(repos)
  .then((res) => callback(res.length))
  .catch((err) => { console.log('error')})
}

/* save(testRepo)
.then(() => { console.log('success')})
.catch(() => { console.log('error')}) */

module.exports.save = save;