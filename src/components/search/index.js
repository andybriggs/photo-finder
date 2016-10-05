import React, { PropTypes, Component } from 'react';
import store from '../../store';
import request from 'superagent';
import { Icon } from 'react-fa';
import { css } from 'aphrodite/no-important';
import style from './style';

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
    const query = this.getValue(),
    _this = this;
    this.updateGallery([]);
    this.loadingState(true);
    request
      .get(`https://api.flickr.com/services/rest/?&method=flickr.photos.search&format=json&nojsoncallback=?&safe_search=moderate&api_key=d1d6c2d4a3494e35bba4b7bda21cb826&text=${query}`)
      .end((err, res) => {
        const photoList = _this.createPhotoList(res);
        _this.loadingState(false);
        _this.updateGallery(photoList);
      });
  }

  loadingState = (loading) => {
    store.dispatch({
      type: 'LOADING',
      loading
    });
  }

  updateGallery = (photoList) => {
    store.dispatch({
      type: 'UPDATE-GALLERY',
      photoList
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
      <form className={css(style.form)}>
        <label htmlFor="search">Search photos:</label>
        <input
          id="search"
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
          className={css(style.input)}
          placeholder="e.g. Stars"
        />
        <button className={css(style.button)} onClick={this.handleSubmit}>
          <Icon name="search" />
          <span className={css(style.buttonText)}>Search</span>
        </button>
      </form>
    );
  }
}

export default Search;
