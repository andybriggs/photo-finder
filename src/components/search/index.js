import React, { PropTypes, Component } from 'react';
import store from '../../store';
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
    this.searchApi();
  }

  searchApi = () => {
    const query = this.getValue();
    const _this = this;
    request
      .get(`https://api.flickr.com/services/rest/?&method=flickr.photos.search&format=json&nojsoncallback=?&api_key=d1d6c2d4a3494e35bba4b7bda21cb826&text=${query}`)
      .end((err, res) => {
        const photoList = _this.createPhotoList(res);
        _this.updateGallery(photoList);
      });
  }

  updateGallery = (photoList) => {
    store.dispatch({
      type: 'UPDATE-GALLERY',
      photoList
    });
  }

  updateViewer = (selectedImg) => {
    store.dispatch({
      type: 'UPDATE-VIEWER',
      selectedImg
    });
  }

  createPhotoList(res) {
    let photoList = [];
    const resultsObject = JSON.parse(res.text);
    const photos = resultsObject.photos.photo;
    for (let i = 0; i < photos.length; i++) {
      photoList.push({
        url: `https://farm${photos[i].farm}.staticflickr.com/${photos[i].server}/${photos[i].id}_${photos[i].secret}.jpg`,
        title: photos[i].title
      })
    }
    return photoList;
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
