const axios = require('axios');
const request = require('request');
const config = require('../config.js');

const API_URL = 'https://api.github.com/users/';

let getReposByUsername = (userName) => {
  // TODO - Use the request module to request repos for a specific
  // user from the github API

  // The options object has been provided to help you out,
  // but you'll have to fill in the URL
  if(!userName) {
    return;
  }
  let options = {
    method: 'get',
    url: `${API_URL}${userName}`,
    responseType: 'json'
   /*  headers: {
      'User-Agent': 'request',
      'Authorization': `token ${config.TOKEN}`
    } */
  };

  return axios(options);
}
/* getReposByUsername('koneru123')
.then((results) => console.log('results',results)); */
module.exports.getReposByUsername = getReposByUsername;