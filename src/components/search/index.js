import React, { PropTypes, Component } from 'react';
import request from 'superagent';

class Search extends Component {

  constructor(){
    super();
    this.state = { inputValue: '' };
  }

  handleChange = (e) => {
    this.setState({ inputValue: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const query = this.state.inputValue;
    const _this = this;
    request
      .get(`https://api.flickr.com/services/rest/?&method=flickr.photos.search&format=json&nojsoncallback=?&api_key=d1d6c2d4a3494e35bba4b7bda21cb826&text=${query}`)
      .end(function(err, res){
        const urlList = _this.createUrlList(res);
        console.log(urlList);
      });
  }

  createUrlList(res) {
    let urlList = [];
    const resultsObject = JSON.parse(res.text);
    const photos = resultsObject.photos.photo;
    for (let i = 0; i < photos.length; i++) {
      urlList.push(`https://farm${photos[i].farm}.staticflickr.com/${photos[i].server}/${photos[i].id}_${photos[i].secret}.jpg`)
    }
    return urlList;
  }

  getValue = () => {
    return this.state.inputValue;
  }

  render(){
    return (
      <form>
        <label htmlFor="search">Search photos:</label>
        <input id="search" type="text" value={this.state.inputValue} onChange={this.handleChange} placeholder="e.g. Stars" />
        <button onClick={this.handleSubmit}>Search</button>
      </form>
    );
  }
}

export default Search;
