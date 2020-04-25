import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';
import data from '../../data.js'
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: data
    };
    this.onSearch = this.onSearch.bind(this);
  }

  onSearch (term) {
    console.log(`${term} was searched`);
    axios.post('/repos', {term})
      .then(function(res) {
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos}/>
      <Search onSearch={this.onSearch}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));